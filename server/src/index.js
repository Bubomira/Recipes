const express = require('express');
const mongoose = require('mongoose')

const app = express();

const start = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/recipes')
        console.log('Connected to database!')
    }catch(err){
        console.log(err)
    }
}
start();

app.listen('3030',()=>console.log('App is listening on port 3030...'))