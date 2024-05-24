import React, { useMemo } from 'react';
import './directory.scss';
import ActivateUserIcon from '../../../assets/images/Activate User.png';


import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../../dashboard/home/Home';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const data = [
    {
        sr: 1,
        name: "Rakesh Sinha",
        email: "Rakesh.Sinha@gmail.com",
        phone: "95612457",
        role: "NGO"
        // action: ActivateUserIcon
    },
    {
        sr: 2,
        name: "System admin",
        email: "javixlife@gmail.com",
        phone: "7541254859",
        role: "System Admin"
    },
    {
        sr: 3,
        name: "Chulbul Pandey",
        email: "rahul.borse@gmail.com",
        phone: "9564124571",
        role: "Pharmacy"
    },
    {
        sr: 4,
        name: "Amit sales",
        email: "amin.sales@gmail.com",
        phone: "8541245715",
        role: "Pharmacy"
    },
    {
        sr: 5,
        name: "som kishan",
        email: "som.sales@gmail.com",
        phone: "965231522",
        role: "Pharmacy"
    },
    {
        sr: 6,
        name: "Amit Mukharjee",
        email: "amin1254@gmail.com",
        phone: "8541236547",
        role: "Pharmacy"
    },
]


function Directory() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'email',
                header: 'Email',
                size: 150,
            },
            {
                accessorKey: 'phone',
                header: 'Phone',
                size: 150,
            },
            {
                accessorKey: 'role',
                header: 'Role',
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
    return (
        <>
            <Home />
            <br></br>
            <h5 style={{ color: "#ea5455" }}><b>Directory List</b></h5>


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
                        <Button
                            color="success"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleActivate}
                            variant="contained"
                        >
                            Activate
                        </Button>
                        <Button
                            color="error"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleDeactivate}
                            variant="contained"
                        >
                            Deactivate
                        </Button>
                        <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button>
                    </Box>
                </Box>
            </Box>
            <br></br>

            <MaterialReactTable table={table} />
            <br></br>
        </>
    )
}

export default Directory
