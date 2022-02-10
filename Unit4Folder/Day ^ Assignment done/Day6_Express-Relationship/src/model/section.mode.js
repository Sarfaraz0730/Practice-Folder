const {Schema,model} = require("mongoose");

const sectionSchema = new Schema( {
    name: {type:String, required:true}
});

const Section = model("sections", sectionSchema);

module.exports = Section