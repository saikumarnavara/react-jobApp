import { Routes, Route } from 'react-router-dom';
import Home from '../components/Screens/Home'
export const route = (
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
)