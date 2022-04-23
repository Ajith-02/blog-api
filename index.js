const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MONGO_URL"))
.catch(err=>console.log(err));


app.listen("5000", () => {
    console.log("Server started in Port number 5000");
});