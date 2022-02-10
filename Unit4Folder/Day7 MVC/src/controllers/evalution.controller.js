const express = require("express");
const User = require("../model/user.model");
const Evalution = require("../model/evalution.model");

const router = express.Router();

module.exports = router;

//create
router.post("/", async(req,res) => {
    const userupdate = await User.findByIdAndUpdate(req.body.book, {evalution :true})
    const user = await User.create(req.body);
    res.status(201).json(evalution,userupdate)
    });
    
    //get
    

    router.get("/", async(req,res) => {
        const evalution = await Evalution.find().lean().exec();
        res.status(201).json(evalutions)
    });



router.get("/evalution", async(req,res) => {
    const evalution = await Evalution.find({evalution : true}).lean().exec();
    res.status(201).json(evalutions)
});

