const express = require("express");
const Book = require("../model/book.model");
const Checkout = require("../model/checkout.model");

const router = express.Router();

module.exports = router;

//create
router.post("/", async(req,res) => {
    const bookupdate = await Book.findByIdAndUpdate(req.body.book, {isCheckout  :true})
    const checkout = await Checkout.create(req.body);
    res.status(201).json(checkout,bookupdate)
    });
    
    //get
    

    router.get("/", async(req,res) => {
        const checkout = await Checkout.find().lean().exec();
        res.status(201).json(checkouts)
    });





    