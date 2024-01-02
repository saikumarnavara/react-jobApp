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

    const [empId, setEmpId] = useState('')
    const [name, setName] = useState('')
    const [desig, setDesig] = useState('')
    const [doj, setDoj] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const payload = {
        "EmpId": empId,
        "Name": name,
        "Designation": desig,
        "doj": doj,
        "address": address,
        "phone": phone
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
        setEmpId('')
        setAddress('')
        setDesig('')
        setDoj('')
        setPhone('')
        setName('')

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
                        <InputGroup className="mb-3" type='number' value={empId} onChange={(e) => { setEmpId(e.target.value) }}>
                            <InputGroup.Text id="basic-addon1">Emp Id</InputGroup.Text>
                            <Form.Control
                                placeholder="Emp Id"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                required />
                        </InputGroup>
                        <InputGroup className="mb-3" value={name} onChange={(e) => { setName(e.target.value) }}>
                            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" value={desig} onChange={(e) => { setDesig(e.target.value) }}>
                            <InputGroup.Text id="basic-addon1">Designation</InputGroup.Text>
                            <Form.Control
                                placeholder="Designation"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" value={doj} onChange={(e) => { setDoj(e.target.value) }}>
                            <InputGroup.Text id="basic-addon1">DOJ</InputGroup.Text>
                            <Form.Control
                                placeholder="Date of join"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" type='number' value={phone} onChange={(e) => { setPhone(e.target.value) }}>
                            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                            <Form.Control
                                placeholder="Enter Moble Number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3" value={address} onChange={(e) => { setAddress(e.target.value) }}>
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
