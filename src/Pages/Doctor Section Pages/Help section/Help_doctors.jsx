import React, { useMemo } from 'react';
import './help.scss';
import ActivateUserIcon from '../../../assets/images/Activate User.png';


import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../../../layout/Header';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


const data = [
    {
        sr: 1,
        issueno: "102",
        byuser: "rahul",
        subject: "dsv",
        issue: "vrgrt",
        date: "11/12/2021",
        status: "new issue",
        // action: ActivateUserIcon
    },
    {
        sr: 2,
        issueno: "104",
        byuser: "leena",
        subject: "rgrre",
        issue: "vgbdfv",
        date: "26/07/2023",
        status: "new issue",
    },
    {
        sr: 3,
        issueno: "109",
        byuser: "tejas",
        subject: "hghg",
        issue: "dfgdf",
        date: "02/09/2023",
        status: "new issue",
    },
]

function Help_doctors() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'issueno',
                header: 'Issue No',
                size: 150,
            },
            {
                accessorKey: 'byuser',
                header: 'By User',
                size: 150,
            },
            {
                accessorKey: 'subject',
                header: 'Subject',
                size: 150,
            },
            {
                accessorKey: 'issue',
                header: 'Issue',
                size: 150,
            },
            {
                accessorKey: 'date',
                header: 'Date',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 150,
            },
            // {
            //     accessorKey: 'action',
            //     header: 'Action',
            //     size: 150,
            //     Cell: ({ row }) => (
            //         <Box>
            //             <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
            //                 <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} />
            //             </button>
            //         </Box>
            //     ),
            // },
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
    });

    const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.forEach((row) => {
            alert('deactivating ' + row.getValue('name'));
        });
    };

    const handleActivate = () => {
        table.getSelectedRowModel().flatRows.forEach((row) => {
            alert('activating ' + row.getValue('name'));
        });
    };

    const handleActivateUser = (row) => {
        alert('activating ' + row.getValue('name'));
    };

    function raise() {
        // prompt('Do you what Raise and Issues...')
    }
    return (
        <>
            <Home />
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>Help</p>
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
                        <Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }} onClick={raise()}>Raise an Issues</Button>
                            </Box>
                        </Box>
                    </Box>
                    <MaterialReactTable table={table} />
                </Card.Body>
            </Card>



        </>
    )
}

export default Help_doctors
