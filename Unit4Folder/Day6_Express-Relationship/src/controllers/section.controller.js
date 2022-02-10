const express = require('express');
const router = express.Router()
const Section = require('../model/section.mode');

//create

router.post("/", async(req,res) => {
  const section = await Section.create(req.body)
    res.status(201).json(section);
})

//get request

router.get("/" , async(req,res) =>{
  const sections = await Section.find({}).lean().exec()
  res.status(201).json(sections);
});
module.exports = router;