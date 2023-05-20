
exports.getUser=async (req,res)=>{
    try {
        res.status(200).send({ "msg": "I am admin",_id:req.role })
    } catch (error) {
        return res.status(400).send({ "error is": error })
    }
}