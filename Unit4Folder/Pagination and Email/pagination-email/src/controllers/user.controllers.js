const path = require("path");
const express = require("express");

const User = require("../models/user.model");

const sendEmail = require("../utils/sendEmail");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = new User(req.body);
    user.otp = 6545;
    user.save();

    sendEmail(
      "admin@masai.com",
      user.email,
      `${user.otp} Please verify`,
      "Please verify",
      null,
      null,
      [
        {
          contentType: "text/html",
          path: path.join(__dirname, "../name.html"),
        },
      ]
    );

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    users = await User.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
