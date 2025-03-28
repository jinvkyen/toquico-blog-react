import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import User from "./Schema/User.js";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import cors from 'cors'

const server = express();
let PORT = process.env.PORT;

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

// register

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

// formatting data to send
const formatDatatoSend = (user) => {
  const acces_token = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY);

  return {
    acces_token,
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

server.use(cors())

// for the registration - fullname, email and password
server.post("/register", (req, res) => {
  let { fullname, email, password } = req.body;

  // validating the data from frontend

  if (!fullname) {
    return res.status(403).json({"error": "Visible missing fields."})
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

// listening
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
