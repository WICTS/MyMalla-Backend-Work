const delivery = require("../../models/deleveryStaff")



const deliveryUpdate=async(req,res)=>{
    const { name, phone, password, charge, km, status,}=req.body
    const id=req.params._id
    try {
     const update=   await delivery.findByIdAndUpdate({_id:id},{$set:{name:name,phone:phone,password:password,charge:charge,km:km,status:status}},{new:true})
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
    module.exports=deliveryUpdate
