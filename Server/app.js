const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")

app.use(cookieParser());
app.use(express.json());
const dotenv = require("dotenv");

dotenv.config({path:'./config.env'});

require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;




//app.get('/profile', (req,res) => {
    //res.cookie("jwtoken", 'tokenname')
   //res.send('profile')
//});

//app.get('/contact', (req,res) => {
//    res.send('contact')
//});

//app.get('/signin', (req,res) => {
//    res.send('login')
//});

app.get('/signup', (req,res) => {
    res.send('signup')
});


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})