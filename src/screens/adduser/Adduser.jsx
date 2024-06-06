import React, { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { AreaTop } from '../../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Home from '../dashboard/home/Home';
import Footer from '../dashboard/Footer';

import './adduser.scss'
const AddUser = () => {
    const [role, setRole] = useState("")
    const [ngo, setNgo] = useState("")
    const [firstName, setname] = useState("")
    const [lastName, setlast] = useState("")
    const [mobileNumber, setmobile] = useState("")
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmpassword] = useState("")
    const [acceptTerms, setacceptTerm] = useState(false)

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!role.trim()) {
            errors.website = 'Website name is required';
            isValid = false;
        }
        if (!ngo.trim()) {
            errors.message = 'Message is required';
            isValid = false;
        }

        if (!firstName.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!lastName.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!mobileNumber.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }
        if (!username.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!password.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!username.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!confirmPassword.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        // if (!phone.trim()) {
        //     errors.phone = 'Phone number is required';
        //     isValid = false;
        // } else if (!/^[7-9]{1}[0-9]{9}$/.test(phone)) {
        //     errors.phone = 'Invalid phone number';
        //     isValid = false;
        // }



    };


    const [formData, setFormData] = useState({
        role: '',
        ngo: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (name === 'confirmPassword') {
            setPasswordsMatch(value === formData.password);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();
    };

    //const { role, ngo, firstName, lastName, mobileNumber, email, username, password, confirmPassword, acceptTerms } = formData;

    const isRegisterButtonDisabled = !acceptTerms || !passwordsMatch;



    return (
        <div >
            <Home />
            <Card className='mt-5'>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center", color: 'rgb(205, 9, 142)', fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '24px' }}>User Registration Form</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
                            <Row className='mt-2'>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="role">
                                        <Form.Label>Role:</Form.Label>
                                        <Form.Control as="select" name="role" value={role} onChange={(e) => setRole(e.target.value)} >
                                            {/* {errors.role && <span className="error text-danger">{errors.role}</span>} */}
                                            <option value="" disabled>Select</option>
                                            <option value="Doctor">Doctor</option>
                                            <option value="NGO">NGO</option>
                                            <option value="Screener">Screener</option>
                                            <option value="Sevika">Sevika</option>
                                            <option value="Pharmacy">Pharmacy</option>
                                        </Form.Control>

                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="ngo">
                                        <Form.Label>NGO:</Form.Label>
                                        <Form.Control as="select" name="ngo" value={ngo} onChange={(e) => setNgo(e.target.value)} >
                                            <option value="" disabled>Select</option>
                                            <option value="Blue Knee">Blue Knee</option>
                                            <option value="testngo">testngo</option>
                                            <option value="ngodev">ngodev</option>
                                            <option value="Piramal Swasthya Management">Piramal Swasthya Management</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" name="firstName" value={firstName} onChange={(e) => setname(e.target.value)}  />
                                        {errors.firstName && <span className="error text-danger">{errors.firstName}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control type="text" name="lastName" value={lastName} onChange={(e) => setlast(e.target.value)}  />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="mobileNumber" className='mt-2'>
                                        <Form.Label>Mobile Number:</Form.Label>
                                        <Form.Control type="tel" name="mobileNumber" value={mobileNumber} onChange={(e) => setmobile(e.target.value)}  />
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="email" className='mt-2'>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)}  />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="username" className='mt-2'>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)}  />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="password" className='mt-2'>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)}  />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="confirmPassword" className='mt-2'>
                                        <Form.Label>Confirm Password:</Form.Label>
                                        <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setconfirmpassword(e.target.value)}  />
                                        {!passwordsMatch && confirmPassword && <Form.Text style={{ color: 'red' }}>Passwords do not match</Form.Text>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="acceptTerms" className='mt-3'>
                                <Form.Check type="checkbox" label="I accept the terms and conditions" name="acceptTerms" value={acceptTerms} onChange={(e) => setacceptTerm(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3' >Register</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default AddUser;

// disabled={isRegisterButtonDisabled}