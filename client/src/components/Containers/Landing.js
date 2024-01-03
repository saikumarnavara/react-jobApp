import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addEmpDetails } from '../../service/apiUrls';
import { getEmpDetailApi } from '../../redux/slices/getEmpSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Landing = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [employeDetails, setEmployeDetails] = useState({
        empId: '',
        name: '',
        desig: '',
        doj: '',
        phone: '',
        address: ''
    })


    const payload = {
        "EmpId": employeDetails.empId,
        "Name": employeDetails.name,
        "Designation": employeDetails.desig,
        "doj": employeDetails.doj,
        "address": employeDetails.address,
        "phone": employeDetails.phone
    }

    const addEmp = () => {
        try {
            axios.post(addEmpDetails.url, payload)
                .then((res) => {
                    dispatch(getEmpDetailApi())
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err.message)
        }
    }
    const OnsubmitHandler = (e) => {
        addEmp()
        setShow(false)
        setEmployeDetails({
            empId: '',
            name: '',
            desig: '',
            doj: '',
            phone: '',
            address: ''
        })
    }



    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Employees
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Emp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <InputGroup className="mb-3" type='number' value={employeDetails.empId} onChange={(e) => { setEmployeDetails(prevState => ({ ...prevState, empId: e.target.value })) }}>
                            <InputGroup.Text id="basic-addon1">Emp Id</InputGroup.Text>
                            <Form.Control
                                placeholder="Emp Id"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                required />
                        </InputGroup>
                        <InputGroup className="mb-3" value={employeDetails.name} onChange={(e) => { setEmployeDetails(prevState => ({ ...prevState, name: e.target.value })) }}>
                            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" value={employeDetails.desig} onChange={(e) => { setEmployeDetails(prevState => ({ ...prevState, desig: e.target.value })) }}>
                            <InputGroup.Text id="basic-addon1">Designation</InputGroup.Text>
                            <Form.Control
                                placeholder="Designation"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" value={employeDetails.doj} onChange={(e) => { setEmployeDetails(prevState => ({ ...prevState, doj: e.target.value })) }}>
                            <InputGroup.Text id="basic-addon1">DOJ</InputGroup.Text>
                            <Form.Control
                                placeholder="Date of join"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" type='number' value={employeDetails.phone} onChange={(e) => { setEmployeDetails(prevState => ({ ...prevState, phone: e.target.value })) }}>
                            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                            <Form.Control
                                placeholder="Enter Moble Number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3" value={employeDetails.address} onChange={(e) => { setEmployeDetails(prevState => ({ ...prevState, address: e.target.value })) }}>
                            <InputGroup.Text>With textarea</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={OnsubmitHandler}>
                        Add Employee
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Landing
