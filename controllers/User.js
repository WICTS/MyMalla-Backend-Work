// const storeModel = require("../models/storeModel")
const UserModel = require("../models/userSignUp")
const bcrypt = require('bcryptjs')
// const storeModel = require("../models/storeModel")



const UserCreate=async(req,res)=>{

    try {
        const {name,email,password,UserName}=req.body

    if(!name){
        throw new Error('please check your name')
    }
    if(!email){
        throw new Error('please check your email')
    }
    if(!password){
        throw new Error('please check your password')
    }
    if(!UserName){
        throw new Error('please check your user name')
    }

    const userDetails=await UserModel.findOne({email})
    if(!userDetails){
       
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)
    const User=await UserModel.create({
        name,
        email,
        password:hashPassword,
        UserName
    })
    res.status(200).json({
        data:User,
        success:true,
        error:false,
        message:'User created Successfully'
    })
    }
    else {
        throw new Error('user Allready exist')
     
    }
    } catch (err) {
        res.json({
            message:err.message||err,
            error:true,
            success:false
        })
       
    }
    


}





module.exports={
    UserCreate,
    
}
