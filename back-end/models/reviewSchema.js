const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})


const reviews = new mongoose.model("reviews",reviewSchema)

module.exports =  reviews