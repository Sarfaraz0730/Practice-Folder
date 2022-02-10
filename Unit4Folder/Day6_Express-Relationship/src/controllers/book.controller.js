const express = require("express")

const router = express.Router();
const Book = require("../model/book.model")
module.exports = router;


//create
router.post("/", async(req,res) => {
    const book = await Book.create(req.body);
    res.status(201).json(book)
    });
    
    //get
    
    router.get("/", async(req,res) => {
        const books = await Book.find().lean().exec();
        res.status(201).json(books)
    });