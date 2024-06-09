import React, { useState } from 'react'

import { Button, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
function New_issue_From() {
    const [status, setstatus] = useState('');
    const [comments, setcomments] = useState('');
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!status.trim()) {
            errors.status = 'status is required';
            isValid = false;
        }
        if (!comments.trim()) {
            errors.comments = 'comments is required';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    }
    console.log("errors", errors);
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            let newData = {
                status,comments
            }
            console.log("newData", newData);
            alert('Data Submitted....')
        };
        
    }

    return (
        <>
            <Card className='mt-3'>
                <Card.Body>
                    <Form onSubmit={handlesubmit}>
                        <Form.Label>Select Status : </Form.Label>
                        <Form.Select aria-label="Default select example" value={status} onChange={(e) => setstatus(e.target.value)}>
                            <option>select</option>
                            <option value="1">Assigned</option>
                            <option value="2">Resolved</option>
                            <option value="3">Closed</option>
                        </Form.Select>
                        {errors.status && <span className="error text-danger">{errors.status}</span>}

                        <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1" value={comments} onChange={(e) => setcomments(e.target.value)} >
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='comments' />
                            {errors.comments && <span className="error text-danger">{errors.comments}</span>}
                        </Form.Group>
                        

                        <Button variant="primary" className='mt-3' type='submit'>Submit</Button>
                        <Button variant="primary" className='mt-3' style={{ marginLeft: '10px' }} disabled>Reset</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default New_issue_From
