const express=require("express");
const { login } = require("../controllers/bypass");
const router=express.Router();
router.post("/login",login)

module.exports=router;