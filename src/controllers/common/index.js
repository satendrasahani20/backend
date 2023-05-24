const users = require("../../models/users")
exports.getUser = async (req, res) => {
    try {
        const data = await users.findOne({ _id: req.userId },{password:0})
        res.status(200).send({data })
    } catch (error) {
        return res.status(400).send({ "error is": error.message })
    }
}