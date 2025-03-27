import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import User from "./Schema/User.js";

const server = express();
let PORT = process.env.PORT;

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

// to use json body
server.use(express.json());

// for the registration - fullname, email and password
server.post("/user/register", (req, res) => {
  let { fullname, email, password } = req.body;

  // validating the data from frontend

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

  bcrypt.hash(password, 10, (hashed_password) => {
    try {
      let username = email.split("@")[0];

      let user = new User({
        personal_info: {
          fullname,
          email,
          password: hashed_password,
          username,
        },
      });

      user.save().then((u) => {
        return res.status(200).json({ user: u });
      });

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

//   return res.status(200).json({ status: "okay" });
});

// listening
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
