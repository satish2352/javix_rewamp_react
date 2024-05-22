import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JavixLogo from '../assets/images/Login/Javix Logo.png';
import ForgotPasswordClipart from '../assets/images/Login/Forgot Password Image.png';
import '../assets/css/LoginPage.css'

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const { email } = formData;

    return (
        <Container className='loginPage'>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col xs={10} md={6}>
                    <Row>
                        <Col lg={6} md={12} sm={12} style={{ backgroundColor: '#EFF2F7' }} className='colLeft d-flex flex-column justify-content-center align-items-center text-center'>
                            <img src={JavixLogo} alt="Javix Logo" style={{ width: '80%' }} className='rounded mt-4' />
                            <p className='mt-2'>Javix Life Healthcare</p>
                            <img src={ForgotPasswordClipart} alt="Login Clipart" style={{ width: '100%', padding: '20px' }} />
                        </Col>
                        <Col lg={6} md={12} sm={12} className='colRight d-flex flex-column justify-content-center'>
                            <h3>Search Your Account</h3>
                            <p>Please enter your email address or mobile number to search for your account.</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" name="email" value={email} onChange={handleChange} required />
                                </Form.Group>
                                <div className="d-flex mt-3">
                                    <Button variant='primary'>Submit</Button>
                                    <Link to="/login" style={{ textDecoration: 'none' }} className='ms-auto text-wrap btn btn-outline-primary '>Back to Login</Link>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;