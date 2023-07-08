const express = require('express')
const router = express.Router()
const AllData = require('../model')
router.get('/', async (req, res) => {
    try {
        const alldata = AllData.find();
        return res.json(await alldata)
    } catch (err) {
        console.log(err.messasge)
    }
})

module.exports = router

