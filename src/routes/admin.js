const express=require("express");
const { getCourse } = require("../controllers/admin");
const router=express.Router();
router.get("/course",getCourse)

module.exports=router;