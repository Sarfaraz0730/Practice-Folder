const express =require("express");
const { validationResult } = require("express-validator");

const router = express.Router();

const User = require("../models/user.model");

router.get("" , async (req,res) =>{
    try{
       const user = await User.find().lean().exec();
       return res.send(users)
    }catch(err){
        return res.status(500).send(err)
    }
});


router.post("", body("first_name").withMessage("Name is Required").notEmpty(), async (req,res) =>{
     console.log(body("first_name"));

     const error = validationResult(req);
     if(!error.isEmpty() ){
         const newErrors = errors.array().map(err => {return {
             message: err.msg,
             filed:gh
         }})
         return res.status(400).json({errors : errors.array()})
     }
    try{
      console.log(body("first_name"));
        const user = await User.create(req.body)
        return res.send(users)
     }catch(err){
         return res.status(500).send(err)
     }


})

module.exports = router;