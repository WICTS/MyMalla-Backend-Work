const categoryWise = require("../models/CategoryStore")


const categoryUpdate=async(req,res)=>{
    const {image , status,category}=req.body
    const id=req.params._id
    try {
     const update=   await categoryWise.findByIdAndUpdate({_id:id},{$set:{image:image,status:status,category:category}},{new:true})
     res.status(200).json({
        data:update,
        success:true,
        error:false,
        message:"category data updated successfully "
     })
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}
    module.exports=categoryUpdate
