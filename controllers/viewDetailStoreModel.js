const storeModel = require("../models/storeModel")




const viewDetailStoreModel=async(req,res)=>{

    const id=req.params._id
    console.log('id',id)
    try {
        if(!id){
            throw new Error('please check user details')
        }
        const findDetails=await storeModel.findById({_id:id})
        console.log('findDetails',findDetails)
        if(findDetails){
            return res.status(200).json({
                data:findDetails,
                success:true,
                error:false,
                message:'data fetch succesfully'
            })
        }else {
            throw new Error('please check your details')
        }
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=viewDetailStoreModel