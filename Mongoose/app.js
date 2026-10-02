const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
const userModel = require('./usermodel');
app.get('/create',async(req,res)=>{
    let createuser = await userModel.create({
        name : "teena",
        email : "teena@gmail.com"
    })

    res.send(createuser);
});

app.listen(3000);