import express from "express"
import {getUser} from "../controllers/common/index.js"
const router=express.Router();
router.get("/get-user",getUser)
 export default router;