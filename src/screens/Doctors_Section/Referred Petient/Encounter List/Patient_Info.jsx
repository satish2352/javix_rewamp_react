import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import PatientInfoProfile from './PatientInfoProfile';
import './Patient_Info.css';
import Encounters from './Encounters';
import PersonalHistory from './PersonalHistory';
import Allergies from './Allergies';
import MedicalHistory from './MedicalHistory';
import ReproductiveHistory from './ReproductiveHistory';
import Rx from './Rx';
import Documents from './Documents';

const PatientInfo = () => {
  const [activeLink, setActiveLink] = useState('profile');

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <>
      <Navbar variant="light" expand="lg">
        <Container>
          <Navbar.Brand>Patient Info</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav
              activeKey={activeLink}
              onSelect={handleSelect}
              className="mx-auto"
            >
              <Nav.Link eventKey="profile" href="#">Profile</Nav.Link>
              <Nav.Link eventKey="encounters" href="#">Encounters</Nav.Link>
              <Nav.Link eventKey="personal-history" href="#">Personal History</Nav.Link>
              <Nav.Link eventKey="allergies" href="#">Allergies</Nav.Link>
              <Nav.Link eventKey="medical-history" href="#">Medical History</Nav.Link>
              <Nav.Link eventKey="reproductive-history" href="#">Reproductive History</Nav.Link>
              <Nav.Link eventKey="rx" href="#">Rx</Nav.Link>
              <Nav.Link eventKey="documents" href="#">Documents</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {activeLink === 'profile' && <PatientInfoProfile />}
        {activeLink === 'encounters' && <Encounters />}
        {activeLink === 'personal-history' && <PersonalHistory />}
        {activeLink === 'allergies' && <Allergies />}
        {activeLink === 'medical-history' && <MedicalHistory />}
        {activeLink === 'reproductive-history' && <ReproductiveHistory />}
        {activeLink === 'rx' && <Rx />}
        {activeLink === 'documents' && <Documents />}
      </Container>
    </>
  );
};

export default PatientInfo;
