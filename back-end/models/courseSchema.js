const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    course_name:{
        type:String,
        required:true
    },
    course_description:{
        type:String,
        required:true
    },
    next_batch:{
        cochin :{
            type:String,
            required:true
        },
        calicut:{
            type:String,
            required:true
        }
    },
    Duration:{
        type:String,
        required:true
    },
    Course_Fee:{
        Offline:{
            type:Number,
            required:true 
        },
        Online:{
            type:Number,
            required:true
        }
    }


})

const courses = new mongoose.model("courses",courseSchema)

module.exports =  courses