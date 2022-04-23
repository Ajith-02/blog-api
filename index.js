const express = require("express");
const app = express();

console.log("Api");

app.listen(3000, function(){
    console.log("Server started in Port number 3000");
});