import React, { useMemo } from 'react';
import "./encounter.scss";
import ActivateUserIcon from '../../../../assets/images/Activate User.png';

import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,
} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../../../dashboard/home/Home';
import { useNavigate } from 'react-router-dom';


const data = [
    {
       
        petient_details: "sdcvs dcsdcds sdvsdvdsv",
        alert: 'BMI : 20.10  BP:80/140  SPO:2  HEART :98  Temp(F):99',
        action: ActivateUserIcon

    },
    {
        petient_details: "axy dvs  sdv",
        alert: 'BMI : 20.10  BP:80/140  SPO:2  HEART :98  Temp(F):99',
        action: ActivateUserIcon
    },
]
function Encounter_List() {
    const Navigate = useNavigate()
    const columns = useMemo(
        () => [
            {
                accessorKey: 'petient_details',
                header: 'petient_details',
                size: 150,
            },
            {
                accessorKey: 'alert',
                header: 'alert',
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
        // alert('activating ' + row.getValue('name'));
        Navigate('/referred_patient/Encounter_List/Patient_Info')
    };
    return (
        <>
            <Home />
            <br></br>
            <h5 style={{ color: "#ea5455" }}><b>Encounter User</b></h5>

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
                        <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button>
                    </Box>
                </Box>
            </Box>

            <MaterialReactTable table={table} />
            <br></br>
        </>
    )
}

export default Encounter_List
