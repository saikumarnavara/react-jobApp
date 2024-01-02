import React, { useEffect, useState } from 'react'
import Landing from '../Containers/Landing';
import EmployeesData from '../Containers/EmployeesData';
const Home = () => {
    return (
        <div>
            <Landing />
            <EmployeesData />
        </div>
    )
}
export default Home
