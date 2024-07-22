const storeModel = require("../models/storeModel")




const deleteDataTostore=async(req,res)=>{
    const id=req.params._id
try {
    // if(!id){
    //     throw new Error('please check details')
    // }

    const deleteData=await  storeModel.findByIdAndDelete({_id:id})
  
    if(deleteData){
        res.json({
            data:deleteData,
            success:true,
            error:false,
            message:"data deleted successfully"
        })
    }
    else {
        throw new Error('data is not available in storage')
    }
} catch (error) {
    res.json({
        message:error.message||error,
        success:false,
        error:true
    })
    
}
}
module.exports= deleteDataTostore