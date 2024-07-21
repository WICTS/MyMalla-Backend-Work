const manageStoreData = require("../models/manageStore")


const manageStore=async(req,res)=>{
    const {image,name,login,status,type}=req.body
    try {
        
        if(!image){
            throw new Error('please check order id')
        }
        if(!name){
            throw new Error('please check store name')
        }
        if(!login){
            throw new Error('please check user name')
        }
        if(!status){
            throw new Error('please input mobile number')
        }
        if(!type){
            throw new Error('please input address')

        }
       

        const storeData=await manageStoreData.create({
            image,name,login,status,type
        })
        res.status(200).json({
            data:storeData,
            success:true,
            error:false,
            message:'store details created'
        })


    } catch (error) {
        res.json({
            error:error.message||error,
            success:false,
            error:true
        })
        
    }

}
module.exports=manageStore
