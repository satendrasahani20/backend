export const unAuthourized=(res,message="Unautherized")=>{
    return  res.status(401).json({  message })
}
export const notValidToken=(res,message="Not a Valid Token")=>{
    return  res.status(401).json({  message })
}
export const userNotRegister=(res,message="User Not Register")=>{
    return  res.status(401).json({  message })
}
export const notMatchPassword=(res,message="Please check Email or Password")=>{
    return  res.status(403).json({  message })
}
export const loginSuccess=(res,message,data,token)=>{
    return  res.status(200).json({  message,data,token })
}