import React, { useEffect, useState } from 'react'
import { loginAPI } from '../../redux/slices/login-slice'
import { useDispatch, useSelector } from 'react-redux';
import { tokenVerify } from '../../service/apiUrls';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })
    const [redirect, setRedirect] = useState(false)
    const changehandler = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
    }

    const submithandler = (e) => {
        e.preventDefault()
        console.log(loginDetails)
        const payload = {
            userName: loginDetails.username,
            password: loginDetails.password
        }
        dispatch(loginAPI(payload))
    }

    const loginResponse = useSelector((state) => state.login)



    const token = Cookies.get('token')
    axios.defaults.headers.common['x-token'] = token
    const verifyToken = async () => {

        try {
            const response = await axios.get(tokenVerify.url)
            console.log(response, 'response')
            if (response.status === 200) {
                setRedirect(true)
            }
        } catch (error) {
            console.log(error, 'error')
        }
    }
    useEffect(() => {
        if (token && token.length > 0) {
            verifyToken()
        } else {
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (redirect) {
            navigate('/main')
        }
    }, [redirect])

    return (
        <div>
            <form onSubmit={submithandler}>
                <input type='text' name='username' onChange={changehandler} placeholder='Enter your username' /><br />
                <input type='password' name='password' onChange={changehandler} placeholder='Enter your password' /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
