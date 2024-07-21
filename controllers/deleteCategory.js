

const categoryWise = require("../models/CategoryStore")





const deleteCategory=async(req,res)=>{
    const id=req.params._id
try {
    if(!id){
        throw new Error('please check details')
    }

    const deleteData=await  categoryWise.findByIdAndDelete({_id:id})
    if(deleteData){
        throw new Error('store data deleted successfully')
    }
    else {
        throw new Error('please check your data ')
    }
} catch (error) {
    res.json|({
        message:error.message||error,
        success:false,
        error:true
    })
    
}
}
module.exports= deleteCategory