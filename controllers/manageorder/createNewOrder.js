const ManageOrder = require("../../models/manageOrder")

const OrderControllers=async(req,res)=>{
    const { orderId,store,User,phone,address,amount}=req.body
    try {
        
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

        const storeData=await ManageOrder.create({
            orderId,
            store,
            User,
            phone,
            address,
            amount
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
module.exports=OrderControllers