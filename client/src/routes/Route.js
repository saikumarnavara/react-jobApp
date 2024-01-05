import { Routes, Route } from 'react-router-dom';
import Home from '../components/Screens/Home'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
export const route = (
    <Routes>
        <Route path='/main' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
)