const mongoose=require('mongoose')

const connectToDb=async()=>{
     mongoose.connect('mongodb://0.0.0.0:27017/backend')
    .then(()=>console.log('connecting mongodb successfully '))
    .catch(()=>console.log('error in connecting  mongodb  '))
}





module.exports=connectToDb