import React, { useState } from 'react'
import '../../styles/Style.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAPI } from '../../redux/slices/register-slice';
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerDetails, setRegisterDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value })
    }
    const registerUserResponse = useSelector((state) => state.register);
    const { loading, error, success, user } = registerUserResponse;


    const submitHandler = (e) => {
        const payload = {
            name: registerDetails.name,
            email: registerDetails.email,
            password: registerDetails.password,
            confirmPassword: registerDetails.confirmPassword
        }
        e.preventDefault()
        console.log(registerDetails)
        dispatch(registerUserAPI(payload))
    }

    if (success) {
        alert('Registration successful')

    }
    if (error) {
        alert('Registration failed')
    }

    if (success) {
        navigate('/login')
    }



    return (
        <div className='register-form'>
            <h1>Register form</h1>
            <form onSubmit={submitHandler} autoComplete='true'>
                <input type='text' name='name' onChange={handleChange} placeholder='Enter your name' /><br />
                <input type='email' name='email' onChange={handleChange} placeholder='Enter your email' /><br />
                <input type='password' name='password' onChange={handleChange} placeholder='Enter your password' /><br />
                <input type='password' name='confirmPassword' onChange={handleChange} placeholder='Confirm your password' /><br />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
