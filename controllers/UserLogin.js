const UserModel = require("../models/userSignUp")
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const UserLogin=async(req,res)=>{

    const {name,email,password,UserName}=req.body
    try {
        if(!email){
            throw new Error('please check mail')
        }
        if(!password){
            throw new Error('please password')
        }
        const Userlogin=await UserModel.findOne({email})
        // console.log('Userlogin',Userlogin)
        if(Userlogin){
            const checkPassword=await  bcrypt.compareSync(password, Userlogin.password)
            if(checkPassword){
                const Tokendata={

                    _id:Userlogin._id,
                    
                    email:Userlogin.email
                    
                      }
                    
                     const Token=await jwt.sign(Tokendata, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});
                    //  console.log('token',Token)
                res.status(200).json({
                    data:Userlogin,
                    token:Token,
                    message:'User Login Successfully',
                    success:true,
                    error:false
                })
            }
            else {
                throw new Error('please check password')
            }
        }
        else {
            throw new Error('please signUp')
        }

        

    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
        
    }
}

module.exports=UserLogin