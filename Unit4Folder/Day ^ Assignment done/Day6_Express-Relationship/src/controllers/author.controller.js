const express = require("express");
const Author = require("../model/author.model");

const router = express.Router();

//create
router.post("/", async(req,res) => {
const author = await Author.create(req.body);
res.status(201).json(author)
});

//get

router.get("/", async(req,res) => {
    const author = await Author.find().lean().exec();
    res.status(201).json(authors)
});

module.exports = router