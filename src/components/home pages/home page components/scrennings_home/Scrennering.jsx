import React, { useMemo } from 'react';
import './screnneings.scss';
import ActivateUserIcon from '../../../../assets/images/Activate User.png';
import { FaCheck } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
// import avtar from '../../../../assets/images/user.jpg'


import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Avatar, Box, Button, lighten } from '@mui/material';
import Home from '../../../../screens/dashboard/home/Home';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaUserCheck } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";


const data = [
  {
    sr: 1,
    // photo: <Avatar alt="Remy Sharp" src={avtar} />,
    petient_details: "rahul dscs",
    mobile: "9564215748",
    citizenid: "1234",
    caseid: "1254695874",
    scrennerfullname: "rahul borse",
    address: "dfds sdvsdds sdvsdv ",
    date: '12/04/2012'

  },
  {
    sr: 2,
    // photo: <Avatar alt="Remy Sharp" src={avtar} />,
    petient_details: "dsdv dscs",
    mobile: "9561412547",
    citizenid: "63251",
    caseid: "956471584",
    scrennerfullname: "dscvsd vvsdv",
    address: "dfds sdvsdds sdvsdv ",
    date: '12/04/2022'
  },
]



function Scrennering() {
  const Navigate = useNavigate()

  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr',
        header: 'Sr No',
        size: 150,
      },
      // {
      //   accessorKey: 'photo',
      //   header: 'Photo',
      //   size: 150,
      // },
      {
        accessorKey: 'petient_details',
        header: 'Petient Details',
        size: 150,
      },
      {
        accessorKey: 'mobile',
        header: 'Mobile',
        size: 150,
      },
      {
        accessorKey: 'citizenid',
        header: 'Citizen ID',
        size: 150,
      },
      {
        accessorKey: 'caseid',
        header: 'Case ID',
        size: 150,
      },
      {
        accessorKey: 'scrennerfullname',
        header: 'Screener Full Name',
        size: 150,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 150,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 150,
      },
      // {
      //   accessorKey: 'action',
      //   header: 'Action',
      //   size: 150,
      //   Cell: ({ row }) => (
      //     <Box>
      //       <FaUserCheck onClick={() => handleActivateUser1(row)} style={{ fontSize: '20px' }} />
      //       <TbHandClick onClick={() => handleActivateUser2(row)} style={{ fontSize: '20px', marginLeft: '25px' }} />
      //     </Box>
      //   ),

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

  const handleActivateUser1 = (row) => {
    // alert('1');
    Navigate('/citizen-form')
  };
  const handleActivateUser2 = (row) => {
    alert('Cuurenty this page is not visiable....');
    //Navigate('/referred_patient/petient_view/Encounter_petient_list')
  };

  // function addCity(){
  //     alert('Sorry as a Doctor you are not entitled for this.')
  // }
  return (
    <>
      <Home />
      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '16px' }}>Screening Case List</p>
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
                 <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button>
                {/* //<Link to='/add-citizen'><Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }} >Add Citizen</Button></Link>  */}
              </Box>
            </Box>
          </Box>
          <MaterialReactTable table={table} />
        </Card.Body>
      </Card>
    </>
  )
}

export default Scrennering
