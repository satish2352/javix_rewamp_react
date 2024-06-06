import React, { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Home from '../dashboard/home/Home';

import './adduser.scss'
const AddUser = () => {
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
        try {
            const response = await axios.post('https://dummyapi.com/submit', formData);
            console.log('Form data submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    const { role, ngo, firstName, lastName, mobileNumber, email, username, password, confirmPassword, acceptTerms } = formData;

    const isRegisterButtonDisabled = !acceptTerms || !passwordsMatch;



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
                                    <Form.Group controlId="role">
                                        <Form.Label>Role:</Form.Label>
                                        <Form.Control as="select" name="role" value={role} onChange={handleChange} required>
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
                                        <Form.Control as="select" name="ngo" value={ngo} onChange={handleChange} required>
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
                                        <Form.Control type="text" name="firstName" value={firstName} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control type="text" name="lastName" value={lastName} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="mobileNumber" className='mt-2'>
                                        <Form.Label>Mobile Number:</Form.Label>
                                        <Form.Control type="tel" name="mobileNumber" value={mobileNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="email" className='mt-2'>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" name="email" value={email} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="username" className='mt-2'>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" name="username" value={username} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="password" className='mt-2'>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type="password" name="password" value={password} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="confirmPassword" className='mt-2'>
                                        <Form.Label>Confirm Password:</Form.Label>
                                        <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required />
                                        {!passwordsMatch && confirmPassword && <Form.Text style={{ color: 'red' }}>Passwords do not match</Form.Text>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="acceptTerms" className='mt-3'>
                                <Form.Check type="checkbox" label="I accept the terms and conditions" name="acceptTerms" checked={acceptTerms} onChange={handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={isRegisterButtonDisabled} className='mt-3'>Register</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>

    );
};

export default AddUser;