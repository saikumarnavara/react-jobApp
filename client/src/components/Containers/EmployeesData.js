import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { deleteEmp, getEmpDetails } from '../../service/apiUrls';
import { DeleteEmp } from './DeleteEmp';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";

const EmployeesData = () => {
    const [empData, setEmpData] = useState([])
    const [loading, setLoading] = useState(false)
    const getEmp = async () => {
        try {
            const response = await axios.get(getEmpDetails.url)
            // const finalData = await response.json();
            setEmpData(response.data)
            setLoading(true)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    useEffect(() => {
        getEmp()
    }, [empData])

    if (!loading) {
        return (
            <center><p>Loading...</p></center>
        )
    }

    return (
        <div className='container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>EmpId</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>DOJ</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empData.map((item) => {
                            return (
                                <>
                                    <tr key={item._id}>
                                        <td>{item.EmpId}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Designation}</td>
                                        <td>{item.doj}</td>
                                        <td>{item.phone}</td>
                                        <h4 onClick={() => { DeleteEmp(item._id) }}><AiFillDelete /></h4>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default EmployeesData
