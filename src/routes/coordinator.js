const express=require("express");
const { getCourse } = require("../controllers/coordinator");
const router=express.Router();
router.get("/",getCourse)

module.exports=router;