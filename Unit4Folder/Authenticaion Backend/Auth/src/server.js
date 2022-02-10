const express = require ('express');

const app = express()
app.set('view-engine' , 'ejs')

app.get("/" , (res,req) =>{
    res.render('index.ejs')
});

app.get("/login", ()=>{
    res.render('login.ejs')
});

app.get("/register", ()=>{
    res.render('login.ejs')
});

app.listen(3000)