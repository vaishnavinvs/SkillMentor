const mongoose = require('mongoose')


 const placementSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    trainer:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

 })

 const placements = new mongoose.model("placements",placementSchema)

 module.exports =  placements