const delivery = require("../../models/deleveryStaff")



const deliveryList=async(req,res)=>{
    try {
        
        const cdeliverylist=await delivery.find()
        if(categorylist){
            return res.status(200).json({
                data:cdeliverylist,
                success:true,
                error:false,
                message:'i have all data'
            })
        }else{
            throw new Error('data is not available in category store')
        }


    } catch (error) {
        res.json|({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=deliveryList