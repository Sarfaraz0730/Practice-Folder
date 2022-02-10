const {Schema,model} = require("mongoose");

const evalutionSchema = new Schema({

    date_of_evalution: {type:Number, required: true},
    instructor_name:{type:String,required:true},


    userid:{type:'ObjectID',ref:"users",required:true}


});

const Evalution = model("evalutions",evalutionSchema );

module.exports = Evalution;