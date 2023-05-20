const mongoose = require("mongoose")
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        default: "",
    },
    contact: {
        type: String,
        default: "",
    },
    motherName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("student", studentSchema)