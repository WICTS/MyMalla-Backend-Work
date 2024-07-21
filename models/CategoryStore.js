

const mongoose=require('mongoose')

const CategorySchema=new mongoose.Schema({
    image:String,
    category:String,
    status:String,
},
{
    timestamps:true
}
)

const categoryWise=mongoose.model('category',CategorySchema)

module.exports=categoryWise