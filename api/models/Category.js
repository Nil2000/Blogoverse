const mongoose=require('mongoose')

const CategorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true})//timestamp to store time


//exports model
module.exports=mongoose.model("Category",CategorySchema);