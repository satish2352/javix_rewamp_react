import { Row, Col, Card } from 'react-bootstrap';
import Home from '../../screens/dashboard/home/Home'
function ScreenerProfileInfo() {

    const mainInfo = [
        { label: "Screener ID", value: "987654321" },
        { label: "Name", value: "Jane Doe" },
    ]

    const personalInfo = [
        { label: "Mobile Number", value: "9876543210" },
        { label: "Email", value: "janedoe@gmail.com" },
        { label: "Gender", value: "Female" },
        { label: "DOB", value: "02/02/2002" },
        { label: "Qualification", value: "BE" },
        { label: "Specialization", value: "Comp" },
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
        <Home/>
            <Card id='CARD_IMG' className='mt-3'>
                <Card.Body>
                    <div className="profile-title mb-3">Screener Profile</div>
                    <div className="profile-fields">
                        <Row>
                            <Col lg={6} md={6} sm={12} className='d-flex justify-content-center'>
                                <img src="" alt="Screener's Photo" className="img-fluid" style={{ height: '150px', width: '150px', borderRadius: '50%', border: '1px solid #9188F2' }} />
                            </Col>
                            <Col lg={6} md={6} sm={12} className='d-flex align-items-center'>
                                <div className='w-100'>
                                    {mainInfo.map((field, index) => (
                                        <Row className="field" key={`main-${index}`}>
                                            <Col><span>{field.label}:</span></Col>
                                            <Col><p>{field.value}</p></Col>
                                        </Row>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h5 style={{fontFamily: 'montserrat', fontSize: '18px', color: '#CD098E'}}>Personal Information</h5>
                                {personalInfo.map((field, index) => (
                                    <Row className="field" key={`personal-${index}`}>
                                        <Col md={6}><span>{field.label}:</span></Col>
                                        <Col md={6}><p>{field.value}</p></Col>
                                    </Row>
                                ))}
                            </Col>
                            <Col md={6}>
                                <h5 style={{fontFamily: 'montserrat', fontSize: '18px', color: '#CD098E'}}>Address Information</h5>
                                {addressInfo.map((field, index) => (
                                    <Row className="field" key={`address-${index}`}>
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

export default ScreenerProfileInfo;