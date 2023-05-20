const jwt = require("jsonwebtoken")
exports.getCourse = async (req, res) => {
    try {
        const data = { id: "sdjsk3uhjd89", role: "Admin" }
        token = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE })
        res.status(200).send({ "msg": "I am admin", token })

    } catch (err) {
        res.status(400).send({ "error is": err })
    }
}