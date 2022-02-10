const express = require("express")

const router = express.Router();
const User = require("../model/user.model")
module.exports = router;


//create
router.post("/", async(req,res) => {
    const user = await User.create(req.body);
    res.status(201).json(book)
    });
    
    //get
    
    router.get("/", async(req,res) => {
        const users = await User.find().lean().exec();
        res.status(201).json( users)
    });