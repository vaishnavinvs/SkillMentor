const courses = require('../models/courseSchema')

// all course

exports.getallCourses = async (req,res)=>{
    try{
        const allCourses = await courses.find()
        res.status(200).json(allCourses)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// view course
exports.viewCourse = async (req,res)=>{
    const id = req.params.id

    try{
        const course = await courses.findOne({id})
        if(course)
        {
            res.status(200).json(course)
        }
        else
        {
            res.status(404).json("Course is not found...!")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}