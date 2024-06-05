// import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import React, { useMemo } from 'react';
import './Rx.scss';
import ActivateUserIcon from '../../../../assets/images/Activate User.png';
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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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
