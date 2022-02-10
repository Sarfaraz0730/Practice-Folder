const express = require("express");

const userController = require("./contollers/user.controller")
const app = express();
app.use(express.json())

app.use("/user", userController)
module.exports = app;