const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    role:{
        type:String,
        required:true,
        default:"user"
    }
})

module.exports=mongoose.model("User",userSchema)