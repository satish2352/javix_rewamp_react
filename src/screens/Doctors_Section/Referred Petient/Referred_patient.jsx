import React, { useMemo } from 'react';
import './referred_petient.scss';
import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { useNavigate } from 'react-router-dom';

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
import { Card } from 'react-bootstrap';
import Export_Button from '../../dashboard/Exportbuttoncomponents/Export_Button';

const data = [
    {
        sr: 1,
        citizenID: "102",
        citizen_name: "safs",
        screener_name: "esfsf",
        mobile: "9564215748",
        gender: "female",
        status: "Active",
        date: "20/2/2021",
        action: ActivateUserIcon

    },
    {
        sr: 2,
        citizenID: "103",
        citizen_name: "fdfv",
        screener_name: "rtgbr",
        mobile: "95612165",
        gender: "male",
        status: "Active",
        date: "22/10/2021",
        action: ActivateUserIcon
    },
]
function Referred_patient() {
    const navi = useNavigate()
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'citizenID',
                header: 'Citizen ID',
                size: 150,
            },
            {
                accessorKey: 'citizen_name',
                header: 'Citizen Name',
                size: 150,
            },
            {
                accessorKey: 'screener_name',
                header: 'Screener Name',
                size: 150,
            },
            {
                accessorKey: 'mobile',
                header: 'Mobile',
                size: 150,
            },
            {
                accessorKey: 'gender',
                header: 'Gender',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 150,
            },
            {
                accessorKey: 'date',
                header: 'Date',
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
        navi('/referred_patient/Encounter_List')

    };
    return (
        <>
            <Home />
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>Referred Petient</p>
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
                                <Export_Button data={data} name={"Referred Petient"} />
                            </Box>
                        </Box>
                    </Box>
                    <MaterialReactTable table={table} />
                </Card.Body>
            </Card>
        </>


    )
}

export default Referred_patient
