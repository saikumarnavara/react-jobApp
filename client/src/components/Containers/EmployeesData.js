import React, { useEffect, useState } from 'react'
import { DeleteEmp } from './DeleteEmp';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { getEmpDetailApi } from '../../redux/slices/getEmpSlice'
const EmployeesData = ({ data, status }) => {
    const dispatch = useDispatch()
    const [empData, setEmpData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(status)
        setEmpData(data)
    }, [data])

    if (loading === 'loading') {
        return (
            <center><p>Loading...</p></center>
        )
    }
    else if (loading === 'failed') {
        return (
            <center><p>Failed to load data</p></center>
        )
    }

    async function deleteHandler(id) {
        try {
            await DeleteEmp(id)
            dispatch(getEmpDetailApi())
        } catch (err) {
            console.log(err)
        }
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
                                        <h4 onClick={() => { deleteHandler(item._id) }}><AiFillDelete /></h4>
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
