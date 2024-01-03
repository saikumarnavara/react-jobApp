const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    confirmPassword: String,
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Register', RegisterSchema)