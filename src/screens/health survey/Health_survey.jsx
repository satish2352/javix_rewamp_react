import React, { useMemo } from 'react';
import './health_survey.scss';
import ActivateUserIcon from '../../assets/images/Activate User.png';
import { IoScanCircle } from "react-icons/io5";


import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../dashboard/home/Home';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Export_Button from '../dashboard/Exportbuttoncomponents/Export_Button';

const data = [
    {
        sr: 1,
        familyid: 2302154215,
        citizenid: "testscanner",
        sevika_name: "problem in Edit Profile",
        mobile: "vegrh",
        aadhar_no: "28-12-2023",
        address: "New Issue",
        family_member_name: "New Issue",
        action: ActivateUserIcon
    },

]

function Health_survey() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'familyid',
                header: 'Family ID',
                size: 150,
            },
            {
                accessorKey: 'citizenid',
                header: 'Citizen ID ',
                size: 150,
            },
            {
                accessorKey: 'sevika_name',
                header: 'Sevika Name',
                size: 150,
            },
            {
                accessorKey: 'mobile',
                header: 'Mobile',
                size: 150,
            },
            {
                accessorKey: 'aadhar_no',
                header: 'Aadhar Number',
                size: 150,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Family Member Name',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Driking Water Source',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Driking Water Distance',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Distance of Subcenters',
                size: 150,
            },

            {
                accessorKey: 'family_member_name',
                header: 'Distance of Primary Helath Centers',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Distance of Community Health centers',
                size: 150,
            },

            {
                accessorKey: 'family_member_name',
                header: 'Distance of Pathology Lab',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Distance of Medical Store',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Status of Delivery of Children',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Status of Vaccination of Children',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Status of Female Releted Problems',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Centrally Issued Health Insurance',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'State Issued Health Insurance',
                size: 150,
            },

            {
                accessorKey: 'family_member_name',
                header: 'Personal Health Insurance',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Distance of District Hospital',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Survey Date',
                size: 150,
            },
            // {
            //     accessorKey: 'action',
            //     header: 'Action',
            //     size: 150,
            //     Cell: ({ row }) => (
            //         <Box>
            //             <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
            //                 {/* <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} /> */}
            //                 <IoScanCircle style={{ fontSize: "30px" }} />
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
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>Health Survey Data</p>
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
                                {/* <Button
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
                        </Button> */}
                                <Export_Button data={data} name={"Health Survey"}/>
                            </Box>
                        </Box>
                    </Box>
                    <MaterialReactTable table={table} />
                </Card.Body>
            </Card>

        </>
    )
}

export default Health_survey
