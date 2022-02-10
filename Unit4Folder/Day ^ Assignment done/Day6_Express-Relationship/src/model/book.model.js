const {Schema,model} = require("mongoose");

const bookSchema = new Schema({
    name: {type:String, required: true},
    author:{type:'ObjectID', ref: "authors", required:true},
    section : {type :'ObjectID',ref:"sections", required:true},
    isCheckout:{type:Boolean, default:false}
});

const Book = model("books",bookSchema);

module.exports = Book;    

//day 6 assignment