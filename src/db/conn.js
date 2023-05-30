import mongoose from "mongoose"
let tempURI="mongodb+srv://satendrasahani19:mongodb1345@cluster0.hwaxhm8.mongodb.net/smartedu"
mongoose.connect(process.env.MONGO_URI || tempURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Data Connection Successfully")
}).catch((err)=>{
    console.log("error is" + err)
})