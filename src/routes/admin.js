import express from "express"
import {getCourse, saveCourse, updateCourse, deleteCourse, getModule} from "../controllers/admin/index.js"
import { modules } from "../controllers/admin/modules/index.js";
import { questions } from "../controllers/admin/questions/index.js";
const router=express.Router();
router.get("/course",getCourse)
router.post("/course",saveCourse)
router.put("/course",updateCourse)
router.delete("/course",deleteCourse)
router.get("/module",getModule)
router.use("/module",modules)
router.use("/questions",questions)
export default router;