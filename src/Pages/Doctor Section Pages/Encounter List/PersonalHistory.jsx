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

  const [Bhistory, setbhistory] = useState('');
  const [born, setborn] = useState('');
  const [height, setheight] = useState('');
  const [hightschool, sethighschool] = useState('');
  const [Masters, setmasters] = useState('');
  const [CollegeGraduate, setCollegeGraduate] = useState('');
  const [NeverMarried, setNeverMarried] = useState('');
  const [Married, setMarried] = useState('');
  const [Divorced, setDivorced] = useState('');
  const [Seperated, setSeperated] = useState('');
  const [Widowed, setWidowed] = useState('');
  const [Partnered_Significant, setPartnered_Significant] = useState('');
  const [occupation, setoccupation] = useState('');
  const [yes, setyes] = useState('');
  const [no, setno] = useState('');
  const [legal , setlegal] = useState('');
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!Bhistory.trim()) {
      errors.Bhistory = 'Birth history is required';
      isValid = false;
    }
    if (!Married.trim()) {
      errors.Married = 'Married is required';
      isValid = false;
    }
    if (!born.trim()) {
      errors.born = 'born is required';
      isValid = false;
    }

    if (!height.trim()) {
      errors.height = 'height is required';
      isValid = false;
    }
    if (!hightschool.trim()) {
      errors.hightschool = 'hight school is required';
      isValid = false;
    }
    if (!Masters.trim()) {
      errors.Masters = 'Masters is required';
      isValid = false;
    }
    if (!CollegeGraduate.trim()) {
      errors.CollegeGraduate = 'College Graduate is required';
      isValid = false;
    }
    if (!NeverMarried.trim()) {
      errors.NeverMarried = 'Never Married is required';
      isValid = false;
    }

    if (!Divorced.trim()) {
      errors.Divorced = 'Divorced is required';
      isValid = false;
    }
    if (!Seperated.trim()) {
      errors.Seperated = 'Seperated is required';
      isValid = false;
    }

    if (!Widowed.trim()) {
      errors.Widowed = 'Widowed is required';
      isValid = false;
    }
    if (!Partnered_Significant.trim()) {
      errors.Partnered_Significant = 'Partnered Significant is required';
      isValid = false;
    }
    if (!occupation.trim()) {
      errors.occupation = 'occupation is required';
      isValid = false;
    }

    if (!yes.trim()) {
      errors.yes = 'required';
      isValid = false;
    }
    if (!no.trim()) {
      errors.no = 'required';
      isValid = false;
    }
    if (!legal.trim()) {
      errors.legal = 'required';
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
        Bhistory, born, height, hightschool, Masters, CollegeGraduate, NeverMarried, Married, Divorced, Seperated, Widowed, Partnered_Significant, occupation, yes, no
      }
      console.log("newData", newData);
    };
  }




  return (
    <>
      <Card className='mt-4'>
        <Card.Header>Personal History List</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className='text-md-end text-sm-end'>
              <Button variant="outline-primary" onClick={handleShow}>Add New</Button>
            </p>
          </blockquote>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient Personal History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ fontSize: '14px' }}>Birth History</Form.Label>
              <Form.Control as="textarea" rows={3} value={Bhistory} onChange={(e) => setbhistory(e.target.value)}/>
              {errors.Bhistory && <span className="error text-danger">{errors.Bhistory}</span>}

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ fontSize: '15px' }}>Where were born and raised ?</Form.Label>
              <Form.Control as="textarea" rows={3} value={born} onChange={(e) => setborn(e.target.value)}/>
              {errors.born && <span className="error text-danger">{errors.born}</span>}
            </Form.Group>
            <hr></hr>
            <Form.Label style={{ fontSize: '14px' }}>What is your highest education ?</Form.Label>
            <Row>
              <Col lg={4} sm={4} md={4}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="High School"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value={height} 
                  onChange={(e) => setheight(e.target.value)}
                />
                {errors.height && <span className="error text-danger">{errors.height}</span>}
              </Col>
              <Col lg={4} sm={4} md={4}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Masters"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  value={Masters} 
                  onChange={(e) => setmasters(e.target.value)}
                />
               {errors.Masters && <span className="error text-danger">{errors.Masters}</span>}
              </Col>
              <Col lg={4} sm={4} md={4}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="College Graduate"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value={CollegeGraduate} 
                  onChange={(e) => setCollegeGraduate(e.target.value)}
                />
                {errors.CollegeGraduate && <span className="error text-danger">{errors.CollegeGraduate}</span>}
              </Col>
            </Row>
            <hr></hr>
            <Form.Label style={{ fontSize: '14px' }}>Marital Status ?</Form.Label>
            <Row>
              <Col lg={3} sm={3} md={3}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Never Married"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value={NeverMarried}
                  onChange={(e) => setNeverMarried(e.target.value)}
                />
                {errors.NeverMarried && <span className="error text-danger">{errors.NeverMarried}</span>}
              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Married"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  value={Married}
                  onChange={(e) => setMarried(e.target.value)}
                />
                {errors.Married && <span className="error text-danger">{errors.Married}</span>}

              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Divorced"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value={Divorced}
                  onChange={(e) => setDivorced(e.target.value)}
                />
                {errors.Divorced && <span className="error text-danger">{errors.Divorced}</span>}

              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Seperated"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value={Seperated}
                  onChange={(e) => setSeperated(e.target.value)}
                />
                {errors.Seperated && <span className="error text-danger">{errors.Seperated}</span>}
              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Widowed"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value={Widowed}
                  onChange={(e) => setWidowed(e.target.value)}
                />
                {errors.Widowed && <span className="error text-danger">{errors.Widowed}</span>}
              </Col>
              <Col lg={3} sm={3} md={3}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Partnered/Significant other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value={Partnered_Significant}
                  onChange={(e) => setPartnered_Significant(e.target.value)}
                />
                {errors.Partnered_Significant && <span className="error text-danger">{errors.Partnered_Significant}</span>}
              </Col>
            </Row>
            <hr></hr>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ fontSize: '14px' }}>What is your current or past occupation ?</Form.Label>
              <Form.Control as="textarea" rows={3} value={occupation} onChange={(e) => setoccupation(e.target.value)}/>
              {errors.occupation && <span className="error text-danger">{errors.occupation}</span>}
            </Form.Group>
            <hr></hr>
            <Form.Label style={{ fontSize: '14px' }}>Are you currently working ?</Form.Label>
            <Row>
              <Col lg={4} sm={4} md={4}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="Yes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value={yes} onChange={(e) => setyes(e.target.value)}
                />
                {errors.yes && <span className="error text-danger">{errors.yes}</span>}
              </Col>
              <Col lg={4} sm={4} md={4}>
                <Form.Check style={{ fontSize: '14px' }}
                  type="radio"
                  label="No"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  value={no} onChange={(e) => setno(e.target.value)}
                />
              {errors.no && <span className="error text-danger">{errors.no}</span>}
              </Col>
            </Row>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label style={{ fontSize: '14px' }}>Have you had legal problems ?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" value={legal} onChange={(e) => setlegal(e.target.value)}/>
              {errors.legal && <span className="error text-danger">{errors.legal}</span>}
            </Form.Group>
            <hr></hr>
            <Button variant="primary" type='submit'>Submit</Button>
          </Form>
        </Modal.Body>


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
