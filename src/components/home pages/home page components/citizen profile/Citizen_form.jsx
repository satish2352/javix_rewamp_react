import { Row, Col, Card } from 'react-bootstrap';
// import './DoctorProfileDisplay.css';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom"
import citizen_profile from '../../../../assets/images/user.jpg'
// import doctorsign from '../DoctorsProfileDisplay/doctorsign.png'
function Citizen_profile() {
  const navigate = useNavigate()

  const personalInfo = [
    { label: "Citizen ID", value: "123512451578" },
    { label: "Name", value: "John" },
    { label: "Mobile Number", value: "9876543210" },
    { label: "Email", value: "johnsmith@gmail.com" },
    { label: "Sex", value: "Male" },
    { label: "DOB", value: "10/12/2014" },
    { label: "Aadhaar No", value: "784512698515" },
    { label: "Blood Group", value: "B+" },
  ]
  const addressInfo = [
    { label: "Country", value: "USA" },
    { label: "State", value: "California" },
    { label: "District", value: "Los Angeles" },
    { label: "Pin Code", value: "90069" },
    { label: "Address", value: "8358, Sunset Boulevard" },
  ];

  function editdoctor() {
    alert('Are yo sur want to update form..??')
    navigate('/citizen-update-form')
  }

  // function changepassworddoctor() {
  //   navigate('/home/doctor_list/doctorprofiledisplay/doctor_change_password')
  // }
  return (
    <>
      
      {/* <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          {/* <div className="profile-title">Doctor Profile</div> */}
          {/* <div className="profile-fields">
            <Row className="field d-flex"> */}
              {/* <Col lg={2} md={6} sm={12}><span>Signature:</span></Col>
              <Col lg={4} md={6} sm={12}><img src={doctorsign} alt="Doctor's Signature" width={"120px"} /></Col> */}
            {/* </Row>
          </div>
        </Card.Body>
      </Card> */} 
      <Card className='mt-4'>
        <Card.Header>Citizen Profile</Card.Header>
        <Card.Body>
          <div>
            <Row className='mt-3'>
              <Col ><span>Photo:</span></Col>
              <Col lg={3} md={6} sm={12}><img src={citizen_profile} alt="Doctor's Photo" width={"100px"} height={'80px'} /></Col>
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
        <Button variant="primary" onClick={() => editdoctor()}>Update Profile</Button>
        {/* <Button variant="primary" onClick={() => changepassworddoctor()} >Change Password</Button> */}
      </div>
    </>
  )
}

export default Citizen_profile
