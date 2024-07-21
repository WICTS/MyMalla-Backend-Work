const mongoose=require('mongoose')

const appUser=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    wallet:String,
    TotalOrder:String,
}
,{timestamps:true}
)

const AppUserData=mongoose.model('appUser',appUser)

module.exports=AppUserData