import React from 'react'

import { useNavigate } from "react-router-dom"
import ngo_profile from '../../../../assets/images/user.jpg'
import { Button, Card, Col, Row } from 'react-bootstrap'
function Ngo_Profile() {
    const navigate = useNavigate()

    const personalInfo = [
        { label: "User ID", value: "123512451578" },
        { label: "Name", value: "John" },
        { label: "Mobile Number", value: "9876543210" },
        { label: "Email", value: "johnsmith@gmail.com" },
        { label: "Registration Number", value: "1254125698" },
        { label: "Ngo Owner", value: "ngodev test" },
        { label: "Registration Date", value: "01/01/2001" },
        { label: "OnBoarding Date", value: "15/11/2001" },
    ]
    const addressInfo = [
        { label: "Country", value: "USA" },
        { label: "State", value: "California" },
        { label: "District", value: "Los Angeles" },
        { label: "Pin Code", value: "90069" },
        { label: "Address", value: "8358, Sunset Boulevard" },
    ];

    function backbtn() {
        navigate('/approvedusers/ngo')
    }

    // function changepassworddoctor() {
    //     navigate('/home/doctor_list/doctorprofiledisplay/doctor_change_password')
    // }
    return (
        <>
            
            {/* <Card className='mt-3'>
                <Card.Header>NGO Profile</Card.Header>
                <Card.Body>
                    {/* <div className="profile-title">Doctor Profile</div> */}
                    {/* <div className="profile-fields">
                        <Row className="field d-flex">
                            <Col lg={2} md={6} sm={12}><span>Photo:</span></Col>
                            <Col lg={4} md={6} sm={12}><img src={ngo_profile} alt="Doctor's Photo" width={"150px"} /></Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card> */} 
            <Card className='mt-4'>
                <Card.Header>NGO Profile</Card.Header>
                <Card.Body>
                    <div>
                        <Row className='mt-3'>
                            {/* <Col lg={1} md={6} sm={12}><span>Photo:</span></Col> */}
                            <Col lg={4} md={6} sm={12}><img src={ngo_profile} alt="Doctor's Photo" width={"130px"} height={'120px'} /></Col>
                            {personalInfo.map((field, index) => (
                                <Col lg={4} md={6} sm={12} className="field mt-4" key={index}>
                                    <span>{field.label}:</span>
                                    <p className='mt-1'>{field.value}</p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Card.Body >
            </Card >
            <Card className='mt-4'>
                <Card.Header>Address Information</Card.Header>
                <Card.Body>
                    <div>
                        <Row className='mt-3'>
                            {addressInfo.map((field, index) => (
                                <Col lg={4} md={6} sm={12} className="field mt-4" key={index}>
                                    <span>{field.label}:</span>
                                    <p className='mt-1'>{field.value}</p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Card.Body >
            </Card >
            <div className='d-flex gap-2 mt-4'>
                {/* <Button variant="primary" onClick={() => editdoctor()}>Edit Profile</Button>
                <Button variant="primary" onClick={() => changepassworddoctor()} >Change Password</Button> */}
            </div>
            <Button variant="primary" onClick={() => backbtn()}>Back</Button>
        </>
    )
}

export default Ngo_Profile
