import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import User from "./Schema/User.js";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import cors from "cors";
import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";

// import service account key
import { readFileSync } from "fs";
import { error } from "console";

const serviceAccountKey = JSON.parse(
  readFileSync(new URL("../toqui-co-firebase-adminsdk-fbsvc-4d74332063.json", import.meta.url))
);

const server = express();
let PORT = process.env.PORT;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

// register
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

// formatting data to send
const formatDatatoSend = (user) => {
  const access_token = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY);

  return {
    access_token,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    fullname: user.personal_info.fullname,
  };
};

// generate user function
const generateUsername = async (email) => {
  let username = email.split("@")[0];

  let isUsernameNotUnique = await User.exists({ "personal_info.username": username }).then((result) => result);

  isUsernameNotUnique ? (username += nanoid().substring(0, 5)) : "";
  return username;
};

// to use json body
server.use(express.json());

server.use(cors());

// for the registration - fullname, email and password
server.post("/register", (req, res) => {
  let { fullname, email, password } = req.body;

  // validating the data from frontend

  if (!fullname) {
    return res.status(403).json({ error: "Visible missing fields." });
  }
  if (!email) {
    return res.status(403).json({ error: "Visible missing fields." });
  }
  if (!password) {
    return res.status(403).json({ error: "Visible missing fields." });
  }

  if (fullname.length < 5) {
    return res.status(403).json({ error: "Full name is not short." });
  }
  if (!email.length) {
    return res.status(403).json({ error: "Email is required." });
  }
  if (!emailRegex.test(email)) {
    return res.status(403).json({ error: "Invalid email." });
  }
  if (!password.length) {
    return res.status(403).json({ error: "Password must be 8 characters long." });
  }
  if (!passwordRegex.test(password)) {
    return res.status(403).json({ error: "Enter a stronger password." });
  }

  bcrypt.hash(password, 10, async (err, hashed_password) => {
    try {
      let username = await generateUsername(email);
      let user = new User({
        personal_info: {
          fullname,
          email,
          password: hashed_password,
          username,
        },
      });

      user
        .save()
        .then((u) => {
          return res.status(200).json(formatDatatoSend(u));
        })
        .catch((err) => {
          return res.status(500).json({ error: "Email already exists." });
        });
    } catch (error) {
      if (err.code == 11000) {
        return res.status(500).json({ error: "Email already exists." });
      }
      return res.status(500).json({ error: error.message });
    }
  });

  //   return res.status(200).json({ status: "okay" });
});

// sign in
server.post("/login", (req, res) => {
  let { email, password } = req.body;

  User.findOne({ "personal_info.email": email })
    .then((user) => {
      if (!user) {
        return res.status(403).json({ error: "Enter your credentials." });
      }

      if (!user.google_auth) {
        bcrypt.compare(password, user.personal_info.password, (err, result) => {
          if (err) {
            return res.status(403).json({ error: "Error occure while logging in, please try again." });
          }

          if (!result) {
            // be vague for security reasons
            return res.status(403).json({ error: "Incorrect credentials." });
          } else {
            return res.status(200).json(formatDatatoSend(user));
          }
        });
      } else {
        return res.status(403).json({"error": "Account was created using Google. Instead, try logging in with your Google account."})
      }

      bcrypt.compare(password, user.personal_info.password, (err, result) => {
        if (err) {
          return res.status(403).json({ error: "Error occure while logging in, please try again." });
        }

        if (!result) {
          // be vague for security reasons
          return res.status(403).json({ error: "Incorrect credentials." });
        } else {
          return res.status(200).json(formatDatatoSend(user));
        }
      });

      // console.log(user);
      // return res.json({ status: "document was retrieved from the user." });
    })
    .catch((err) => {
      console.log(err.message);
      return res.status(500).json({ error: err.message });
    });
});

// google auth
server.post("/google-auth", async (req, res) => {
  let { access_token } = req.body;

  getAuth()
    .verifyIdToken(access_token)
    .then(async (decodeUser) => {
      let { email, name, picture } = decodeUser;

      picture = picture.replace("s96-c", "s384-c");

      let user = await User.findOne({ "personal_info.email": email })
        .select("personal_info.fullname personal_info.username personal_info.profile_img google_auth")
        .then((u) => {
          return u || null;
        })
        .catch((err) => {
          return res.status(500).json({ error: err.message });
        });

      if (user) {
        //login
        if (!user.google_auth) {
          return res.status(403).json({
            error: "The email is signed up without google. Please log in with password to access the account.",
          });
        }
      } else {
        //signup

        let username = await generateUsername(email);

        user = new User({
          personal_info: { fullname: name, email, profile_img: picture, username },
          google_auth: true,
        });

        await user
          .save()
          .then((u) => {
            user = u;
          })
          .catch((err) => {
            return res.status(500).json({ error: err.message });
          });
      }

      return res.status(200).json(formatDatatoSend(user));
    })
    .catch(() => {
      return res.status(500).json({ error: "Failed to authenticate with Google, try another account." });
    });
});

// listening
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
