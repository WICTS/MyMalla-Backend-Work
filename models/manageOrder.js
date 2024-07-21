const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    orderId :String,
    store:String,
    User:String,
    phone:Number,
    address:String,
    amount:String,
}
,{timestamps:true}
)

const ManageOrder=mongoose.model('ManageOrder',orderSchema)

module.exports=ManageOrder