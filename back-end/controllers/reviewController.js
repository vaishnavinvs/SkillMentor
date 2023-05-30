
const reviews = require("../models/reviewSchema")




exports.getallReviews = async (req,res)=>{
    try{
        const allreviews = await reviews.find()
        res.status(200).json(allreviews)
    }
    catch(error){
        res.status(401).json(error)
    }
} 