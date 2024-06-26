import React, { useMemo } from 'react';
import './petient_view.scss';
import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { FaCheck } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";


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
import { useNavigate } from 'react-router-dom';
import Export_Button from '../../dashboard/Exportbuttoncomponents/Export_Button';
import { Card } from 'react-bootstrap';



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
    const Navigate = useNavigate()

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
                        <FaCheck onClick={() => handleActivateUser1(row)} style={{ fontSize: '20px' }} />
                        <MdAdsClick onClick={() => handleActivateUser2(row)} style={{ fontSize: '20px', marginLeft: '25px' }} />
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

    const handleActivateUser1 = (row) => {
        // alert('1');
        Navigate('/citizen-form')
    };
    const handleActivateUser2 = (row) => {
        // alert('2');
        Navigate('')
    };

    // function addCity(){
    //     alert('Sorry as a Doctor you are not entitled for this.')
    // }
    return (
        <>
            <Home />
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>Citizen List</p>
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
                                <Export_Button data={data} name={"Citizen List"} />
                                <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }} >Add Citizen</Button>
                            </Box>
                        </Box>
                    </Box>
                    <MaterialReactTable table={table} />
                </Card.Body>
            </Card>

        </>
    )
}

export default Petient_view
