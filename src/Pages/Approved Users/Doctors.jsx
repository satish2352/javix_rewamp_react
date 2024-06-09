import React, { useMemo } from 'react';
import './approved_users.scss';
// import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { FaRegUser } from "react-icons/fa";


import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';

// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';



const data = [
  {
    sr: 1,
    name: "fddfg",
    mobile: "9561245157",
    email: "124",
    qualification: "efere",
    profile: <Button variant="primary"><FaUserCircle /></Button>
    // <Link to='/home/doctor_list/doctorprofiledisplay'><FaUserCircle style={{ fontSize: "20px" }} /></Link>
  },
  {
    sr: 2,
    name: "dfrfr",
    mobile: "9561245157",
    email: "dfsdf@gmail.com",
    qualification: "dsd",
    profile: <Button variant="primary"><FaUserCircle /></Button>

  },
  {
    sr: 3,
    name: "ghmhjmg",
    mobile: "9561245157",
    email: "dfsdf@gmail.com",
    qualification: "rrdgb",
    profile: <Button variant="primary"><FaUserCircle /></Button>
  },


]


function Doctors() {
  const Navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr',
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
      },
      {
        accessorKey: 'email',
        header: 'Emial ',
        size: 150,
      },
      {
        accessorKey: 'qualification',
        header: 'Qualification',
        size: 150,
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

      // {
      //     accessorKey: 'action',
      //     header: 'Action',
      //     size: 150,
      //     Cell: ({ row }) => (
      //         <Box>
      //             <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
      //                 {/* <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} /> */}
      //                 <IoScanCircle style={{ fontSize: "30px" }} />
      //             </button>
      //         </Box>
      //     ),
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

  const handleActivateUser = (row) => {
    //alert('hii');
    Navigate('/home/doctor_list/doctorprofiledisplay')
  };
  return (
    <>
      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '20px' }}>Doctors List </p>
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

export default Doctors
