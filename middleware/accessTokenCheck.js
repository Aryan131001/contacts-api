const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const accessTokenCheck = asynchandler(async(req,res,next)=>{
    console.log("hi");
    const authtoken = req.headers.authorization || req.headers.Authorization;
    console.log(authtoken);
    if(authtoken && authtoken.startsWith("Bearer")){
        const token = authtoken.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("Unauthorized");
            }
            else{
                req.user = decoded.userExist;
                next();
            }
        });
    }
    })

    module.exports = accessTokenCheck;