const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
    },
    author:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    }
},{timestamps:true})//timestamp to store time


//exports model
module.exports=mongoose.model("Post",PostSchema);