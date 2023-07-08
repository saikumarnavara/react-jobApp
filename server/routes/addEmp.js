const express = require('express')
const router = express.Router()
const AddEmployess = require('../model')
router.post('/', async (req, res) => {
    const { EmpId, Name, Designation, doj, Address, phone } = req.body;
    try {
        const newData = new AddEmployess({ EmpId, Name, Designation, doj, Address, phone })
        newData.save()
        return res.json(await AddEmployess.find())
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router 