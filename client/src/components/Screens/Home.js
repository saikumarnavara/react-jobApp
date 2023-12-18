import React, { useEffect, useState } from 'react'
import Landing from '../Containers/Landing';
import EmployeesData from '../Containers/EmployeesData';
import { useDispatch, useSelector } from 'react-redux';
import { getEmpSuccess } from '../../redux/slices/getEmpSlice'
import { getEmpDetailApi } from '../../redux/slices/getEmpSlice'
const Home = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state.getEmployees)
    useEffect(() => {
        dispatch(getEmpDetailApi())
    }, [])
    useEffect(() => {
        setEmployees(state.emp)
        setLoading(state.status)
    }, [state.emp, state.status])

    return (
        <div>
            <Landing />
            <EmployeesData data={employees} status={loading} />
        </div>
    )
}
export default Home
