const express = require("express");

const adminController = require("./controllers/Admin.controller");
const userController = require("./controllers/user.controller");

const app = express();

app.use(express.json());

app.use("/admin", adminController);
app.use("/users", userController);

module.exports = app;
