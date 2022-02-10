
const {Schema,model} = require("mongoose");

const userSchema = new Schema({
   first_name: {type:String, required: true},
   last_name: {type:String, required: true},
   date_of_birth: {type:Number, required: true},

    student:{type:'ObjectID', ref: "students", required:true},
    evalution : {type :'ObjectID',ref:" evalution", required:true},
  
});

const User = model("users",userSchema);

module.exports =  User;