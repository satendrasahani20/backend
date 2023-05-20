exports.getCourse = async (req, res) => {
    try {
        res.status(200).send({ "msg": "I am Coordinator" })

    } catch (err) {
        res.status(400).send({ "error is": err })
    }
}
