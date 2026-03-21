const asyncHandler = require("express-async-handler");
const userPool = require("../models/userModels");
const crypto = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc for registering user

const registerUser = asyncHandler(async(req,res)=>{
    const {userEmail, userPassword} = req.body;
    const userExist = await userPool.findOne({userEmail:userEmail});
    if(userExist){
        res.status(404); 
        throw new Error("Already there");
    }
    // const hashedPassword = await crypto.hash(userPassword,10);
    // console.log(hashedPassword);
    const userCreated = await userPool.create({
            userEmail,
            userPassword,
        })
res.status(200).send({userCreated});
})

const loginUser = asyncHandler(async(req,res)=>{
    const {userEmail, userPassword} = req.body;
    const userExist = await userPool.findOne({userEmail:userEmail});
    if(userExist && userExist.userPassword===userPassword){
        // console.log("hi");
        const accessToken = jwt.sign({
            userExist:{
                userEmail:userExist.userEmail,
            },
        }
        ,process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"15m"});
        res.status(200).send({
            accessToken
        });
    }
    else{
        res.status(404);
        throw new Error("Invalid user 09")
    }
})


// We are making it private first

const findUser = asyncHandler(async(req,res)=>{
    const {userEmail} = req.body;
    
    const userExist = await userPool.findOne({userEmail:userEmail});
    if(userExist){
        res.status(200).send({userExist});
    }
    else{
        res.status(404);
        throw new Error("User not found");
    }
})

module .exports = {registerUser,loginUser,findUser}