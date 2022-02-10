const {Schema,model} = require("mongoose");

const authorSchema  =  new Schema({
    name : {type : String, required:true},
});

const Author = model("authors", authorSchema);

module.exports = Author;