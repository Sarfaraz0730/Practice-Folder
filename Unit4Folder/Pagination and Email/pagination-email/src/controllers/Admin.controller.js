const path = require("path");

const express = require("express");

const admin = require("../models/Admin.model");
const User = require("../models/user.model");



const sendEmail = require("../utils/sendEmail");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    const user = await User.findById(admin.user_id).lean().exec();

    sendEmail(
      "admin@masai.com",
      [user.email, "a@a.com"],
      `${user.name} Welcome to my site`,
      "Product is created",
      "<h1>Product is created</h1>",
      [{ filename: "name.html", path: path.join(__dirname, "../name.html") }]
    );

    return res.status(201).send("product");
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 5;
    let search = req.query.search;



    const skip = (page - 1) * size;

    let admin, totalPages;
    if (!search) {
      admins = await admin.find().skip(skip).limit(size).lean().exec();

      totalPages = Math.ceil((await Admin.find().countDocuments()) / size);
    } else {
      admin = await Admin.find({ name: search })
        .skip(skip)
        .limit(size)
        .lean()
        .exec();
      totalPages = Math.ceil((await Admin.find().countDocuments()) / size);
    }

    return res.status(200).send({ admin, totalPages });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
