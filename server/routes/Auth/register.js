const express = require('express')
const router = express.Router()

const registerUser = require('../../schemas/RegisterSchema')

router.post('/', async (req, res) => {
    const { userName, email, password, confirmPassword } = req.body;
    try {
        const newUser = new registerUser({ userName, email, password, confirmPassword })
        newUser.save()
        return res.json(await registerUser.find())
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router

