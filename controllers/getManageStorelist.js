
const manageStoreData = require("../models/manageStore")


const manageStorelist=async(req,res)=>{
    try {
        
        const manageStore=await manageStoreData.find()
        if(manageStore){
            return res.status(200).json({
                data:manageStore,
                success:true,
                error:false,
                message:'i have all data'
            })
        }else{
            throw new Error('data is not available in manage store')
        }


    } catch (error) {
        res.json|({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=manageStorelist