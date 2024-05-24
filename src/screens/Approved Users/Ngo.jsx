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
import Home from '../../screens/dashboard/home/Home';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


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
    Action: <FaRegUser style={{ fontSize: "20px" }} />
  },
 
]

function Ngo() {
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
    alert('activating ' + row.getValue('name'));
  };
  return (
    <>
      <Home />
      <br></br>
      <h5 style={{ color: "#ea5455" }}><b>Enrolled NGO List</b></h5>
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
            <Button
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
            </Button>
            <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button>
          </Box>
        </Box>
      </Box>
      <br></br>

      <MaterialReactTable table={table} />
      <br></br>
    </>
  )
}

export default Ngo
