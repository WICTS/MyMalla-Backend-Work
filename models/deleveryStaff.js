

const mongoose=require('mongoose')

const CategorySchema=new mongoose.Schema({
    name:String,
    phone:String,
    password:String,
    charge:String,
    km:String,
    status:String,
},
{
    timestamps:true
}
)

const delivery=mongoose.model('deliveryStaff',CategorySchema)

module.exports=delivery