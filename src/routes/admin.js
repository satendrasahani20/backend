const express=require("express");
const { getCourse, saveCourse, updateCourse, deleteCourse, getModule } = require("../controllers/admin");
const router=express.Router();
router.get("/course",getCourse)
router.post("/course",saveCourse)
router.put("/course",updateCourse)
router.delete("/course",deleteCourse)
router.get("/module",getModule)
module.exports=router;