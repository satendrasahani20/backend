const { getCourse} = require('../controllers/student')
// const { registerValidator } = require('../validator/index')
const express = require("express")
router = express.Router();


router.get('/', getCourse)
module.exports = router