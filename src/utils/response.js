exports.unAuthourized=(res,message="Unautherized")=>{
    return  res.status(401).json({  message })
}
exports.notValidToken=(res,message="Not a Valid Token")=>{
    return  res.status(401).json({  message })
}
exports.userNotRegister=(res,message="User Not Register")=>{
    return  res.status(401).json({  message })
}
exports.notMatchPassword=(res,message="Please check Email or Password")=>{
    return  res.status(403).json({  message })
}
exports.loginSuccess=(res,message,data,token)=>{
    return  res.status(200).json({  message,data,token })
}