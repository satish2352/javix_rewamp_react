import { Row, Col, Card } from 'react-bootstrap';
import './DoctorProfileDisplay.css';
import Button from 'react-bootstrap/Button';
import Home from '../../screens/dashboard/home/Home'
import { useNavigate } from "react-router-dom"
import doctorphoto from '../DoctorsProfileDisplay/photodoctor.png'
import doctorsign from '../DoctorsProfileDisplay/doctorsign.png'
function DoctorProfileDisplay() {
    const navigate = useNavigate()

    const personalInfo = [
        { label: "First Name", value: "John" },
        { label: "Last Name", value: "Smith" },
        { label: "Gender", value: "Male" },
        { label: "Date of Birth", value: "01/01/2001" },
        { label: "Email", value: "johnsmith@gmail.com" },
        { label: "Mobile Number", value: "9876543210" }
    ]

    const medicalInfo = [
        { label: "Qualification", value: "M.B.B.S" },
        { label: "Medical Registration Number", value: "12658343920" },
        { label: "Registration Year", value: "2009" },
        { label: "Experience (in years)", value: "10" },
        { label: "Specialization", value: "Cardiology" }
    ]

    const addressInfo = [
        { label: "State", value: "California" },
        { label: "District", value: "Los Angeles" },
        { label: "Country", value: "USA" },
        { label: "Address", value: "8358, Sunset Boulevard" },
        { label: "Pin Code", value: "90069" },
    ];

    function editdoctor() {
        navigate('/home/doctor_list/doctorprofiledisplay/doctorprofile_edit')
    }

    function changepassworddoctor() {
        navigate('/home/doctor_list/doctorprofiledisplay/doctor_change_password')
    }

    return (
        <>
            <Home />
            <br></br>
            <Card>
                <Card.Header>Doctor Profile</Card.Header>
                <Card.Body>
                    {/* <div className="profile-title">Doctor Profile</div> */}
                    <div className="profile-fields">
                        <Row className="field d-flex">
                            <Col lg={2} md={6} sm={12}><span>Photo:</span></Col>
                            <Col lg={4} md={6} sm={12}><img src={doctorphoto} alt="Doctor's Photo" width={"150px"} /></Col>
                            <Col lg={2} md={6} sm={12}><span>Signature:</span></Col>
                            <Col lg={4} md={6} sm={12}><img src={doctorsign} alt="Doctor's Signature" width={"120px"} /></Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
            <Card className='mt-4'>
                <Card.Header>Personal Information</Card.Header>
                <Card.Body>
                    <div>
                        <Row className='mt-3'>
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
                <Card.Header>Medical Information</Card.Header>
                <Card.Body>
                    <div>
                        <Row className='mt-3'>
                            {medicalInfo.map((field, index) => (
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
                <Button variant="primary" onClick={() => editdoctor()}>Edit Profile</Button>
                <Button variant="primary" onClick={() => changepassworddoctor()} >Change Password</Button>
            </div>
        </>
    )
}

export default DoctorProfileDisplay