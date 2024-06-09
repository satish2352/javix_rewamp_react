import React, { useMemo } from 'react';
import "./encounter.scss";
import ActivateUserIcon from '../../../assets/images/Activate User.png';
import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,
} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const data = [
    {
        petient_details: "sdcvs dcsdcds sdvsdvdsv",
        alert: 'BMI:20.10 BP:80/140 SPO2:2 HEART:98 Temp(F):99',
        action: ActivateUserIcon
    },
    {
        petient_details: "axy dvs  sdv",
        alert: 'BMI:20.10 BP:80/140 SPO2:2 HEART:98 Temp(F):99',
        action: ActivateUserIcon
    },
];

const Pill = ({ text }) => {
    let bgColor;
    if (text.startsWith('BMI')) {
        bgColor = '#008000'; // Green
    } else if (text.startsWith('BP')) {
        bgColor = '#008000'; // Green
    } else if (text.startsWith('SPO2')) {
        bgColor = '#FFBF00'; // Yellow
    } else if (text.startsWith('HEART')) {
        bgColor = '#FFBF00'; // Yellow
    } else if (text.startsWith('Temp(F)')) {
        bgColor = '#FF0000'; // Red
    } else {
        bgColor = '#FF0000'; // Red
    }

    return (
        <span style={{
            backgroundColor: bgColor,
            color: 'white',
            padding: '0.2em 0.6em',
            margin: '0.2em',
            display: 'inline-block',
            fontSize: '0.9em'
        }}>
            {text}
        </span>
    );
};

function Encounter_List() {
    const navigate = useNavigate();
    const columns = useMemo(
        () => [
            {
                accessorKey: 'petient_details',
                header: 'Patient Details',
                size: 150,
            },
            {
                accessorKey: 'alert',
                header: 'Alert',
                size: 150,
                Cell: ({ row }) => {
                    const alertData = row.original.alert.split(' ');
                    return (
                        <Box>
                            {alertData.map((alert, index) => (
                                <Pill key={index} text={alert} />
                            ))}
                        </Box>
                    );
                },
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
        navigate('/referred_patient/Encounter_List/Patient_Info');
    };

    return (
        <>
     
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>Encounter User</p>
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
                                {/* <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button> */}
                            </Box>
                        </Box>
                    </Box>
                    <MaterialReactTable table={table} />

                </Card.Body>
            </Card>

        </>
    );
}

export default Encounter_List;