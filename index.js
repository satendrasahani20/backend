const express=require("express")
const app=express();

app.get("/",(req,res)=>{
res.send({
    name:"Satendra"
})    
})
app.listen(8000,()=>{
    console.log("working",8000)
})