import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';


function Allergies() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className='mt-4'>
        <Card.Header>Allergies List</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          <p className='text-md-end text-sm-end'>
              <Button variant="outline-primary"  onClick={handleShow}>Add New</Button>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient Allergies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{fontSize : '14px'}}>Added On</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Label style={{fontSize : '14px'}}>Allergy Type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1" style={{fontSize : '14px'}}>Drug Allergy</option>
              <option value="2" style={{fontSize : '14px'}}>Food Allergy</option>
              <option value="3" style={{fontSize : '14px'}}>Other Allergy</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{fontSize : '14px'}}>Allergy Name</Form.Label>
              <Form.Control as="textarea" rows={3} />
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

export default Allergies









// const Allergies = () => {
//   return (
//     <div>
//       Allergies
//     </div>
//   )
// }

// export default Allergies
