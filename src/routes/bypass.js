const express=require("express");
const { login } = require("../controllers/bypass");
const router=express.Router();
router.post("/login",login)
router.post("/test",(req,res)=>{
    res.status(2000).json({msg:"Login Successfully"})
})
module.exports=router;