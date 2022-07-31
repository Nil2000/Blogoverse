const express=require('express');
const mongoose=require('mongoose')
const app=express();

const dotenv=require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to DB')).catch(error=>{
    console.log(error);
})


app.listen(3000,()=>{
    console.log("Server is running in background");
})