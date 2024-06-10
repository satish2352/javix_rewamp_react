// import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import React, { useMemo } from 'react';
import './Rx.scss';
import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { IoScanCircle } from "react-icons/io5";


import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,

} from 'material-react-table';
// import { Box, Button, lighten } from '@mui/material';
// import Home from '../dashboard/home/Home';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, lighten } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';


const data = [
    {
        sr: 1,
        create_date: '12/02/2011',
        report: "testscanner",
        action: ActivateUserIcon
    },
    {
        sr: 2,
        create_date: '5/02/2011',
        report: "dvdf",
        action: ActivateUserIcon
    },

]


function Rx() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Medicinename, setMedicinename] = useState('');
    const [Strenght, setStrenght] = useState('');
    const [doages, setdoages] = useState('');
    const [unit , setunit] = useState('');
    const [preparation , setprepation] = useState('');
    const [duration , setduration] = useState('');
    const [frq , setfeq] = useState('');
    const [direaction , setdirection] = useState('');
    const [qty , setqty] = useState('');
    const [otherinstruction , setotherinstruction] = useState('');
    const [addtests , setaddtests] = useState('');
    const [addcauses , setaddcauses] = useState('');
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!Medicinename.trim()) {
            errors.Medicinename = 'Medicine name is required';
            isValid = false;
        }
        if (!Strenght.trim()) {
            errors.Strenght = 'Strenght is required';
            isValid = false;
        }
        if (!doages.trim()) {
            errors.doages = 'doages is required';
            isValid = false;
        }
        if (!unit.trim()) {
            errors.unit = 'unit is required';
            isValid = false;
        }
        if (!preparation.trim()) {
            errors.preparation = 'preparation is required';
            isValid = false;
        }
        if (!duration.trim()) {
            errors.duration = 'duration is required';
            isValid = false;
        }
        if (!frq.trim()) {
            errors.frq = 'frq is required';
            isValid = false;
        }

        if (!direaction.trim()) {
            errors.direaction = 'direaction is required';
            isValid = false;
        }
        if (!qty.trim()) {
            errors.qty = 'qty is required';
            isValid = false;
        }
        if (!otherinstruction.trim()) {
            errors.otherinstruction = 'other instruction is required';
            isValid = false;
        }
        if (!addtests.trim()) {
            errors.addtests = 'add tests is required';
            isValid = false;
        }
        if (!addcauses.trim()) {
            errors.addcauses = 'add causes is required';
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
                Medicinename, Strenght
            }
            console.log("newData", newData);
        };
    }

    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'create_date',
                header: 'Create Date',
                size: 150,
            },
            {
                accessorKey: 'report',
                header: 'Report ',
                size: 150,
            },
            {
                accessorKey: 'action',
                header: 'Action',
                size: 150,
                Cell: ({ row }) => (
                    <Box>
                        <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
                            {/* <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} /> */}
                            <IoScanCircle style={{ fontSize: "30px" }} />
                        </button>
                    </Box>
                ),
            },
        ],
        []
    );
    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
    });

    // const handleDeactivate = () => {
    //     table.getSelectedRowModel().flatRows.forEach((row) => {
    //         alert('deactivating ' + row.getValue('name'));
    //     });
    // };

    // const handleActivate = () => {
    //     table.getSelectedRowModel().flatRows.forEach((row) => {
    //         alert('activating ' + row.getValue('name'));
    //     });
    // };

    const handleActivateUser = (row) => {
        alert('activating ' + row.getValue('name'));
    };
    return (
        <>
            <Card className='mt-4'>
                <Card.Header>Medication List</Card.Header>
                <Card.Body>
                    <p className='text-md-end text-sm-end'>
                        <Button variant="outline-primary" onClick={handleShow} >Add New</Button>
                    </p>
                    <Box
                        sx={(theme) => ({
                            backgroundColor: lighten(theme.palette.background.default, 0.05),
                            display: 'flex',
                            gap: '0.5rem',
                            p: '8px',
                            justifyContent: 'space-between',
                        })}
                    >
                        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <MRT_GlobalFilterTextField table={table} />
                            <MRT_ToggleFiltersButton table={table} />
                        </Box>
                        {/* <Box>
                                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                    <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button>
                                </Box>
                            </Box> */}
                    </Box>
                    <MaterialReactTable table={table} />
                </Card.Body>
            </Card >


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control type='text' rows={3} placeholder='Medicine name' value={Medicinename} onChange={(e) => setMedicinename(e.target.value)} />
                            {errors.Medicinename && <span className="error text-danger">{errors.Medicinename}</span>}
                        </Form.Group>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type='text' rows={3} placeholder='Strenght' value={Strenght} onChange={(e) => setStrenght(e.target.value)} />
                                    {errors.Strenght && <span className="error text-danger">{errors.Strenght}</span>}
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Select aria-label="Default select example" value={unit} onChange={(e) => setunit(e.target.value)}>
                                    <option>Unit</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                {errors.unit && <span className="error text-danger">{errors.unit}</span>}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type='text' rows={3} placeholder='Dosage' value={doages} onChange={(e) => setdoages(e.target.value)} />
                                    {errors.doages && <span className="error text-danger">{errors.doages}</span>}
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Select aria-label="Default select example" value={unit} onChange={(e) => setunit(e.target.value)}>
                                    <option>Unit</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                {errors.unit && <span className="error text-danger">{errors.unit}</span>}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Select aria-label="Default select example" value={preparation} onChange={(e) => setprepation(e.target.value)}>
                                    <option>Preparation</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                {errors.preparation && <span className="error text-danger">{errors.preparation}</span>}
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Select aria-label="Default select example" value={unit} onChange={(e) => setunit(e.target.value)}>
                                    <option>Unit</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                {errors.unit && <span className="error text-danger">{errors.unit}</span>}
                            </Col>
                        </Row>
                        <br></br>
                        
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Select aria-label="Default select example" value={direaction} onChange={(e) => setdirection(e.target.value)}>
                                    <option>Direction</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                {errors.direaction && <span className="error text-danger">{errors.direaction}</span>}
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Select aria-label="Default select example" value={frq} onChange={(e) => setfeq(e.target.value)}>
                                    <option>Frequency</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                {errors.frq && <span className="error text-danger">{errors.frq}</span>}
                            </Col>
                        </Row>
                        <br></br>
                        
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type='text' rows={3} placeholder='Duration' value={duration} onChange={(e) => setduration(e.target.value)} />
                                    {errors.duration && <span className="error text-danger">{errors.duration}</span>}
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <Form.Select aria-label="Default select example" value={unit} onChange={(e) => setunit(e.target.value)}>
                                    <option>Unit</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                {errors.unit && <span className="error text-danger">{errors.unit}</span>}
                                
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type='text' rows={3} placeholder='Qty' value={qty} onChange={(e) => setqty(e.target.value)} />
                                    {errors.qty && <span className="error text-danger">{errors.qty}</span>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col lg={8} md={8} sm={12}>
                                <p style={{ textAlign: 'center' }}>Medcine Name</p>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <p style={{ textAlign: 'center' }}>Action</p>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Other Instruction</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='Other Instruction' value={otherinstruction} onChange={(e)=>setotherinstruction(e.target.value)}/>
                            {errors.otherinstruction && <span className="error text-danger">{errors.otherinstruction}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add Tests</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='Add Tests' value={addtests} onChange={(e)=>setaddtests(e.target.value)}/>
                            {errors.addtests && <span className="error text-danger">{errors.addtests}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add Cause</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='Add Causes' value={addcauses} onChange={(e)=>setaddcauses(e.target.value)}/>
                            {errors.addcauses && <span className="error text-danger">{errors.addcauses}</span>}
                        </Form.Group>
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

export default Rx





// import React from 'react'

// const Rx = () => {
//   return (
//     <div>
//       Rx
//     </div>
//   )
// }

// export default Rx
