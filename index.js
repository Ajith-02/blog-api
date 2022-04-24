const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MONGO_URL"))
.catch(err=>console.log(err));

app.use("/api", authRoute);
app.use("/api/user", userRoute);

app.listen("5000", () => {
    console.log("Server started in Port number 5000");
});