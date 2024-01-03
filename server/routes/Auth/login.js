const express = require('express');
const router = express.Router();
const registerUser = require('../../schemas/RegisterSchema');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await registerUser.findOne({ userName });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const payload = {
            user: {
                id: user.id,
            }
        };

        jwt.sign(
            payload,
            'jwtSecret',
            {
                expiresIn: '1hr'
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token });
            }
        );
    } catch (err) {
        console.log(err.message)
        registerUser.status(500).send('Error in Saving');
    }
})

module.exports = router
