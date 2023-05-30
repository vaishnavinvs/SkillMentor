const placements = require("../models/placementSchema")


exports.getallPlacements = async (req,res)=>{
    try{
        const allPlacements = await placements.find()
        res.status(200).json(allPlacements)
    }
    catch(error){
        res.status(401).json(error)
    }
}