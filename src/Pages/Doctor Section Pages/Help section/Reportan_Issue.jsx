import React, { useState } from 'react'
import {  Card } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

function Reportan_Issue() {
    const [subject, setsubject] = useState('');
    const [issuedetails, setissuedetails] = useState('');
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!subject.trim()) {
            errors.subject = 'subject is required';
            isValid = false;
        }
        if (!issuedetails.trim()) {
            errors.issuedetails = 'issue details is required';
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
                subject,issuedetails
            }
            console.log("newData", newData);
        };
    }
    return (
        <>
            <Card className='mt-3'>
                <p style={{ color: "black", fontSize: '20px', padding:'10px'}}>Report an Issue</p>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Subject : </Form.Label>
                        <Form.Select aria-label="Default select example" value={subject} onChange={(e) => setsubject(e.target.value)}> 
                            <option>Select</option>
                            <option value="1">Citizen photo not working</option>
                            <option value="2">Problem in edit profile</option>
                            <option value="3">I am not able to map user</option>
                            <option value="4">I am not able to login thought mobile app</option>
                        </Form.Select>
                        {errors.subject && <span className="error text-danger">{errors.subject}</span>}
                        <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Issues Details</Form.Label>
                            <Form.Control as="textarea" rows={3} value={issuedetails} onChange={(e) => setissuedetails(e.target.value)} placeholder='describe issues'/>
                            {errors.issuedetails && <span className="error text-danger">{errors.issuedetails}</span>}
                        </Form.Group>
                        <Button variant="primary" type='submit'>Submit</Button>
                        <Button variant="outline-warning" style={{marginLeft:'10px'}}>Reset</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Reportan_Issue
