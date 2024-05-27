import { Row, Col, Card } from 'react-bootstrap';
import userphoto from '../../../assets/images/Login/Javix Logo.png';

function PatientInfoProfile() {

    const mainInfo = [
        { label: "Citizen ID", value: "987654321" },
        { label: "Name", value: "Jane Doe" },
        { label: "Aadhaar Number", value: "123456789012" }
    ]

    const personalInfo = [
        { label: "Mobile Number", value: "9876543210" },
        { label: "Email", value: "janedoe@gmail.com" },
        { label: "Gender", value: "Female" },
        { label: "DOB", value: "02/02/2002" },
        { label: "Blood Group", value: "O+" },
    ];

    const addressInfo = [
        { label: "Country", value: "India" },
        { label: "State", value: "Maharashtra" },
        { label: "District", value: "Mumbai" },
        { label: "PIN code", value: "400001" },
        { label: "Address", value: "1234, Marine Drive" }
    ];

    return (
        <>
            <Card id='CARD_IMG'>
                <Card.Body>
                    <div className="profile-title mb-3">Patient Profile</div>
                    <div className="profile-fields">
                        <Row>
                            <Col lg={6} md={6} sm={12} className='d-flex justify-content-center'>
                                <img src={userphoto} alt="Patient's Photo" className="img-fluid" style={{ height: '150px', width: '150px', borderRadius: '50%', border: '1px solid #9188F2' }} />
                            </Col>
                            <Col lg={6} md={6} sm={12} className='d-flex align-items-center'>
                                <div>
                                    {mainInfo.map((field, index) => (
                                        <div className="field gap-3" key={index}>
                                            <div><p>{field.label}:</p></div>
                                            <div><p>{field.value}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h5 style={{fontFamily: 'montserrat', fontSize: '18px', color: '#CD098E'}}>Personal Information</h5>
                                {personalInfo.map((field, index) => (
                                    <Row className="field" key={index}>
                                        <Col md={6}><span>{field.label}:</span></Col>
                                        <Col md={6}><p>{field.value}</p></Col>
                                    </Row>
                                ))}
                            </Col>
                            <Col md={6}>
                                <h5 style={{fontFamily: 'montserrat', fontSize: '18px', color: '#CD098E'}}>Address Information</h5>
                                {addressInfo.map((field, index) => (
                                    <Row className="field" key={index + personalInfo.length}>
                                        <Col md={6}><span>{field.label}:</span></Col>
                                        <Col md={6}><p>{field.value}</p></Col>
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </div>
                </Card.Body >
            </Card >
        </>
    );
}

export default PatientInfoProfile;
