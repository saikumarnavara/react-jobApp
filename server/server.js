const express = require('express');
const cors = require('cors')
const app = express();
const port = 4001
app.use(cors({ origin: "*" }))
app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sai1342:04121998%40Dob@cluster0.woilnkh.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log('DB connected..')).catch(err => console.log(err))

const getEmp = require('./routes/getEmp')
const addEmp = require('./routes/addEmp')
const delEmp = require('./routes/delEmp')
const registerUser = require('./routes/Auth/register')
const loginUser = require('./routes/Auth/login')
const auth = require('./routes/Auth/auth')
app.use('/getemployees', getEmp)
app.use('/addemployees', addEmp)
app.use('/deleteemployees', delEmp);
app.use('/register', registerUser)
app.use('/login', loginUser)
app.use('/auth', auth)
app.get('/', (req, res) => {
    res.send('welcome to server')
})
app.listen(port, () => {
    console.log('Server is running on port :', port)
})