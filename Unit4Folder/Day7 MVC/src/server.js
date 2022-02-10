const express =  require("express");

const connect = require("./config/db")

const app = express()
app.use(express.json());

// app.use("/book")


const authorController = require("./controllers/evalution.controller");
const bookController = require("./controllers/user.controller");
const checkoutController = require("./controllers/student.controller")



app.use("/user",userController )
app.use("/evalution",evalutioncontroller)
app.use("/student",studentcontroller)


const start = () => {
    app.listen(8001, async ()=>{
        await  connect();
        console.log("Listening on port 8001..... ");
    });
}

module.exports=start