import React, { useMemo } from 'react';
import './general_survey.scss';
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

const data = [
    {
        sr: 1,
        no_of_family: 2,
        family_head: "testscanner",
        familyid: "problem in Edit Profile",
        citizenid: "vegrh",
        sevikaname: "vegrh",
        mobile: "vegrh",
        aadhar_no: "28-12-2023",
        action: ActivateUserIcon
    },
    {
        sr: 2,
        no_of_family: 3,
        family_head: "dsvdfv",
        familyid: "problem in Edit Profile",
        citizenid: "vegrh",
        sevikaname: "vegrh",
        mobile: "vegrh",
        aadhar_no: "28-12-2023",
        action: ActivateUserIcon
    },

]

function General_survey() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'no_of_family',
                header: 'Number Of Family',
                size: 150,
            },
            {
                accessorKey: 'family_head',
                header: 'Family Head ',
                size: 150,
            },
            {
                accessorKey: 'familyid',
                header: 'Family ID',
                size: 150,
            },
            {
                accessorKey: 'citizenid',
                header: 'Citizen ID',
                size: 150,
            },
            {
                accessorKey: 'sevikaname',
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
                header: 'Aadhar number',
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
            <h5 style={{ color: "#ea5455" }}>General Survey Data</h5>
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
                        <Button variant='primary' style={{backgroundColor : '#4848d1' ,  color : 'white'}}>Export</Button>
                    </Box>
                </Box>
            </Box>
            <br></br>

            <MaterialReactTable table={table} />
            <br></br>
    </>
  )
}

export default General_survey
