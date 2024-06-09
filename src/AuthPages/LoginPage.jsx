import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../Pages/adduser/adduser.scss"
import JavixLogo from '../assets/images/Login/Javix Logo.png';
import LoginClipart from '../assets/images/Login/Login Clipart.png';
import '../assets/css/LoginPage.css'
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [errors, setErrors] = useState({})
    const [show, setShow] = useState(false);
    const nevigate = useNavigate()


    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        }
        if (!password.trim()) {
            errors.password = 'password is required';
            isValid = false;
        }


        setErrors(errors);
        return isValid;
    }
    console.log("errors", errors);







    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //     rememberMe: false,
    // });

    useEffect(() => {
        localStorage.removeItem('login');
        localStorage.removeItem('userRole');
    }, [])
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let newData = {
                email, password
            }
            // console.log(formData);

            try {
                if (newData.email === "doctor@gmail.com" && newData.password === "Doctor@123") {
                    localStorage.setItem("userRole", "doctor")
                    localStorage.setItem('login', true)
                    nevigate("/dashboard")
                }
            } catch (error) {
                console.log("error", error);
            }

            try {
                if (newData.email === "admin@gmail.com" && newData.password === "Admin@123") {
                    localStorage.setItem("userRole", "system_admin")
                    localStorage.setItem('login', true)
                    nevigate("/dashboard")
                }
            } catch (error) {
                console.log("error", error);
            }
        };
        console.log("newData", newData);
    };

    // const { email, password, rememberMe } = formData;



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
                                    <Form.Control type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
                                    {errors.email && <span className="error text-danger">{errors.email}</span>}
                                </Form.Group>
                                <Form.Group controlId="password" className='mt-3'>
                                    <Form.Label>Password:</Form.Label>
                                    {/* <Form.Control type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} /> */}
                                    <Form.Control type={`${show ? "text" : "password"}`} name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                    {
                                        !show ?
                                            <BiSolidHide onClick={() => setShow(true)} className='eye_icon' />
                                            :
                                            <FaEye onClick={() => setShow(false)} className='eye_icon' />
                                    }
                                    {errors.password && <span className="error text-danger">{errors.password}</span>}
                                </Form.Group>
                                <div className="d-flex mt-3">
                                    <Form.Check type="checkbox" className='me-auto text-wrap' label="Remember Me" name="rememberMe" />

                                    {/* {errors.rememberMe && <span className="error text-danger">{errors.rememberMe}</span>} */}

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