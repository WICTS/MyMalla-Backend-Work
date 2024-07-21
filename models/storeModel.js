const mongoose=require('mongoose')

const createSchema=new mongoose.Schema({
    orderId :String,
    store:String,
    User:String,
    phone:String,
    address:String,
    amount:String,
}
,{timestamps:true}
)

const storeModel=mongoose.model('store',createSchema)

module.exports=storeModel