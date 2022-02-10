const express = require("express");
const Student = require("../model/student.model");

const router = express.Router();
const Book = require("../model/student.model")
module.exports = router;


//create
router.post("/", async(req,res) => {
    const student = await Student.create(req.body);
    res.status(201).json(student)
    });
    
    //get
    
    router.get("/", async(req,res) => {
        const students = await student.find().lean().exec();
        res.status(201).json(students)
    });