import React, { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Home from '../../layout/Header';
import { FaEye } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";

import './adduser.scss'

const AddUser = () => {

    const [role, setRole] = useState('');
    const [ngo, setNgo] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirem] = useState('');
    const [acceptTerms, setacceptTerms] = useState('');
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!role.trim()) {
            errors.role = 'role is required';
            isValid = false;
        }
        if (!ngo.trim()) {
            errors.ngo = 'ngo is required';
            isValid = false;
        }

        if (!firstName.trim()) {
            errors.firstName = 'first name is required';
            isValid = false;
        }
        if (!lastname.trim()) {
            errors.lastname = 'last name is required';
            isValid = false;
        }
        if (!mobileNumber) {
            errors.mobileNumber = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(mobileNumber)) {
            errors.mobileNumber = 'Mobile number must be exactly 10 digits';
            isValid = false;
        }

        if (!username.trim()) {
            errors.username = 'username is required';
            isValid = false;
        }
        if (!password.trim()) {
            errors.password = 'password is required';
            isValid = false;
        }
        if (!confirmPassword.trim()) {
            errors.confirmPassword = 'confirm password is required';
            isValid = false;
        } else if (password != confirmPassword) {
            errors.confirmPassword = 'confirm password not match with password';
        }
        if (!acceptTerms.trim()) {
            errors.acceptTerms = 'this field is required';
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = 'email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'invalid email address';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };
    console.log("errors", errors);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            let newData = {
                role, ngo, firstName, lastname, mobileNumber, email, username, password, confirmPassword, acceptTerms
            }
            console.log("newData", newData);
        };
    }
    return (
        <div >
            <Home />
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center", color: 'rgb(205, 9, 142)', fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '24px' }}>User Registration Form</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
                            <Row className='mt-2'>
                                <Col lg={6} md={6} sm={12}>

                                    <Form.Label>Role :</Form.Label>
                                    <Form.Select aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)} >
                                        <option value="" >Select</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="NGO">NGO</option>
                                        <option value="Screener">Screener</option>
                                        <option value="Sevika">Sevika</option>
                                        <option value="Pharmacy">Pharmacy</option>
                                    </Form.Select>
                                    {errors.role && <span className="error text-danger">{errors.role}</span>}

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="ngo">
                                        <Form.Label>NGO:</Form.Label>
                                        <Form.Select aria-label="Default select example" value={ngo} onChange={(e) => setNgo(e.target.value)} >
                                            <option value="" >Select</option>
                                            <option value="Blue Knee">Blue Knee</option>
                                            <option value="testngo">testngo</option>
                                            <option value="ngodev">ngodev</option>
                                            <option value="Piramal Swasthya Management">Piramal Swasthya Management</option>
                                        </Form.Select>
                                        {errors.ngo && <span className="error text-danger">{errors.ngo}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" name="firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                                    </Form.Group>
                                    {errors.firstName && <span className="error text-danger">{errors.firstName}</span>}
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control type="text" name="lastName" value={lastname} onChange={(e) => setlastName(e.target.value)} />
                                    </Form.Group>
                                    {errors.lastname && <span className="error text-danger">{errors.lastname}</span>}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="mobileNumber" className='mt-2'>
                                        <Form.Label>Mobile Number:</Form.Label>
                                        <Form.Control type="tel" name="mobileNumber" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
                                    </Form.Group>
                                    {errors.mobileNumber && <span className="error text-danger">{errors.mobileNumber}</span>}
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="email" className='mt-2'>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
                                    </Form.Group>
                                    {errors.email && <span className="error text-danger">{errors.email}</span>}
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="username" className='mt-2'>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)} />
                                    </Form.Group>
                                    {errors.username && <span className="error text-danger">{errors.username}</span>}
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="password" className='mt-2'>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type={`${show ? "text" : "password"}`} name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                        {
                                            !show ?
                                                <BiSolidHide onClick={() => setShow(true)} className='eye_icon' />
                                                :
                                                <FaEye onClick={() => setShow(false)} className='eye_icon' />
                                        }
                                    </Form.Group>
                                    {errors.password && <span className="error text-danger">{errors.password}</span>}
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="confirmPassword" className='mt-2'>
                                        <Form.Label>Confirm Password:</Form.Label>
                                        <Form.Control type={`${show1 ? "text" : "password"}`} name="confirmPassword" value={confirmPassword} onChange={(e) => setconfirem(e.target.value)} />
                                        {
                                            !show1 ?
                                                <BiSolidHide onClick={() => setShow1(true)} className='eye_icon' />
                                                :
                                                <FaEye onClick={() => setShow1(false)} className='eye_icon' />
                                        }
                                    </Form.Group>
                                    {errors.confirmPassword && <span className="error text-danger">{errors.confirmPassword}</span>}
                                </Col>
                            </Row>
                            <Form.Group controlId="acceptTerms" className='mt-3'>
                                <Form.Check type="checkbox" label="I accept the terms and conditions" name="acceptTerms" checked={acceptTerms} onChange={(e) => setacceptTerms(e.target.checked)} />
                                {errors.acceptTerms && <span className="error text-danger">{errors.acceptTerms}</span>}
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3'>Register</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div >

    );
};

export default AddUser;