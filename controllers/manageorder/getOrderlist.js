const ManageOrder = require("../../models/manageOrder")



const getorderList=async(req,res)=>{
    try {
        
        const orderData=await ManageOrder.find()
        if(orderData){
            return res.status(200).json({
                data:orderData,
                success:true,
                error:false,
                message:'i have all data'
            })
        }else{
            throw new Error('data is not available in order list store')
        }


    } catch (error) {
        res.json|({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=getorderList