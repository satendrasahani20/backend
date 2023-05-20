exports.registerValidator = (req, res, next) => {
    //name
    req.check("name", "Name is Required").notEmpty()
    req.check("name", "Name character minimum size is 3 and Max size is 14").isLength({
        min: 3,
        max: 12
    })
    //email
    req.check("email", "Email is Required").notEmpty()
    req.check("email", "Email character minimum size is 3 and Max size is 14").isLength({
        min: 9,
        max: 30
    })
    //password
    req.check("password", "Password is Required").notEmpty()
    req.check("password", "Password character minimum size is 3 and Max size is 14").isLength({
        min: 3,
        max: 14
    })
    const errors = req.validationErrors()
    if (errors) {
        const firstError = errors.map((err) => err.msg)[0];
        res.status(400).send({ error:firstError })
    }else{
        next();
    }

}