import React, { useMemo } from 'react';
import './socieconomic_survey.scss';
import ActivateUserIcon from '../../assets/images/Activate User.png';
import { IoScanCircle } from "react-icons/io5";


import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Export_Button from '../../screens/dashboard/Exportbuttoncomponents/Export_Button';

const data = [
    {
        sr: 1,
        socieconomic: 2302154215,
        citizenid: "testscanner",
        sevika_name: "problem in Edit Profile",
        mobile: "vegrh",
        aadhar_no: "28-12-2023",
        address: "New Issue",
        family_member_name: "New Issue",
        action: ActivateUserIcon

    },

]

function Socieconomin_survey() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'socieconomic',
                header: 'Socieconomic',
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
                header: 'No Of Earnners',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Name Of Earnners',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Age Of Earnners',
                size: 150,
            },

            {
                accessorKey: 'family_member_name',
                header: 'Occupation Of Earnners',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Is Bank Account',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'State of House',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Total Income',
                size: 150,
            },

            {
                accessorKey: 'family_member_name',
                header: 'Food Expense',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Health Expense',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Education Expense',
                size: 150,
            },

            {
                accessorKey: 'family_member_name',
                header: 'Intoxication Expense',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Conveyance Expense',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Cultiveable Land',
                size: 150,
            },
            {
                accessorKey: 'family_member_name',
                header: 'Survey Date',
                size: 150,
            },

            // {
            //     accessorKey: 'family_member_name',
            //     header: 'Family Member Name',
            //     size: 150,
            // },
            // {
            //     accessorKey: 'family_member_name',
            //     header: 'Family Member Name',
            //     size: 150,
            // },
            // {
            //     accessorKey: 'action',
            //     header: 'Action',
            //     size: 150,
            //     Cell: ({ row }) => (
            //         <Box>
            //             <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
            //                 {/* <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} /> */}
            //                 <IoScanCircle style={{fontSize : "30px"}}/>
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
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>Socieconomic Survey Data</p>
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
                            {/* <Box sx={{ display: 'flex', gap: '0.5rem' }}>
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
                                
                            </Box> */}
                            <Export_Button data={data} name={"Socieconomic Survey"} />
                        </Box>
                    </Box>
                    <MaterialReactTable table={table} />

                </Card.Body>
            </Card>

        </>
    )
}

export default Socieconomin_survey
