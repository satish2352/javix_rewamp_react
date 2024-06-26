import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './approved_users.scss';
// import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { RiUserSearchFill } from "react-icons/ri";


import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../../screens/dashboard/home/Home';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


const data = [
  {
    sr: 1,
    scrennerid: "516516516516",
    name: "fddddvs dvsdvsfg",
    mobile: "9561245157",
    email: "dvdfv@gmail.com",
    qualification: "BE",
    onboardingdate: "12/02/2021",
    action: <Link to="/approvedusers/screener/screener-profile"><RiUserSearchFill style={{ fontSize: "20px" }} /></Link>
  },
  {
    sr: 2,
    scrennerid: "5135165165",
    name: "fddddvs dvsdvsfg",
    mobile: "9561245157",
    email: "dvdfv@gmail.com",
    qualification: "BE",
    onboardingdate: "12/02/2021",
    action: <Link to="/approvedusers/screener/screener-profile"><RiUserSearchFill style={{ fontSize: "20px" }} /></Link>
  },
  {
    sr: 3,
    scrennerid: "65165651655",
    name: "fddddvs dvsdvsfg",
    mobile: "9561245157",
    email: "dvdfv@gmail.com",
    qualification: "BE",
    onboardingdate: "12/02/2021",
    action: <Link to="/approvedusers/screener/screener-profile"><RiUserSearchFill style={{ fontSize: "20px" }} /></Link>
  },


]

function Screener() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr',
        header: 'Sr No',
        size: 150,
      },
      {
        accessorKey: 'scrennerid',
        header: 'Screener ID',
        size: 150,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'mobile',
        header: 'Mobile',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email ',
        size: 150,
      },
      {
        accessorKey: 'qualification',
        header: 'Qualification',
        size: 150,
      },
      {
        accessorKey: 'onboardingdate',
        header: 'On Boarding Date',
        size: 150,
      },
      {
        accessorKey: 'action',
        header: 'Action',
        size: 150,
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
      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '20px' }}>Screener Lists</p>
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
                <Link to='/approvedusers/ngo'><Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Back</Button></Link>
              </Box>
            </Box>
          </Box>
          <br></br>

          <MaterialReactTable table={table} />
          <br></br>
        </Card.Body>
      </Card>

    </>
  )
}

export default Screener
