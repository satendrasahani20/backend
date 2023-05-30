// require("dotenv").config({ path: './.env' })
// require("./src/db/conn.js")

// const express = require("express")

// const studentRoute = require('./src/routes/student')
// const adminRoute = require('./src/routes/admin')
// const coordinatorRoute = require("./src/routes/coordinator")
// const centreRoute = require("./src/routes/centre")
// const commonRoute = require("./src/routes/common")
// const byPassRoute = require("./src/routes/bypass")
// const expressValidator = require('express-validator')
// const { jwtAuth } = require("./src/middleware/auth.js")
import dotenv from "dotenv"
dotenv.config({ path: './.env' })
import "./src/db/conn.js"

import express from "express"

import {jwtAuth} from "./src/middleware/auth.js"
import studentRoute from "./src/routes/student.js"
import commonRoute from "./src/routes/common.js"
import adminRoute from "./src/routes/admin.js"
import cors from "cors"
import expressValidator from "express-validator"
import byPassRoute from "./src/routes/bypass.js"

const app = express();
const port = process.env.PORT || 4000


app.use(cors());
app.use(expressValidator())
app.use(express.json())

app.use("/", byPassRoute)
app.get("/", (req,res)=>{
    res.status(200).json({
        message:"URl not found"
    })
})
app.use(jwtAuth)
app.use("/student", studentRoute)
app.use("/admin", adminRoute)
// app.use("/coordinator", coordinatorRoute)
// app.use("/centre", centreRoute)
app.use("/", commonRoute)
app.listen(port, () => {
    console.log("App run on ", port)
})