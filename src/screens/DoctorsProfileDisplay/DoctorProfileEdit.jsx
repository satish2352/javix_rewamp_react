import { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Home from '../../screens/dashboard/home/Home'

function DoctorProfileEdit() {
    const [firstName , setfirstName] = useState('');
    const [lastName , setlastName] = useState('');
    const [gender , setgender] =  useState('');
    const [email , setemail] = useState('');
    const [mobileNumber , setmobileNumber] = useState('');
    const [dateOfBirth , setdateOfBirth] = useState('');
    const [qualification , setqualification] = useState('');
    const [medicalRegistrationNumber , setmedicalRegistrationNumber] = useState('');
    const [doctorType , setdoctorType] = useState('');
    const [stateMedicalCouncil , setstateMedicalCouncil] = useState('');
    const [registrationYear , setregistrationYear] = useState('');
    const [experience , setexperience] = useState('');
    const [specialization , setspecialization] = useState('');
    const [country , setcountry] = useState('');
    const [state , setstate] = useState('');
    const [district , setdistrict] =  useState('');
    const [pinCode , setpinCode] = useState('');
    const [address , setaddress] = useState('');
    const [photo , setphoto] = useState(null);
    const [sign , setsign] = useState(null);
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
        if (!qualification.trim()) {
            errors.qualification = 'qualification is required';
            isValid = false;
        }
        if (!medicalRegistrationNumber.trim()) {
            errors.medicalRegistrationNumber = 'medical Registration Number is required';
            isValid = false;
        }
        if (!doctorType.trim()) {
            errors.doctorType = 'doctor Type is required';
            isValid = false;
        }
        if (!stateMedicalCouncil.trim()) {
            errors.stateMedicalCouncil = 'state Medical Council is required';
            isValid = false;
        }
        if (!registrationYear.trim()) {
            errors.registrationYear = 'registration Year is required';
            isValid = false;
        }
        if (!experience.trim()) {
            errors.experience = 'experience is required';
            isValid = false;
        }
        if (!specialization.trim()) {
            errors.specialization = 'specialization is required';
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
        if (!pinCode.trim()) {
            errors.pinCode = 'pinCode is required';
            isValid = false;
        }
        if (!address.trim()) {
            errors.address = 'address is required';
            isValid = false;
        }
        if (!photo) {
            errors.photo = 'photo is required';
            isValid = false;
        }
        if (!sign) {
            errors.sign = 'sign is required';
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
                firstName , lastName, gender, email ,mobileNumber,dateOfBirth,qualification,medicalRegistrationNumber,doctorType,stateMedicalCouncil,registrationYear,experience,specialization,country,state,district,pinCode,address,
                photo,sign,
            }
            console.log("newData", newData);
        };
    }

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
                                        <Form.Control type="text" name="firstName" placeholder='Enter first name' value={firstName} onChange={(e)=> setfirstName(e.target.value)}  />
                                        {errors.firstName && <span className="error text-danger">{errors.firstName}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control type="text" name="lastName" placeholder='Enter last name' value={lastName} onChange={(e)=> setlastName(e.target.value)}  />
                                        {errors.lastName && <span className="error text-danger">{errors.lastName}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender:</Form.Label>
                                        <Form.Control as="select" name="gender" value={gender} onChange={(e)=> setgender(e.target.value)} >
                                            <option value="" disabled>Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </Form.Control>
                                        {errors.gender && <span className="error text-danger">{errors.gender}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email ID:</Form.Label>
                                        <Form.Control type="email" name="email" placeholder='Enter email'value={email} onChange={(e)=> setemail(e.target.value)}  />
                                        {errors.email && <span className="error text-danger">{errors.email}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="mobileNumber">
                                        <Form.Label>Mobile Number:</Form.Label>
                                        <Form.Control type="tel" name="mobileNumber" placeholder='Enter mobile' value={mobileNumber} onChange={(e)=> setmobileNumber(e.target.value)}  />
                                        {errors.mobileNumber && <span className="error text-danger">{errors.mobileNumber}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="dateOfBirth">
                                        <Form.Label>Date of Birth:</Form.Label>
                                        <Form.Control type="date" name="dateOfBirth" placeholder='Enter DOB'value={dateOfBirth} onChange={(e)=> setdateOfBirth(e.target.value)} />
                                        {errors.dateOfBirth && <span className="error text-danger">{errors.dateOfBirth}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="qualification">
                                        <Form.Label>Qualification:</Form.Label>
                                        <Form.Control type="text" name="qualification" placeholder='Enter qulification'value={qualification} onChange={(e)=> setqualification(e.target.value)} />
                                        {errors.qualification && <span className="error text-danger">{errors.qualification}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="medicalRegistrationNumber">
                                        <Form.Label>Medical Registration Number:</Form.Label>
                                        <Form.Control type="text" name="medicalRegistrationNumber"  placeholder='Enter medical registration number'value={medicalRegistrationNumber} onChange={(e)=> setmedicalRegistrationNumber(e.target.value)} />
                                        {errors.medicalRegistrationNumber && <span className="error text-danger">{errors.medicalRegistrationNumber}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="doctorType">
                                        <Form.Label>Doctor Type:</Form.Label>
                                        <Form.Control as="select" name="doctorType" value={doctorType} onChange={(e)=> setdoctorType(e.target.value)}>
                                            <option value="" disabled>Select</option>
                                            <option value="Type 1">Type 1</option>
                                            <option value="Type 2">Type 2</option>
                                            <option value="Type 3">Type 3</option>
                                        </Form.Control>
                                        {errors.doctorType && <span className="error text-danger">{errors.doctorType}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="stateMedicalCouncil">
                                        <Form.Label>State Medical Council:</Form.Label>
                                        <Form.Control as="select" name="stateMedicalCouncil" value={stateMedicalCouncil} onChange={(e)=> setstateMedicalCouncil(e.target.value)}>
                                            <option value="" disabled>Select</option>
                                            <option value="Council 1">Council 1</option>
                                            <option value="Council 2">Council 2</option>
                                            <option value="Council 3">Council 3</option>
                                        </Form.Control>
                                        {errors.stateMedicalCouncil && <span className="error text-danger">{errors.stateMedicalCouncil}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="registrationYear">
                                        <Form.Label>Registration Year:</Form.Label>
                                        <Form.Control type="number" name="registrationYear" placeholder='Enter registration year' value={registrationYear} onChange={(e)=> setregistrationYear(e.target.value)} />
                                        {errors.registrationYear && <span className="error text-danger">{errors.registrationYear}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="experience">
                                        <Form.Label>Experience (in years):</Form.Label>
                                        <Form.Control type="number" name="experience" placeholder='Enter experience'value={experience} onChange={(e)=> setexperience(e.target.value)}/>
                                        {errors.experience && <span className="error text-danger">{errors.experience}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="specialization">
                                        <Form.Label>Specialization:</Form.Label>
                                        <Form.Control as="select" name="specialization" value={specialization} onChange={(e)=> setspecialization(e.target.value)}>
                                            <option value="" disabled>Select</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Orthopedics">Orthopedics</option>
                                        </Form.Control>
                                        {errors.specialization && <span className="error text-danger">{errors.specialization}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="country">
                                        <Form.Label>Country:</Form.Label>
                                        <Form.Control as="select" name="country" value={country} onChange={(e)=> setcountry(e.target.value)}>
                                            <option value="" disabled>Select</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                        </Form.Control>
                                        {errors.country && <span className="error text-danger">{errors.country}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="state">
                                        <Form.Label>State:</Form.Label>
                                        <Form.Control as="select" name="state" value={state} onChange={(e)=> setstate(e.target.value)}>
                                            <option value="" disabled>Select</option>
                                            <option value="State 1">State 1</option>
                                            <option value="State 2">State 2</option>
                                            <option value="State 3">State 3</option>
                                        </Form.Control>
                                        {errors.state && <span className="error text-danger">{errors.state}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="district">
                                        <Form.Label>District:</Form.Label>
                                        <Form.Control as="select" name="district" value={district} onChange={(e)=> setdistrict(e.target.value)}>
                                            <option value="" disabled>Select</option>
                                            <option value="District 1">District 1</option>
                                            <option value="District 2">District 2</option>
                                            <option value="District 3">District 3</option>
                                        </Form.Control>
                                        {errors.district && <span className="error text-danger">{errors.district}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <Form.Group controlId="pinCode">
                                        <Form.Label>Pin Code:</Form.Label>
                                        <Form.Control type="text" name="pinCode" placeholder='Enter pincode' value={pinCode} onChange={(e)=> setpinCode(e.target.value)} />
                                        {errors.pinCode && <span className="error text-danger">{errors.pinCode}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group controlId="address">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control type="text" name="address" placeholder='Enter address' value={address} onChange={(e)=> setaddress(e.target.value)} />
                                        {errors.address && <span className="error text-danger">{errors.address}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="photo">
                                        <Form.Label>Photo:</Form.Label>
                                        <Form.Control type="file" name="photo" onChange={(e)=> setphoto(e.target.value)} />
                                        {errors.photo && <span className="error text-danger">{errors.photo}</span>}
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Form.Group controlId="signature">
                                        <Form.Label>Signature:</Form.Label>
                                        <Form.Control type="file" name="signature" onChange={(e)=> setsign(e.target.value)} />
                                        {errors.sign && <span className="error text-danger">{errors.sign}</span>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit" className='mt-3'>Submit</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default DoctorProfileEdit
