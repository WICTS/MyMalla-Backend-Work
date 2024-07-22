const delivery = require("../../models/deleveryStaff")


const createdeliveryControllers=async(req,res)=>{
    const { name,
        phone,
        password,
        charge,
        km,
        status,}=req.body
    try {
        
        if(!name){
            throw new Error('please check order id')
        }
        if(!password){
            throw new Error('please check store name')
        }
        if(!charge){
            throw new Error('please check user name')
        }
        if(!phone){
            throw new Error('please input mobile number')
        }
        if(!km){
            throw new Error('please input address')

        }
        if(!status){
            throw new Error('please inter price')
        }

        const storeData=await delivery.create({
            name,
        phone,
        password,
        charge,
        km,
        status,
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
module.exports=createdeliveryControllers