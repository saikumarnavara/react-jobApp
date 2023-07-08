const mongoose = require('mongoose')

const EmployeeDetails = mongoose.Schema({
    EmpId: Number,
    Name: String,
    Designation: String,
    doj: String,
    address: String,
    phone: Number,
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Employees Details', EmployeeDetails)