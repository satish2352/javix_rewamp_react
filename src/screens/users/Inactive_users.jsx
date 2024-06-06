import React, { useMemo } from 'react';
import "./activeuser.scss";
import ActivateUserIcon from '../../assets/images/Activate User.png';

import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,
} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../dashboard/home/Home';


const data = [
    {
        sr_no: 1,
        userid: "axy",
        user_role: "Doctors",
        status: "Inactive",
        name: "axy sdc",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon

    },
    {
        sr_no: 2,
        userid: "nirmala",
        user_role: "Doctors",
        status: "Inactive",
        name: "nirmala sinha",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 3,
        userid: "babaa",
        user_role: "Sevika",
        status: "Inactive",
        name: "Shyam sinha",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 3,
        userid: "rsingh",
        user_role: "Sevika",
        status: "Inactive",
        name: "Rakesh Singh",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 4,
        userid: "Atish",
        user_role: "Sevika",
        status: "Inactive",
        name: "Atisha Ghosh",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 5,
        userid: "ShilaChatakarm",
        user_role: "Sevika",
        status: "Inactive",
        name: "Shila Chatakarm",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 6,
        userid: "Mira Deveri",
        user_role: "Sevika",
        status: "Inactive",
        name: "Mira Deveri",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 7,
        userid: "Kamlakundhani",
        user_role: "Sevika",
        status: "Inactive",
        name: "Kamla kundhani",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 8,
        userid: "Santrabhaluhi",
        user_role: "Sevika",
        status: "Inactive",
        name: "Santrabhaluhi Bhali",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 9,
        userid: "rushi",
        user_role: "Sevika",
        status: "Inactive",
        name: "rushi raut",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 10,
        userid: "Bhakti",
        user_role: "Sevika",
        status: "Inactive",
        name: "Bhakti Singh",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 11,
        userid: "Santrabhaluhi",
        user_role: "Sevika",
        status: "Inactive",
        name: "Santrabhaluhi Bhali",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 12,
        userid: "raoyer",
        user_role: "Sevika",
        status: "Inactive",
        name: "Santrabhaluhi yoye",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 13,
        userid: "Abigail",
        user_role: "Sevika",
        status: "Inactive",
        name: "Abigail roni",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 14,
        userid: "Alexandra",
        user_role: "Sevika",
        status: "Inactive",
        name: "Alexandra yoye",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 15,
        userid: "Alison",
        user_role: "Sevika",
        status: "Inactive",
        name: "Alison rishi",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 16,
        userid: "Amanda",
        user_role: "Sevika",
        status: "Inactive",
        name: "Amanda rishi",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 17,
        userid: "Andrea",
        user_role: "Sevika",
        status: "Inactive",
        name: "Andrea Andrea",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 18,
        userid: "Audrey",
        user_role: "Sevika",
        status: "Inactive",
        name: "Audrey Bella",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 19,
        userid: "Fiona",
        user_role: "Sevika",
        status: "Inactive",
        name: "Fiona Hannah",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 20,
        userid: "Maria",
        user_role: "Sevika",
        status: "Inactive",
        name: "Hannah Lily",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 21,
        userid: "Rachel",
        user_role: "Sevika",
        status: "Inactive",
        name: "Rachel Sally",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },

    {
        sr_no: 22,
        userid: "Sarah",
        user_role: "Sevika",
        status: "Inactive",
        name: "Sarah Molly",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 23,
        userid: "Penelope",
        user_role: "Sevika",
        status: "Inactive",
        name: "Penelope Rachel",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
    {
        sr_no: 24,
        userid: "Molly",
        user_role: "Sevika",
        status: "Inactive",
        name: "Abigail Penelope",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },

    {
        sr_no: 25,
        userid: "Abigail",
        user_role: "Sevika",
        status: "Inactive",
        name: "Abigail roni",
        blocked: "No",
        expired: "No",
        active: "Active",
        action: ActivateUserIcon
    },
]

function Inactive_users() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'userid',
                header: 'User ID',
                size: 150,
            },
            {
                accessorKey: 'user_role',
                header: 'User Role',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 150,
                Cell: ({ cell }) => (
                    <span className={`pill ${cell.getValue()?.toLowerCase()}`}>
                        {cell.getValue()}
                    </span>
                ),
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 200,
            },
            {
                accessorKey: 'blocked',
                header: 'Blocked',
                size: 150,
                Cell: ({ cell }) => (
                    <span className={`pill ${cell.getValue()?.toLowerCase()}`}>
                        {cell.getValue()}
                    </span>
                ),
            },
            {
                accessorKey: 'expired',
                header: 'Expired',
                size: 150,
                Cell: ({ cell }) => (
                    <span className={`pill ${cell.getValue()?.toLowerCase()}`}>
                        {cell.getValue()}
                    </span>
                ),
            },
            {
                accessorKey: 'active',
                header: 'Active',
                size: 150,
                Cell: ({ cell }) => (
                    <span className={`pill ${cell.getValue()?.toLowerCase()}`}>
                        {cell.getValue()}
                    </span>
                ),
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
            <h5 style={{ color: "#ea5455" }}><b>InActive users</b></h5>

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
                        <Button variant='primary' style={{backgroundColor : '#4848d1' ,  color : 'white'}}>Export</Button>
                    </Box>
                </Box>
            </Box>

            <MaterialReactTable table={table} />
            <br></br>
        </>
    )
}

export default Inactive_users
