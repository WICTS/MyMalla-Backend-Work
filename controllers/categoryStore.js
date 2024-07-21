const categoryWise = require("../models/CategoryStore")


const categoryStore=async(req,res)=>{
    const {image , status,category}=req.body

    try {
        if(!image){
            throw new Error('please input image')
        }
        if(!status){
            throw new Error('please input status')
        }
        if(!category){
            throw new Error('please input category name')
        }

        const categoryData=await categoryWise.create({
            image,
            status,
            category
        })
        res.status(200).json({
            data:categoryData,
            success:true,
            error:false,
            message:'category data created successfully'
        })
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
        
    }
}
 module.exports= categoryStore