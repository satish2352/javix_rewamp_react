import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Documents() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className='mt-4'>
        <Card.Header>Document Lists</Card.Header>
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Document Type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Prescription</option>
              <option value="2">Reports</option>
              <option value="3">X-ray</option>
              <option value="4">CT Scan</option>
              <option value="5">MRI</option>
              <option value="6">Ultrasound</option>
              <option value="7">Discharge Summary</option>
              <option value="8">Referrals</option>
              <option value="9">Registrion From</option>
              <option value="10">HIPPA From</option>
              <option value="11">Clinic Lab Sheets</option>
              <option value="12">Blood Gluecose Logs</option>
              <option value="13">Food Diaries</option>
              <option value="14">Other Assessment Form</option>
              <option value="15">Other</option>
            </Form.Select>
            <br></br>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add note/comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Label>Attachment</Form.Label><br></br>
            <input type='file'></input>
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

export default Documents






// import React from 'react'

// const Documents = () => {
//   return (
//     <div>
//       Documents
//     </div>
//   )
// }

// export default Documents
