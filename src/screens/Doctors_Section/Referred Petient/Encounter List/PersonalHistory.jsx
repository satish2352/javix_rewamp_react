import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';


import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

function PersonalHistory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <br></br>
      <Card>
        <Card.Header>Personal History List</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className='text-md-end text-sm-end'>
              <Button variant="outline-primary"  onClick={handleShow}>Add New</Button>
            </p>
          </blockquote>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient Personal History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Birth History</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Where were born and raised ?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Label >What is your highest education ?</Form.Label>
            <Row>
              <Col lg={4} sm={4} md={4}>
              <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
              </Col>
              <Col lg={4} sm={4} md={4}>
                <Form.Check
                  type="radio"
                  label="Masters"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />

              </Col>
              <Col lg={4} sm={4} md={4}>
                <Form.Check
                  type="radio"
                  label="College Graduate"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Row>

            <Form.Label >Marital Status ?</Form.Label>
            <Row>
              <Col lg={3} sm={3} md={3}>
                <Form.Check
                  type="radio"
                  label="Never Married"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check
                  type="radio"
                  label="Married"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />

              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check
                  type="radio"
                  label="Divorced"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check
                  type="radio"
                  label="Seperated"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check
                  type="radio"
                  label="Widowed"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check
                  type="radio"
                  label="Partnered/Significant other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>What is your current or past occupation ?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Label >Are you currently working ?</Form.Label>
            <Row>
              <Col lg={4} sm={4} md={4}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col lg={4} sm={4} md={4}>
                <Form.Check
                  type="radio"
                  label="No"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />

              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Have you had legal problems ?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default PersonalHistory



// import Card from 'react-bootstrap/Card';
// const PersonalHistory = () => {
//   return (
//     <>
//       <Card>
//         <Card.Header>Featured</Card.Header>
//         <Card.Body>
//           <Card.Title>Special title treatment</Card.Title>
//           <Card.Text>
//             With supporting text below as a natural lead-in to additional content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </>
//   )
// }

// export default PersonalHistory
