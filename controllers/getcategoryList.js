const categoryWise = require("../models/CategoryStore")


const getCategoryList=async(req,res)=>{
    try {
        
        const categorylist=await categoryWise.find()
        if(categorylist){
            return res.status(200).json({
                data:categorylist,
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

module.exports=getCategoryList