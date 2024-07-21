const storeModel = require("../models/storeModel")

const somestoreController=async(req,res)=>{
    try {
        const { orderId,store,User,phone,address,amount}=req.body
        
        if(!orderId){
            throw new Error('please check order id')
        }
        if(!store){
            throw new Error('please check store name')
        }
        if(!User){
            throw new Error('please check user name')
        }
        if(!phone){
            throw new Error('please input mobile number')
        }
        if(!address){
            throw new Error('please input address')

        }
        if(!amount){
            throw new Error('please inter price')
        }

        const Data=await storeModel.create({
            orderId,
            store,
            User,
            phone,
            address,
            amount
        })
        console.log('storeData',Data)
        res.status(200).json({
            data:Data,
            success:true,
            error:false,
            message:'store details created'
        })


    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
        
    }

    






}
module.exports=somestoreController