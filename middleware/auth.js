const jwt=require("jsonwebtoken")
const {Secret}=require("../../config/app").jwt


module.exports=(req,res, next)=>{
    const authHeader=req.get("Авторизация")
    if(!authHeader){
        res.status(401).json({message:"Token not provided!"})
        return
    }
const token=authHeader.replace("Barer","")
    try{

       const payload=jwt.verify(token,jwsSecret)
        if(payload.type !=="access"){
             res.status(401).json({message:"Invalid token!"})
            return;
        }
    }catch (e){
        if(e instanceof jwt.TokenExpiredError){
            res.status(401).json({message:"Token expired "})
            return;
        }
        if(e instanceof jwt.JsonWebTokenError){
            res.status(401).json({message:"Invalid token "})
            return;
        }
    }
    next()
}