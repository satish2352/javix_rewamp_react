import React, { useMemo } from 'react';
import './DoctorsCard_table.scss';
// import ActivateUserIcon from '../../assets/images/Activate User.png';
import { TbHandClick } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";

import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';

import { useNavigate } from "react-router-dom"
import DoctorProfileDisplay from '../../comman components/DoctorsProfileDisplay/DoctorProfileDisplay';
import { Card } from 'react-bootstrap';


const data = [
  {
    sr_no: 1,
    name: "axy",
    mobile: "95412457845",
    email: "csdv@gmail.com",
    qualification: "dvdsfv",
    profile: <Button variant="primary"><FaUserCircle /></Button>
  },
  {
    sr_no: 2,
    name: "cdscsde",
    mobile: "9561246325",
    email: "sefwef@gmail.com",
    qualification: "htyhy",
    profile: <Button variant="primary"><FaUserCircle /></Button>
  },
  {
    sr_no: 3,
    name: "dsvdv",
    mobile: "9562111452",
    email: "reger@gmail.com",
    qualification: "erger",
    profile: <Button variant="primary"><FaUserCircle /></Button>
  },
]
function DoctorsCard_table() {
  const navigate = useNavigate()
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr_no',
        header: 'Sr No',
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
        // Cell: ({ cell }) => (
        //   <span className={`pill ${cell.getValue()?.toLowerCase()}`}>
        //     {cell.getValue()}
        //   </span>
        // ),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'qualification',
        header: 'Qualification',
        size: 150,
        // Cell: ({ cell }) => (
        //   <span className={`pill ${cell.getValue()?.toLowerCase()}`}>
        //     {cell.getValue()}
        //   </span>
        // ),
      },
      {
        accessorKey: 'profile',
        header: 'Profile',
        size: 150,
        Cell: ({ row }) => (
          <Box>
            <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
              <FaUserCircle style={{ fontSize: '25px' }} />
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

  // const handleDeactivate = () => {
  //   table.getSelectedRowModel().flatRows.forEach((row) => {
  //     alert('deactivating ' + row.getValue('name'));
  //   });
  // };

  // const handleActivate = () => {
  //   table.getSelectedRowModel().flatRows.forEach((row) => {
  //     alert('activating ' + row.getValue('name'));
  //   });
  // };

  const handleActivateUser = (row) => {
    // alert('activating ' + row.getValue('name'));
    navigate('/home/doctor_list/doctorprofiledisplay');
  };

  return (
    <>
     
      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black" , fontSize :'20px' }}>Doctors List </p>
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
                <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button>
              </Box> */}
            </Box>
          </Box>

          <MaterialReactTable table={table} />
        </Card.Body>
      </Card>



    </>
  )
}

export default DoctorsCard_table



{/*  */ }