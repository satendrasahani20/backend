const jwt = require("jsonwebtoken")
const users = require("../../models/users")
const { userNotRegister, notMatchPassword, loginSuccess } = require("../../utils/Response")
exports.login = async (req, res) => {
    try {
        const data = await users.findOne({ email: req.body.email });
        if (!data) {
            return userNotRegister(res)
        } else if (data.password !== req.body.password) {
            return notMatchPassword(res)
        }else{
            const tempObj={
                role:data.role,
                _id:data._id,
                name:data.name,
                image:data.image
            }
             token = jwt.sign(tempObj, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE })
            return loginSuccess(res,"Login Success",tempObj,token)
        }

    } catch (err) {

        res.status(400).send({ "error is": err.message })
    }
}
