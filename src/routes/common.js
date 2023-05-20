const express=require("express");
const {  getUser } = require("../controllers/common");
const router=express.Router();
router.get("/get-user",getUser)

module.exports=router;