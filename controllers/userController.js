const asyncHandler = require("express-async-handler");
const userPool = require("../models/userModels");
const crypto = require("bcrypt");


//@desc for registering user

const registerUser = asyncHandler(async(req,res)=>{
    const {userEmail, userPassword} = req.body;
    const userExist = await userPool.findOne({userEmail:userEmail});
    if(userExist){
        res.status(404); 
        throw new Error("Already there");
    }
    console.log("lki")
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
        res.status(201).json({message:"Login Successfull"})
    }
    else{
        res.status(404);
        throw new Error("Invalid user 09")
    }
})

module .exports = {registerUser,loginUser}