import jwt from "jsonwebtoken";
import users from "../../models/users.js"
import { userNotRegister, notMatchPassword, loginSuccess} from "../../utils/response.js"
export const login = async (req, res) => {
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
             const token = jwt.sign(tempObj, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE })
            return loginSuccess(res,"Login Success",tempObj,token)
        }

    } catch (err) {

        res.status(400).send({ "error is": err.message })
    }
}
