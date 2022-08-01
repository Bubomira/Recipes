const express = require('express');
const mongoose = require('mongoose')

const router = require('./router')
const cors = require('./middlewares/cors')
const auth = require('./middlewares/auth')

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

app.use(express.json())
app.use(cors())
app.use(auth())
app.use(router)


app.listen('3030',()=>console.log('REST service started on port 3030...'))