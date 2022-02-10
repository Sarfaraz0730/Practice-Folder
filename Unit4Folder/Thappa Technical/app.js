const express = require("express");
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello Backedn Programming")
})

app.listen(8000, ()=>{
    console.log("Listening on port 800")
})