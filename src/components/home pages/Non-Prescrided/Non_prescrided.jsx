import React, { useMemo } from 'react';
import './non_prescribed.scss';


// import avtar from '../../../../assets/images/user.jpg'

import Button from 'react-bootstrap/Button';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Avatar, Box, lighten } from '@mui/material';

// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaUserCheck } from "react-icons/fa6";
import Export_Button from '../../../screens/dashboard/Exportbuttoncomponents/Export_Button';



const data = [
  {
    sr: 1,
    // photo: <Avatar alt="Remy Sharp" src={avtar} />,
    citizen_name: "rahul dscs",
    scrennerid: "1234",
    mobile: "9564215748",
    scrennername: "rahul dcvs borse",
    email: "sasffde dsvsd@gmail.com ",
    date: '12/04/2012',
    action: <FaUserCheck />

  },
  {
    sr: 2,
    // photo: <Avatar alt="Remy Sharp" src={avtar} />,
    citizen_name: "dsvf fvfgd",
    scrennerid: "4581254",
    mobile: "8547156254",
    scrennername: "scs dcvsvcds borse",
    email: "sasffde dsvsd@gmail.com ",
    date: '12/04/2012',
    action: <FaUserCheck />
  },
]

function Non_prescrided() {
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
        accessorKey: 'citizen_name',
        header: 'Citizen Name',
        size: 150,
      },
      {
        accessorKey: 'scrennerid',
        header: 'Scrnner ID',
        size: 150,
      },
      {
        accessorKey: 'mobile',
        header: 'Mobile',
        size: 150,
      },
      {
        accessorKey: 'scrennername',
        header: 'Screnner Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
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
            <Button variant="outline-success" onClick={() => handleActivateUser1(row)}  size="sm" >Pick And Prescribed</Button>
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

  const handleActivateUser1 = (row) => {
    //alert('1');
    Navigate('/referred_patient/Encounter_List')
  };
  const handleActivateUser2 = (row) => {
    alert('are you sure..??');
    Navigate('/referred_patient/Encounter_List')
  };

  // function addCity(){
  //     alert('Sorry as a Doctor you are not entitled for this.')
  // }
  return (
    <>
   
      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '16px' }}>Non Prescibed List</p>
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
              <Export_Button data={data} name={"non-prescribed list"} />
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

export default Non_prescrided
