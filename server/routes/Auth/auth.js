const express = require('express')
const router = express.Router()
const middleware = require('../Auth/middleware')
const User = require('../../schemas/RegisterSchema')
router.get('/', middleware, async (req, res) => {
    try {
        let user = await User.findById(req.user.id)
        if (!user) return res.status(400).json({ message: 'User Not Exist' })
        res.json(user)
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ message: 'Server Error' })
    }
})

module.exports = router