import express from "express";
import {login} from "../controllers/bypass/index.js"
const router=express.Router();
router.post("/login",login)
router.get("/test",(req,res)=>{
    res.status(2000).json({msg:"Login Successfully"})
})
 export default router;