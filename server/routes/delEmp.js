const express = require('express')
const router = express.Router()
const EmpData = require('../model')
router.delete('/deleteemp/:id', async (req, res) => {
    try {
        await EmpData.findByIdAndDelete(req.params.id);
        return res.json(await EmpData.find())
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router