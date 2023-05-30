import {getCourse} from "../controllers/student/index.js"
// const { registerValidator } = require('../validator/index')
import express from "express"
const router = express.Router();


router.get('/', getCourse)
export default router;