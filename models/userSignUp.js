const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    UserName:String,
    password:String,
    email:{
        type:String,
        unique:true,

    },
    
},
{timestamps:true}
)

const UserModel=mongoose.model('UserSignUp',userSchema)

module.exports=UserModel
