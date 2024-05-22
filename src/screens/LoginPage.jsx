import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JavixLogo from '../assets/images/Login/Javix Logo.png';
import LoginClipart from '../assets/images/Login/Login Clipart.png';
import '../assets/css/LoginPage.css'

const LoginPage = () => {
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

    const { email, password, rememberMe } = formData;

    return (
        <Container className='loginPage'>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col xs={10} md={6}>
                    <Row>
                        <Col lg={6} md={12} sm={12} style={{ backgroundColor: '#EFF2F7' }} className='colLeft d-flex flex-column justify-content-center align-items-center text-center'>
                            <img src={JavixLogo} alt="Javix Logo" style={{ width: '80%' }} className='rounded' />
                            <p>Javix Life Healthcare</p>
                            <img src={LoginClipart} alt="Login Clipart" style={{ width: '100%' }} />
                        </Col>
                        <Col lg={6} md={12} sm={12} className='colRight d-flex flex-column justify-content-center'>
                            <h3>Login</h3>
                            <p>Welcome back, please log into your Javix account.</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" name="email" value={email} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="password" className='mt-3'>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" name="password" value={password} onChange={handleChange} required />
                                </Form.Group>
                                <div className="d-flex mt-3">
                                    <Form.Check type="checkbox" className='me-auto text-wrap' label="Remember Me" name="rememberMe" checked={rememberMe} onChange={handleChange} />
                                    <Link to="/forgot-password" style={{ textDecoration: 'none' }} className='ms-auto text-wrap'>Forgot Password?</Link>
                                </div>
                                <Button variant="primary" type="submit" className='mt-3'>Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;