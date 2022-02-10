const {Schema,model} = require("mongoose");

const checkoutSchema = new Schema({
    book:{type:'ObjectID',ref:"books",required:true}

});

const Checkout = model("checkouts",checkoutSchema );

module.exports = Checkout;