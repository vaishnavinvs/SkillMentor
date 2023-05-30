const express = require('express')
const courseController = require('../controllers/courseController')
const placementController = require('../controllers/placementController')
const reviewController = require('../controllers/reviewController')

const router = new express.Router()

// all courses in course
router.get('/courses/course',courseController.getallCourses)



// view course
router.get('/courses/view-course/:id',courseController.viewCourse)


// student placements
router.get('/courses/placement',placementController.getallPlacements)


// reviews
router.get('/courses/about_us',reviewController.getallReviews)


module.exports = router