const AppUserData = require("../../models/appUser")




const getallUserList=async(req,res)=>{
    try {
        
        const allUser=await AppUserData.find()
        if(allUser){
            return res.status(200).json({
                data:allUser,
                success:true,
                error:false,
                message:'i have all data'
            })
        }else{
            throw new Error('data is not available in all  list store')
        }


    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=getallUserList