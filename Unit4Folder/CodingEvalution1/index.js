const express = require ("express");

const mongoose = require("mongoose");

const connect = ()=>{
 return mongoose.connect("mongodb://127.0.0.1:27017/newproduct");
}


const userSchema = new mongoose.Schema({
  
    product_name:{type:String, require : true},
    price:{type:Number,require:true},
    catogry:{type:String, require:true},
    company_name:{type:String, require:true},
    gender:{type:String,require:true},
    color:{type:String,require:true}
    


});




const User = mongoose.model("user",userSchema) 





const app = express();

app.get("/users", async (req,res)=>{
   try{

       const users = await User.find().lean().exec() 
       return res.send(users);
   } catch(err){
         return res.status(500).json({err : err.message})
   }
});

app.listen(2345 , async()=>{
  try{

      await connect()
       console.log("Listening on port 2345")
  } catch(err){
      console.log(err.message);
  }
});