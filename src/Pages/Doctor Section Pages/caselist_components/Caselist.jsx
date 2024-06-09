import React, { useMemo } from 'react';
import './caselist.scss';
//import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { useNavigate } from 'react-router-dom';

import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, lighten } from '@mui/material';
import Home from '../../../layout/Header';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import Export_Button from '../../../screens/dashboard/Exportbuttoncomponents/Export_Button';

const data = [
    {
        sr: 1,
        patientdetails: "sds ewes",
        caseid: "1254",
        citizenid: "125",
        email: "dfvhdg@gmail.com",
        mobile: "9564215748",
        gender: "female",
        address: "dcsd sdv sdsc",
        DOB: "20/2/2021",
        createat: "21/10/2022",
        // action: ActivateUserIcon

    },
    {
        sr: 2,
        patientdetails: "sds sdcsc",
        caseid: "1205",
        citizenid: "1205",
        email: "dsdvdf@gmail.com",
        mobile: "9564215748",
        gender: "female",
        address: "dscd sdvs csdc",
        DOB: "20/2/2021",
        createat: "21/10/2022",
        //action: ActivateUserIcon
    },
]

function Caselist() {
    const navi = useNavigate()
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'patientdetails',
                header: 'Patient Details',
                size: 150,
            },
            {
                accessorKey: 'caseid',
                header: 'Case ID',
                size: 150,
            },
            {
                accessorKey: 'citizenid',
                header: 'Citizen ID',
                size: 150,
            },
            {
                accessorKey: 'email',
                header: 'Email',
                size: 150,
            },
            {
                accessorKey: 'mobile',
                header: 'Mobile Number',
                size: 150,
            },
            {
                accessorKey: 'gender',
                header: 'Gender',
                size: 150,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 150,
            },
            {
                accessorKey: 'DOB',
                header: 'Date of Birth',
                size: 150,
            },
            {
                accessorKey: 'createat',
                header: 'Create At',
                size: 150,
            },
            // {
            //     accessorKey: 'action',
            //     header: 'Action',
            //     size: 150,
            //     Cell: ({ row }) => (
            //         <Box>
            //             <Button variant="outline-success" size="sm" onClick={() => handleActivateUser(row)}>Pick and Prescribe</Button>
            //             {/* <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
            //                 <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} />
            //             </button> */}
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

    // const handleActivateUser = (row) => {
    //     // alert('activating ' + row.getValue('name'));
    //     navi('/referred_patient/Encounter_List')

    // };
    return (
        <>
            <Home />
            <Card className='mt-3'>
                <Card.Body>
                    {/* //<p style={{ color: "black", fontSize: '20px' }}>Referred Petient</p> */}
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
                    </Box>
                    <MaterialReactTable table={table} />
                </Card.Body>
            </Card>
        </>
    )
}

export default Caselist
