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

  const [addon, setaddon] = useState('');
  const [allergy, setallergy] = useState('');
  const [allergy_name, setallergyname] = useState('');
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!addon.trim()) {
      errors.addon = 'addon is required';
      isValid = false;
    }
    if (!allergy.trim()) {
      errors.allergy = 'allergy is required';
      isValid = false;
    }
    if (!allergy_name.trim()) {
      errors.allergy_name = 'allergy name is required';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  }

  console.log("errors", errors);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let newData = {
        addon, allergy, allergy_name
      }
      console.log("newData", newData);
    };
  }

  return (
    <>
      <Card className='mt-4'>
        <Card.Header>Allergies List</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <p className='text-md-end text-sm-end'>
              <Button variant="outline-primary" onClick={handleShow}>Add New</Button>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient Allergies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontSize: '14px' }}>Added On</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={addon} onChange={(e) => setaddon(e.target.value)} />
              {errors.addon && <span className="error text-danger">{errors.addon}</span>}
            </Form.Group>
            <Form.Label style={{ fontSize: '14px' }}>Allergy Type</Form.Label>
            <Form.Select aria-label="Default select example" value={allergy} onChange={(e) => setallergy(e.target.value)}>
              <option value="1" style={{ fontSize: '14px' }}>Drug Allergy</option>
              <option value="2" style={{ fontSize: '14px' }}>Food Allergy</option>
              <option value="3" style={{ fontSize: '14px' }}>Other Allergy</option>
            </Form.Select>
            {errors.allergy && <span className="error text-danger">{errors.allergy}</span>}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ fontSize: '14px' }}>Allergy Name</Form.Label>
              <Form.Control as="textarea" rows={3} value={allergy_name} onChange={(e) => setallergyname(e.target.value)} />
              {errors.allergy_name && <span className="error text-danger">{errors.allergy_name}</span>}
            </Form.Group>
            <hr></hr>
            <Button variant="primary" type='submit'>Submit</Button>
          </Form>
        </Modal.Body>


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
