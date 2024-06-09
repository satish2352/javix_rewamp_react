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

  const [firstperiod, setfirstperiod] = useState('');
  const [numberofpregnancies, setnumberofpregnancies] = useState('');
  const [numberofmiscarriagesorabortions, setnumberofmiscarriagesorabortions] = useState('');
  const [numberofchildren, setnumberofchildren] = useState('');
  const [Haveyoureachedmenopause, setHaveyoureachedmenopause] = useState('');
  const [Lastmenstrualperiod, setLastmenstrualperiod] = useState('');
  const [numberofdaysbleeding, setnumberofdaysbleeding] = useState('');
  const [Intervalbetweenperiods, setIntervalbetweenperiods] = useState('');
  const [yes, setyes] = useState('');
  const [no, setno] = useState('');
  const [Flowlow, setFlowlow] = useState('');
  const [Painwithmenstruation, setPainwithmenstruation] = useState('');
  const [Useofmedicationforpain, setUseofmedicationforpain] = useState('');
  const [Misseddays, setMisseddays] = useState('');
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!firstperiod.trim()) {
      errors.firstperiod = 'first period is required';
      isValid = false;
    }
    if (!numberofpregnancies.trim()) {
      errors.numberofpregnancies = 'number of pregnancies is required';
      isValid = false;
    }
    if (!numberofmiscarriagesorabortions.trim()) {
      errors.numberofmiscarriagesorabortions = 'number of miscarriages or abortions is required';
      isValid = false;
    }
    if (!numberofchildren.trim()) {
      errors.numberofchildren = 'number of children is required';
      isValid = false;
    }
    if (!Haveyoureachedmenopause.trim()) {
      errors.Haveyoureachedmenopause = 'Have your each edmeno pause is required';
      isValid = false;
    }
    if (!Lastmenstrualperiod.trim()) {
      errors.Lastmenstrualperiod = 'Last menstrual period is required';
      isValid = false;
    }
    if (!numberofdaysbleeding.trim()) {
      errors.numberofdaysbleeding = 'number of days bleeding is required';
      isValid = false;
    }
    if (!Intervalbetweenperiods.trim()) {
      errors.Intervalbetweenperiods = 'Interval between periods is required';
      isValid = false;
    }
    if (!yes.trim()) {
      errors.yes = 'yes is required';
      isValid = false;
    }
    if (!no.trim()) {
      errors.no = 'no is required';
      isValid = false;
    }

    if (!Flowlow.trim()) {
      errors.Flowlow = 'is required';
      isValid = false;
    }
    if (!Painwithmenstruation.trim()) {
      errors.Painwithmenstruation = 'Pain with menstruation is required';
      isValid = false;
    }
    if (!Useofmedicationforpain.trim()) {
      errors.Useofmedicationforpain = 'Use of medication for pain is required';
      isValid = false;
    }
    if (!Misseddays.trim()) {
      errors.Misseddays = 'Missed days is required';
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
        firstperiod, numberofpregnancies, numberofmiscarriagesorabortions, numberofchildren, Haveyoureachedmenopause, Lastmenstrualperiod, numberofdaysbleeding, Intervalbetweenperiods,
        yes, no, Flowlow, Painwithmenstruation, Useofmedicationforpain, Misseddays

      }
      console.log("newData", newData);
    };
  }


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
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{ fontSize: '14px' }}>Age of First Period</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" value={firstperiod} onChange={(e) => setfirstperiod(e.target.value)} />
                  {errors.firstperiod && <span className="error text-danger">{errors.firstperiod}</span>}
                </Form.Group>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{ fontSize: '14px' }}>Number of Pregnancies</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" value={numberofpregnancies} onChange={(e) => setnumberofpregnancies(e.target.value)} />
                  {errors.numberofpregnancies && <span className="error text-danger">{errors.numberofpregnancies}</span>}
                </Form.Group>
              </Col>
            </Row>
            <hr></hr>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontSize: '14px' }}>Number of Miscarriages or Abortions</Form.Label>
              <Form.Control type="text" placeholder="Input Value" value={numberofmiscarriagesorabortions} onChange={(e) => setnumberofmiscarriagesorabortions(e.target.value)} />
              {errors.numberofmiscarriagesorabortions && <span className="error text-danger">{errors.numberofmiscarriagesorabortions}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontSize: '14px' }}>Number of Children</Form.Label>
              <Form.Control type="text" placeholder="Input Value" value={numberofchildren} onChange={(e) => setnumberofchildren(e.target.value)} />
              {errors.numberofchildren && <span className="error text-danger">{errors.numberofchildren}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontSize: '14px' }}>Have you reached menopause ? If so what age?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" value={Haveyoureachedmenopause} onChange={(e) => setHaveyoureachedmenopause(e.target.value)} />
              {errors.Haveyoureachedmenopause && <span className="error text-danger">{errors.Haveyoureachedmenopause}</span>}
            </Form.Group>
            
            <hr></hr>
            <h5><b>Periods History</b></h5>
            <hr></hr>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{ fontSize: '14px' }}>Last menstrual period?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" value={Lastmenstrualperiod} onChange={(e) => setLastmenstrualperiod(e.target.value)} />
                  {errors.Lastmenstrualperiod && <span className="error text-danger">{errors.Lastmenstrualperiod}</span>}
                </Form.Group>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{ fontSize: '14px' }}>Number of days bleeding?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" value={numberofdaysbleeding} onChange={(e) => setnumberofdaysbleeding(e.target.value)} />
                  {errors.numberofdaysbleeding && <span className="error text-danger">{errors.numberofdaysbleeding}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontSize: '14px' }}>Interval between periods?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" value={Intervalbetweenperiods} onChange={(e) => setIntervalbetweenperiods(e.target.value)} />
              {errors.Intervalbetweenperiods && <span className="error text-danger">{errors.Intervalbetweenperiods}</span>}
            </Form.Group>
            <Form.Label style={{ fontSize: '14px' }}>Regular or irregular ?</Form.Label>
            <Form.Check style={{ fontSize: '14px' }}
              type="radio"
              label="Yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value={yes} onChange={(e) => setyes(e.target.value)}
            />
            {errors.yes && <span className="error text-danger">{errors.yes}</span>}
            <Form.Check style={{ fontSize: '14px' }}
              type="radio"
              label="No"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value={no} onChange={(e) => setno(e.target.value)}
            />
            {errors.no && <span className="error text-danger">{errors.no}</span>}
            

            <Row>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{ fontSize: '14px' }}>• Flow- low/normal/high ?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" value={Flowlow} onChange={(e) => setFlowlow(e.target.value)} />
                  {errors.Flowlow && <span className="error text-danger">{errors.Flowlow}</span>}
                </Form.Group>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{ fontSize: '14px' }}>Pain with menstruation ?</Form.Label>
                  <Form.Control type="text" placeholder="Input Value" value={Painwithmenstruation} onChange={(e) => setPainwithmenstruation(e.target.value)} />
                  {errors.Painwithmenstruation && <span className="error text-danger">{errors.Painwithmenstruation}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontSize: '14px' }}>Use of medication for pain ?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" value={Useofmedicationforpain} onChange={(e) => setUseofmedicationforpain(e.target.value)} />
              {errors.Useofmedicationforpain && <span className="error text-danger">{errors.Useofmedicationforpain}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ fontSize: '14px' }}>Missed days of school or work due to period ?</Form.Label>
              <Form.Control type="text" placeholder="Input Value" value={Misseddays} onChange={(e) => setMisseddays(e.target.value)} />
              {errors.Misseddays && <span className="error text-danger">{errors.Misseddays}</span>}
            </Form.Group>
            <hr></hr>
            <Button variant="primary" type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>


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
