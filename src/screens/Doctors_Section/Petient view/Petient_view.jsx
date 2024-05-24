import React, { useMemo } from 'react';
import './petient_view.scss';
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
        photo: "abc",
        citizen_name: "rahul",
        citizenid: "1234",
        mobile: "9564215748",
        email: "rahuls@gmail.com",
        scrennerfullname: "rahul borse",
        onboardingdate: "20/2/2021",
        action: ActivateUserIcon

    },
    {
        sr: 2,
        photo: "xyz",
        citizen_name: "leena",
        citizenid: "56124",
        mobile: "9564215748",
        email: "xyzz@gmail.com",
        scrennerfullname: "xyzds",
        onboardingdate: "20/2/2021",
        action: ActivateUserIcon
    },
]

function Petient_view() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'photo',
                header: 'Photo',
                size: 150,
            },
            {
                accessorKey: 'citizen_name',
                header: 'Citizen Name',
                size: 150,
            },
            {
                accessorKey: 'citizenid',
                header: 'Citizen ID',
                size: 150,
            },
            {
                accessorKey: 'mobile',
                header: 'Mobile',
                size: 150,
            },
            {
                accessorKey: 'email',
                header: 'Email',
                size: 150,
            },
            {
                accessorKey: 'scrennerfullname',
                header: 'Screener Full Name',
                size: 150,
            },
            {
                accessorKey: 'onboardingdate',
                header: 'On Bording Date',
                size: 150,
            },
            {
                accessorKey: 'action',
                header: 'Action',
                size: 150,
                Cell: ({ row }) => (
                    <Box>
                        <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
                            <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} />
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
            <h5 style={{ color: "#ea5455" }}><b>Petient View</b></h5>


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

export default Petient_view
