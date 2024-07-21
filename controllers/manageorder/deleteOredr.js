

const ManageOrder = require("../../models/manageOrder")






const deleteOrder=async(req,res)=>{
    const id=req.params._id
try {
    if(!id){
        throw new Error('please check details')
    }

    const deleteData=await  ManageOrder.findByIdAndDelete({_id:id})
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
module.exports= deleteOrder