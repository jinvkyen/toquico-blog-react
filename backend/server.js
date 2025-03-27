import express from 'express'
import mongoose from "mongoose";
import 'dotenv/config';

const server = express();
let PORT = process.env.PORT;

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true
});




// listening
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
