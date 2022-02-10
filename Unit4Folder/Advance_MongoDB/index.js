const express = require ("express");

const mongoose = require("mongoose");




// step 1 is connecting  mongodb with express
const connect = ()=>{
 return mongoose.connect("mongodb://127.0.0.1:27017/product");
}



//2 step 
// step 2 ) Build schema



const userSchema = new mongoose.Schema({
    // book_name :{type : String,require:true},
    // author_firstName:{type:String, require:true},
    // author_lastName:{type:String,require:true},
    product_name:{type:String, require : true},
    price:{type:Number,require:true},
    catogry:{type:String, require:true},
    company_name:{type:String, require:true}
    


});
//step2 creating model
const User = mongoose.model("user",userSchema) //users =>users=>USer





const app = express();

app.get("/users", async (req,res)=>{
   try{

       const users = await User.find().lean().exec() //
       return res.send(users);
   } catch(err){
         return res.status(500).json({err : err.message})
   }
});

app.listen(2345 , async()=>{
  
   await connect()
    console.log("Listening on port 2345")
});