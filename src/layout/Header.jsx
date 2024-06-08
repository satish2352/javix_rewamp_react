import React from 'react'
import { AreaTop } from '../components'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <AreaTop />
      <Navbar style={{ backgroundColor: '#f8f8f8' }}>
        <Container>
          <Navbar.Brand >
            <i className="fa-regular fa-square-check" style={{ padding: "10px" }}></i>
            <i className="fa-regular fa-message" style={{ padding: "10px" }}></i>
            <i className="fa-regular fa-envelope" style={{ padding: "10px" }}></i>
            <i className="fa-solid fa-calendar-days" style={{ padding: "10px" }}></i>
          </Navbar.Brand>
          <Navbar.Brand className="justify-content-center">
            <Form.Select aria-label="Default select example">
              <option>Select NGO</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant='secondary'>
                  {/* <i className="fa-solid fa-user"></i> */}
                  <i class="fa-solid fa-user"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end mt-2">
                  <Link to='/home/directory'><Dropdown.Item href="#/action-1"><i className="fa-regular fa-message"></i> Directory</Dropdown.Item></Link>
                  <Link to='/home/doctor_list/doctorprofiledisplay'><Dropdown.Item href="#/action-2"><i className="fa-regular fa-square-check"></i> My Profile</Dropdown.Item></Link>
                  <Link to='/login'><Dropdown.Item href="#/action-3"><i className="fa-solid fa-right-from-bracket"></i> Log out</Dropdown.Item></Link>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
