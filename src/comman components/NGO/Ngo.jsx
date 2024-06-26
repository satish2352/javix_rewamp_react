import React, { useMemo } from 'react';
import './Ngo.scss';
// import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { FaRegUser } from "react-icons/fa";
import ActivateUserIcon from '../../assets/images/Activate User.png';


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
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Navigate, useNavigate } from 'react-router-dom';


const data = [
  {
    sr: 1,
    id: "13254125478",
    ngoregno: "1204",
    ngoname: "fvdf",
    ngoowner: "fdvf fdvdfv",
    mobile: "9561254187",
    email: "dvfvdf@gmail.com",
    regdate: "21-01-2021",
    Action: <FaRegUser />
  },

]

function Ngo() {
  const navigate = useNavigate()

  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr',
        header: 'Sr No',
        size: 150,
      },
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150,
      },
      {
        accessorKey: 'ngoregno',
        header: 'NGO Reg No',
        size: 150,
      },
      {
        accessorKey: 'ngoname',
        header: 'NGO Name ',
        size: 150,
      },
      {
        accessorKey: 'ngoowner',
        header: 'NGO Owner',
        size: 150,
      },
      {
        accessorKey: 'mobile',
        header: 'Mobile',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'regdate',
        header: 'Reg Date',
        size: 150,
      },
      {
        accessorKey: 'Action',
        header: 'Action',
        size: 150,
        Cell: ({ row }) => (
          <Box>
            <FaRegUser onClick={() => handleActivateUser1(row)} style={{ fontSize: '20px' }} />
            <IoMdCheckmarkCircleOutline onClick={() => handleActivateUser2(row)} style={{ fontSize: '20px', marginLeft: '25px' }} />
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

  // const handleActivateUser = (row) => {
  //   alert('activating ' + row.getValue('name'));
  // };

  const handleActivateUser1 = (row) => {
    // alert('1');
    navigate('/ngo-profile')
  };
  const handleActivateUser2 = (row) => {
     //alert('2');
     navigate('/approvedusers/screener')
  };
  return (
    <>
      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '20px' }}>Enrolled NGO List</p>
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
            {/* <Box>
              <Box sx={{ display: 'flex', gap: '0.5rem' }}> */}
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
            {/* </Box> */}
            {/* </Box> */}
          </Box>


          <MaterialReactTable table={table} />
        </Card.Body>
      </Card>

    </>
  )
}

export default Ngo
