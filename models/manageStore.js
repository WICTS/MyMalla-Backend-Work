

const mongoose=require('mongoose')

const CategorySchema=new mongoose.Schema({
    image:String,
    type:String,
    status:String,
    login:String
},
{
    timestamps:true
}
)

const manageStoreData=mongoose.model('manageStore',CategorySchema)

module.exports=manageStoreData