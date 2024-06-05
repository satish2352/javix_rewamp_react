import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function MedicalHistory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className='mt-4'>
        <Card.Header>Medical History List</Card.Header>
        <Card.Body>
          <Card.Text>
          <p className='text-md-end text-sm-end'>
              <Button variant="outline-primary"  onClick={handleShow}>Add New</Button>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient Medical History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Diabetes</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>High Blood Pressure</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>High Cholesterol</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Goiter</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>

         <hr></hr>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Cancer</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Leukemia</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Psoriasis</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Angina</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Heart Problem</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Heart Murmur</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Pneumonia</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Pulmonary Embolism</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Asthma</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Emphysema</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Stroke</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Epilepsy</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Cataract</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Kidney Disease</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Kidney Stone</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Crohn’s Disease</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Colitis</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Anemia</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Jaundice</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Hepatitis</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>

          <hr></hr>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Stomach</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Rheumatic Fever</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>Tuberculosis</Form.Label>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Label>HIV/AIDS</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Form.Check
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <hr></hr>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Other</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

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

export default MedicalHistory






// import React from 'react'

// const MedicalHistory = () => {
//   return (
//     <div>
//       Medical History
//     </div>
//   )
// }

// export default MedicalHistory
