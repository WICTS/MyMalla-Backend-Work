const AppUserData = require("../../models/appUser")

const AppControllers=async(req,res)=>{
    const { name, email, phone,  wallet, TotalOrder}=req.body
    try {
        
        if(!name){
            throw new Error('please check order id')
        }
        if(!email){
            throw new Error('please check store name')
        }
        if(!wallet){
            throw new Error('please check user name')
        }
        if(!phone){
            throw new Error('please input mobile number')
        }
        if(!TotalOrder){
            throw new Error('please input address')

        }
       

        const createData=await AppUserData.create({
            name, email, phone,  wallet, TotalOrder
        })
        res.status(200).json({
            data:createData,
            success:true,
            error:false,
            message:'App User details created'
        })


    } catch (error) {
        res.json({
            error:error.message||error,
            success:false,
            error:true
        })
        
    }

    






}
module.exports=AppControllers