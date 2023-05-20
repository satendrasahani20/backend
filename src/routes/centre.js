const express=require("express");
const { getCourse } = require("../controllers/centre");
const router=express.Router();
router.get("/",getCourse)

module.exports=router;