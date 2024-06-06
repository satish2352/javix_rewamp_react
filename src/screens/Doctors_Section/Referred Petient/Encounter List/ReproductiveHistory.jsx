import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function ReproductiveHistory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className='mt-4'>
        <Card.Header>Reproductive History List</Card.Header>
        <Card.Body>
          <Card.Text>
            <p className='text-md-end text-sm-end'>
              <Button variant="outline-primary" onClick={handleShow}>Add New</Button>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reproductive History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{fontSize : '14px'}}>Age of First Period</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{fontSize : '14px'}}>Number of Pregnancies</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" />
                </Form.Group>
              </Col>
            </Row>
            <hr></hr>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{fontSize : '14px'}}>Number of Miscarriages or Abortions</Form.Label>
              <Form.Control type="text" placeholder="Input Value" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{fontSize : '14px'}}>Number of Children</Form.Label>
              <Form.Control type="text" placeholder="Input Value" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{fontSize : '14px'}}>Have you reached menopause ? If so what age?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" />
            </Form.Group>
            <br></br>
            <hr></hr>
            <h5><b>Periods History</b></h5>
            <hr></hr>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{fontSize : '14px'}}>Last menstrual period?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{fontSize : '14px'}}>Number of days bleeding?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{fontSize : '14px'}}>Interval between periods?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" />
            </Form.Group>
            <Form.Label style={{fontSize : '14px'}}>Regular or irregular ?</Form.Label>
            <Form.Check style={{fontSize : '14px'}}
              type="radio"
              label="Yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check style={{fontSize : '14px'}}
              type="radio"
              label="No"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <br></br>

            <Row>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{fontSize : '14px'}}>• Flow- low/normal/high ?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{fontSize : '14px'}}>Pain with menstruation ?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{fontSize : '14px'}}>Use of medication for pain ?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{fontSize : '14px'}}>Missed days of school or work due to period ?</Form.Label>
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

export default ReproductiveHistory


















// const ReproductiveHistory = () => {
//   return (
//     <div>
//       Reproductive History
//     </div>
//   )
// }

// export default ReproductiveHistory
