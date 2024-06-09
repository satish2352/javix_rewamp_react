import React, { useMemo } from 'react';
import './Newissue.scss';
import ActivateUserIcon from '../../assets/images/Activate User.png';
import { MdPlaylistAddCheckCircle } from "react-icons/md";

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
import { Navigate, useNavigate } from 'react-router-dom';

const data = [
    {
        sr: 1,
        issueno: 2302154215,
        byuser: "testscanner",
        subject: "problem in Edit Profile",
        issue: "vegrh",
        date: "28-12-2023",
        status: "New Issue",
        action: ActivateUserIcon

    },
    {
        sr: 2,
        issueno: 9651245715,
        byuser: "Amit Joshi",
        subject: "I am not able to login throught mobile app",
        issue: "able to login",
        date: "28-12-2023",
        status: "New Issue",
        action: ActivateUserIcon

    },
    {
        sr: 3,
        issueno: 3021245745,
        byuser: "Amit Joshi",
        subject: "Others",
        issue: "Others",
        date: "28-12-2023",
        status: "New Issue",
        action: ActivateUserIcon

    },
    {
        sr: 4,
        issueno: 3210215412,
        byuser: "roma",
        subject: "citizen photo not working",
        issue: "citizen photo not working",
        date: "19-12-2023",
        status: "New Issue",
        action: ActivateUserIcon

    },


]
function New_issue() {
    const Navigate = useNavigate();
    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'issueno',
                header: 'Issue no',
                size: 150,
            },
            {
                accessorKey: 'byuser',
                header: 'By User',
                size: 150,
            },
            {
                accessorKey: 'subject',
                header: 'Subject',
                size: 150,
            },
            {
                accessorKey: 'issue',
                header: 'Issue',
                size: 150,
            },
            {
                accessorKey: 'date',
                header: 'Date',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Status',
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
                            <MdPlaylistAddCheckCircle style={{ fontSize: "30px" }} />
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
        Navigate('/new-issue-form')
    };
    return (
        <>
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>New Issue</p>
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


    )
}

export default New_issue
