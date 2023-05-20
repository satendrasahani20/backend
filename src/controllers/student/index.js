const User = require("../../models/users")

exports.getCourse = async (req, res) => {
    try {
        let result=await User.find()
        res.status(200).send({ "msg": "I am users",data:result })

    } catch (err) {
        res.status(400).send({ "error is": err })
    }
}







// const User = require("../../models/users")

// exports.getUser = async (req, res) => {
//     try {
//         const Users = await User.find()
//         res.status(200).send(Users)
//     } catch (err) {
//         res.status(400).send("Error is " + err)
//     }


// }
// exports.registerUser = (req, res) => {
//     const RegisterUser = new User(req.body)
//     RegisterUser.save(((error, result) => {
//         if (error) {
//             res.status(400).send({ "msg": "Email is already exists" })
//         }
//         res.status(200).send({ result })
//     }))
// }
// exports.updateUser = async (req, res) => {
//     try {
//         const Users = await User.findOne({ email: req.body.email });
//         if (Users) {
//             if (Users.password === req.body.password) {
//                 const UpdateData = await User.updateOne({ email: req.body.email }, { name: req.body.name })
//                 res.status(200).send({ "msg": "Update data Successfully" })
//             }
//         }
//         res.status(401).send({ "msg": "Please Check Your email or password" })

//     } catch (err) {
//         res.status(400).send({ "error is": err })
//     }
// }
// exports.deleteUser = async (req, res) => {
//     try {
//         const Users = await User.findOne({ email: req.body.email });
//         if (Users) {
//             if (Users.password === req.body.password) {
//                 const UpdateData = await User.deleteOne({ email: req.body.email }, { name: req.body.name })
//                 res.status(200).send({ "msg": "Delete data Successfully" })
//             }
//         }
//         res.status(401).send({ "msg": "Please Check Your email or password" })

//     } catch (err) {
//         res.status(400).send({ "error is": err })
//     }
// }