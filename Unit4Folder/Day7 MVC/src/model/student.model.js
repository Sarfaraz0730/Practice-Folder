const {Schema,model} = require("mongoose");

const studentSchema  =  new Schema({
    name : {type : String, required:true},
    current_batch:{type : String, required:true},
    userid : {type :'ObjectID',ref:"users", required:true},
});

const Student = model("student", studentSchema );

module.exports = Student;