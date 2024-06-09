import React, { useState } from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
function Add_Citizen() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [gender, setgender] = useState('');
    const [email, setemail] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [aadhaar, setaadhaar] = useState('');
    const [blood, setblood] = useState('');
    const [country, setcountry] = useState('');
    const [state, setstate] = useState('');
    const [district, setdistrict] = useState('');
    const [pin, setpin] = useState('');
    const [citizen, setcitizen] = useState('');
    const [photo, setphoto] = useState(null);
    const [errors, setErrors] = useState({})



    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!firstName.trim()) {
            errors.firstName = 'first Name is required';
            isValid = false;
        }
        if (!lastName.trim()) {
            errors.lastName = 'last Name is required';
            isValid = false;
        }

        if (!gender.trim()) {
            errors.gender = 'gender is required';
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = 'email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'invalid email address';
            isValid = false;
        }
        if (!mobileNumber) {
            errors.mobileNumber = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(mobileNumber)) {
            errors.mobileNumber = 'Mobile number must be exactly 10 digits';
            isValid = false;
        }

        if (!dateOfBirth.trim()) {
            errors.dateOfBirth = 'date Of Birth is required';
            isValid = false;
        }
        if (!aadhaar.trim()) {
            errors.aadhaar = 'aadhaar is required';
            isValid = false;
        }
        if (!blood.trim()) {
            errors.blood = 'blood group is required';
            isValid = false;
        }
        if (!country.trim()) {
            errors.country = 'country is required';
            isValid = false;
        }
        if (!state.trim()) {
            errors.state = 'state is required';
            isValid = false;
        }
        if (!district.trim()) {
            errors.district = 'district is required';
            isValid = false;
        }
        if (!pin.trim()) {
            errors.pin = 'pin code is required';
            isValid = false;
        }
        if (!citizen.trim()) {
            errors.citizen = 'citizen is required';
            isValid = false;
        }
        if (!photo) {
            errors.photo = 'photo is required';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    };
    console.log("errors", errors);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let newData = {
                firstName, lastName, gender, email, mobileNumber, dateOfBirth, qualification, medicalRegistrationNumber, doctorType, stateMedicalCouncil, registrationYear, experience, specialization, country, state, district, pinCode, address,
                photo, sign,
            }
            console.log("newData", newData);
        };
    }


    return (
        <>
        
            <br></br>
            <Card>
                <Card.Body>
                    <Card.Title className='mt-3 mb-4' style={{ textAlign: "center", color: 'rgb(205, 9, 142)', fontWeight: 'bold', fontFamily: 'Montserrat', fontSize: '24px' }}>Add Citizen</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
                            <Row className='mt-2'>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" name="firstName" placeholder='Enter first name' value={firstName} onChange={(e)=>setfirstName(e.target.value)} />
                                         {errors.firstName && <span className="error text-danger">{errors.firstName}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control type="text" name="lastName" placeholder='Enter last name' value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                                        {errors.lastName && <span className="error text-danger">{errors.lastName}</span>} 
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={3} md={3} sm={12}>
                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender:</Form.Label>
                                        <Form.Control as="select" name="gender" value={gender} onChange={(e)=>setgender(e.target.value)} >
                                            <option value="" disabled>Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </Form.Control>
                                        {errors.gender && <span className="error text-danger">{errors.gender}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={3} sm={12}>
                                    <Form.Group controlId="dateOfBirth">
                                        <Form.Label>Date of Birth:</Form.Label>
                                        <Form.Control type="date" name="dateOfBirth" placeholder='Enter DOB' value={dateOfBirth} onChange={(e)=>setdateOfBirth(e.target.value)}/>
                                        {errors.dateOfBirth && <span className="error text-danger">{errors.dateOfBirth}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={3} sm={12}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email ID:</Form.Label>
                                        <Form.Control type="email" name="email" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                                        {errors.email && <span className="error text-danger">{errors.email}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={3} sm={12}>
                                    <Form.Group controlId="mobileNumber">
                                        <Form.Label>Mobile Number:</Form.Label>
                                        <Form.Control type="tel" name="mobileNumber" placeholder='Enter mobile' value={mobileNumber} onChange={(e)=>setmobileNumber(e.target.value)}/>
                                        {errors.mobileNumber && <span className="error text-danger">{errors.mobileNumber}</span>} 
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="qualification">
                                        <Form.Label>Aadhaar No :</Form.Label>
                                        <Form.Control type="text" name="aadhaar" placeholder='Enter qulification' value={aadhaar} onChange={(e)=>setaadhaar(e.target.value)}/>
                                        {errors.aadhaar && <span className="error text-danger">{errors.aadhaar}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="doctorType">
                                        <Form.Label>Blood Group :</Form.Label>
                                        <Form.Control as="select" name="doctorType" value={blood} onChange={(e)=>setblood(e.target.value)} >
                                            <option value="" disabled>Select</option>
                                            <option value="Type 1">Type 1</option>
                                            <option value="Type 2">Type 2</option>
                                            <option value="Type 3">Type 3</option>
                                        </Form.Control>
                                        {errors.blood && <span className="error text-danger">{errors.blood}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="doctorType">
                                        <Form.Label>Country Name :</Form.Label>
                                        <Form.Control as="select" name="doctorType" value={country} onChange={(e)=>setcountry(e.target.value)} >
                                            <option value="" disabled>Select</option>
                                            <option value="Type 1">Type 1</option>
                                            <option value="Type 2">Type 2</option>
                                            <option value="Type 3">Type 3</option>
                                        </Form.Control>
                                         {errors.country && <span className="error text-danger">{errors.country}</span>} 
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="stateMedicalCouncil">
                                        <Form.Label>State Name</Form.Label>
                                        <Form.Control as="select" name="stateMedicalCouncil" value={state} onChange={(e)=>setstate(e.target.value)} >
                                            <option value="" disabled>Select</option>
                                            <option value="Council 1">Council 1</option>
                                            <option value="Council 2">Council 2</option>
                                            <option value="Council 3">Council 3</option>
                                        </Form.Control>
                                        {errors.state && <span className="error text-danger">{errors.state}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="qualification">
                                        <Form.Label>District Name :</Form.Label>
                                        <Form.Control type="text" name="district" placeholder='Enter qulification' value={district} onChange={(e)=>setdistrict(e.target.value)} />
                                        {errors.district && <span className="error text-danger">{errors.district}</span>} 
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="qualification">
                                        <Form.Label>Pin Code:</Form.Label>
                                        <Form.Control type="text" name="pin code" placeholder='Enter qulification' value={pin} onChange={(e)=>setpin(e.target.value)}/>
                                        {errors.pin && <span className="error text-danger">{errors.pin}</span>} 
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Citizen Address</Form.Label>
                                <Form.Control as="textarea" rows={3} value={citizen} onChange={(e)=>setcitizen(e.target.value)} placeholder='address'/>
                                {errors.citizen && <span className="error text-danger">{errors.citizen}</span>} 
                            </Form.Group>
                            <Form.Group controlId="photo">
                                <Form.Label>Upload Photo:</Form.Label>
                                <Form.Control type="file" name="photo" onChange={(e) => setphoto(e.target.value)} />
                                {errors.photo && <span className="error text-danger">{errors.photo}</span>}
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3'>Submit</Button>
                            <Button variant="dneger" type="submit" className='mt-3'>Reset</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Add_Citizen
