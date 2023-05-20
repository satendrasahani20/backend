const jwt = require("jsonwebtoken");
const { notValidToken,unAuthourized } = require("../utils/Response");
exports.jwtAuth = async (req, res, next) => {
    const token=req.headers["authorization"];
    if(!token){
      return  unAuthourized(res)
    }
    const bearer=token.split(" ");
    if(bearer.length !==2){
        return notValidToken(res)
    }
    if(bearer[0]!=="Bearer"){
        return  notValidToken(res)
    }
    const bearerToken=bearer[1];
    jwt.verify(bearerToken,process.env.JWT_SECRET_KEY,(err,decode)=>{
        if(err){
            return notValidToken(res)
        }
        req.userId=decode._id;
        req.role=decode.role;
        req.name=decode.name;
        req.image=decode.image;
        next();
    })
   
}