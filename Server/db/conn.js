const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB) 
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})