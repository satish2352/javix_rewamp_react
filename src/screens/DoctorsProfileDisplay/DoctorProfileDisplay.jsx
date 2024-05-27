import { Row, Col, Card } from 'react-bootstrap';
import './DoctorProfileDisplay.css';
import Button from 'react-bootstrap/Button';
import Home from '../../screens/dashboard/home/Home'
import { useNavigate } from "react-router-dom"
import doctorphoto from '../DoctorsProfileDisplay/photodoctor.png'
import doctorsign from '../DoctorsProfileDisplay/doctorsign.png'
function DoctorProfileDisplay() {
    const navigate = useNavigate()
    const profileInfo = [
        { label: "First Name", value: "John" },
        { label: "Last Name", value: "Smith" },
        { label: "Gender", value: "Male" },
        { label: "Date of Birth", value: "01/01/2001" },
        { label: "Email", value: "johnsmith@gmail.com" },
        { label: "Mobile Number", value: "9876543210" },
        { label: "State", value: "California" },
        { label: "District", value: "Los Angeles" },
        { label: "Qualification", value: "M.B.B.S" },
        { label: "Medical Registration Number", value: "12658343920" },
        { label: "Registration Year", value: "2009" },
        { label: "Experience (in years)", value: "10" },
        { label: "Specialization", value: "Cardiology" },
        { label: "Country", value: "USA" },
        { label: "Address", value: "8358, Sunset Boulevard" },
        { label: "Pin Code", value: "90069" },
    ];

    function editdoctor() {
        navigate('/home/doctor_list/doctorprofiledisplay/doctorprofile_edit')
    }
    return (
        <>
            <Home />
            <br></br>
            <Card id='CARD_IMG'>
                <Card.Body>
                    <div className="profile-title">Doctor Profile</div>
                    <div className="profile-fields">
                        <Row className="field d-flex">
                            <Col lg={3} md={6} sm={12}><span>Photo:</span></Col>
                            <Col lg={3} md={6} sm={12}><img src={doctorphoto} alt="Doctor's Photo" width={"150px"}/></Col>
                            <Col lg={3} md={6} sm={12}><span>Signature:</span></Col>
                            <Col lg={3} md={6} sm={12}><img src={doctorsign} alt="Doctor's Signature"  width={"120px"}/></Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col lg={6} md={6} sm={12}>
                                {profileInfo.slice(0, 8).map((field, index) => (
                                    <Row className="field" key={index}>
                                        <Col md={6}><span>{field.label}:</span></Col>
                                        <Col md={6}><p>{field.value}</p></Col>
                                    </Row>
                                ))}
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                {profileInfo.slice(8).map((field, index) => (
                                    <Row className="field" key={index + 8}>
                                        <Col md={6}><span>{field.label}:</span></Col>
                                        <Col md={6}><p>{field.value}</p></Col>
                                    </Row>
                                ))}
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <br></br>
                                <Button variant="primary" onClick={() => editdoctor()}>Edit Profile</Button>
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <br></br>
                                <Button variant="primary" >Change Password</Button>
                            </Col>

                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default DoctorProfileDisplay