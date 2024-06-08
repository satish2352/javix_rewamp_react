import React, { useMemo, useState } from 'react';
import "./activeuser.scss";
import ActivateUserIcon from '../../assets/images/Activate User.png';

import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../../layout/Header';
import { Card } from 'react-bootstrap';

const data = [
  {
    sr_no: 1,
    userid: "axy",
    email: "axy@example.com",
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
    email: "nirmala@example.com",
    user_role: "Doctors",
    status: "Inactive",
    name: "nirmala sinha",
    blocked: "No",
    expired: "No",
    active: "Active",
    action: ActivateUserIcon
  },
  // Add email field to the rest of the data objects...
];

function Active_users() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr_no',
        header: 'Sr No',
        size: 150,
      },
      {
        accessorKey: 'userid',
        header: 'User ID',
        size: 150,
        Cell: ({ row }) => (
          <div>
            {row.original.userid}
            <br />
            <span style={{ fontSize: '0.8em', color: 'gray' }}>{row.original.email}</span>
          </div>
        ),
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
    manualPagination: true, // enable manual pagination
    state: {
      pagination, // set initial pagination state
    },
    onPaginationChange: (newPagination) => {
      setPagination(newPagination);
      console.log('Current page:', pagination.pageIndex + 1);
    },
  });

  const handleActivateUser = (row) => {
    alert('activating ' + row.getValue('name'));
  };

  return (
    <>
      <Home />
      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '20px' }}>InActive user List</p>
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
              {/* <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button> */}
            </Box>
          </Box>

          <MaterialReactTable table={table} />
        </Card.Body>
      </Card>
    </>
  )
}

export default Active_users;