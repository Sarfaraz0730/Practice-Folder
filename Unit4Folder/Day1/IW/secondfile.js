const thirdfile = require("./Thirdfile");
let myName = "My name sarfaraz "

function one (){
    console.log(`one ${myName}`);
    console.log(Thirdfile())
    console.log("Hello i am function 1")
}

function two (){
    console.log(`two ${myName}`)
    console.log("Hello i am function two")
}

module.exports ={
    one:one,
    two:two,
}