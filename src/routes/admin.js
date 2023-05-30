import express from "express"
import {getCourse, saveCourse, updateCourse, deleteCourse, getModule} from "../controllers/admin/index.js"
const router=express.Router();
router.get("/course",getCourse)
router.post("/course",saveCourse)
router.put("/course",updateCourse)
router.delete("/course",deleteCourse)
router.get("/module",getModule)
export default router;