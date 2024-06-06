import { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Home from '../../screens/dashboard/home/Home'

function DoctorProfileEdit() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        qualification: '',
        medicalRegistrationNumber: '',
        doctorType: '',
        stateMedicalCouncil: '',
        registrationYear: '',
        experience: '',
        specialization: '',
        country: '',
        state: '',
        district: '',
        pinCode: '',
        address: '',
        photo: null,
        signature: null
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        window.alert("Profile Updated Successfully");
        setFormSubmitted(true);
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            mobileNumber: '',
            dateOfBirth: '',
            qualification: '',
            medicalRegistrationNumber: '',
            doctorType: '',
            stateMedicalCouncil: '',
            registrationYear: '',
            experience: '',
            specialization: '',
            country: '',
            state: '',
            district: '',
            pinCode: '',
            address: '',
            photo: null,
            signature: null
        });
        setFormSubmitted(false);
    };

    useEffect(() => {
        if (formSubmitted) {
            handleReset();
        }
    }, [formSubmitted]);

    const { firstName, lastName, gender, email, mobileNumber, dateOfBirth, qualification, medicalRegistrationNumber, doctorType, stateMedicalCouncil, registrationYear, experience, specialization, country, state, district, pinCode, address } = formData;

    return (
        <>
        <Home/>
        <br></br>
            <Card>
                <Card.Body>
                    <Card.Title className='mt-3 mb-4' style={{ textAlign: "center", color: 'rgb(205, 9, 142)', fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '24px' }}>Doctor Registration Form</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
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
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender:</Form.Label>
                                        <Form.Control as="select" name="gender" value={gender} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email ID:</Form.Label>
                                        <Form.Control type="email" name="email" value={email} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="mobileNumber">
                                        <Form.Label>Mobile Number:</Form.Label>
                                        <Form.Control type="tel" name="mobileNumber" value={mobileNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="dateOfBirth">
                                        <Form.Label>Date of Birth:</Form.Label>
                                        <Form.Control type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="qualification">
                                        <Form.Label>Qualification:</Form.Label>
                                        <Form.Control type="text" name="qualification" value={qualification} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="medicalRegistrationNumber">
                                        <Form.Label>Medical Registration Number:</Form.Label>
                                        <Form.Control type="text" name="medicalRegistrationNumber" value={medicalRegistrationNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="doctorType">
                                        <Form.Label>Doctor Type:</Form.Label>
                                        <Form.Control as="select" name="doctorType" value={doctorType} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            <option value="Type 1">Type 1</option>
                                            <option value="Type 2">Type 2</option>
                                            <option value="Type 3">Type 3</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="stateMedicalCouncil">
                                        <Form.Label>State Medical Council:</Form.Label>
                                        <Form.Control as="select" name="stateMedicalCouncil" value={stateMedicalCouncil} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            <option value="Council 1">Council 1</option>
                                            <option value="Council 2">Council 2</option>
                                            <option value="Council 3">Council 3</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="registrationYear">
                                        <Form.Label>Registration Year:</Form.Label>
                                        <Form.Control type="number" name="registrationYear" value={registrationYear} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="experience">
                                        <Form.Label>Experience (in years):</Form.Label>
                                        <Form.Control type="number" name="experience" value={experience} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="specialization">
                                        <Form.Label>Specialization:</Form.Label>
                                        <Form.Control as="select" name="specialization" value={specialization} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Orthopedics">Orthopedics</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="country">
                                        <Form.Label>Country:</Form.Label>
                                        <Form.Control as="select" name="country" value={country} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="state">
                                        <Form.Label>State:</Form.Label>
                                        <Form.Control as="select" name="state" value={state} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            <option value="State 1">State 1</option>
                                            <option value="State 2">State 2</option>
                                            <option value="State 3">State 3</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="district">
                                        <Form.Label>District:</Form.Label>
                                        <Form.Control as="select" name="district" value={district} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            <option value="District 1">District 1</option>
                                            <option value="District 2">District 2</option>
                                            <option value="District 3">District 3</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="pinCode">
                                        <Form.Label>Pin Code:</Form.Label>
                                        <Form.Control type="text" name="pinCode" value={pinCode} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group controlId="address">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control type="text" name="address" value={address} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="photo">
                                        <Form.Label>Photo:</Form.Label>
                                        <Form.Control type="file" name="photo" onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="signature">
                                        <Form.Label>Signature:</Form.Label>
                                        <Form.Control type="file" name="signature" onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col lg={12} className="d-flex gap-3">
                                    <Button variant="primary" type="submit">Submit</Button>
                                    <Button variant="secondary" type="button" onClick={handleReset} className='ml-3'>Reset</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default DoctorProfileEdit
