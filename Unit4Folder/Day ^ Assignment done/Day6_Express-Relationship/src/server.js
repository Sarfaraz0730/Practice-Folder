const express =  require("express");

const connect = require("./config/db")

const app = express()
app.use(express.json());

// app.use("/book")

const sectionController = require("./controllers/section.controller");
const authorController = require("./controllers/author.controller");
const bookController = require("./controllers/book.controller");
const checkoutController = require("./controllers/checkout.controller")

app.use("/section",sectionController);

app.use("/book",bookController )
app.use("/checkout",checkoutController)
app.use("/author",authorController)


const start = () => {
    app.listen(8001, async ()=>{
        await  connect();
        console.log("Listening on port 8001..... ");
    });
}

module.exports=start