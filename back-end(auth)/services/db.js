

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/educational_app')



const User = mongoose.model('User',{
    uname:String,
    email:String,
    pswd:String
})

module.exports = {
    User
}