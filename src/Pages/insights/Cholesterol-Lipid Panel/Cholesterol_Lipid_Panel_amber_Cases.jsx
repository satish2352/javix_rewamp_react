import React, { useMemo } from 'react';
import './Cholesterol_Lipid_Panel.scss';
// import ActivateUserIcon from '../../../assets/images/Activate User.png';
import { IoScanCircle } from "react-icons/io5";


import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,

} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
// import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Export_Button from '../../../screens/dashboard/Exportbuttoncomponents/Export_Button';
import { Card } from 'react-bootstrap';


const data = [
  {
    sr: 1,
    petient_details: "fddfg",
    mobile: "9561245157",
    citizenid: "124",
    caseid: "1021",
    screnner_fullname: "gsegts  esfs",
    address: "sdfd",
    onboarding_date: "21/04/2021",
    date: "21/04/2021",
    alert: "Hey Alert",
  },
  {
    sr: 2,
    petient_details: "fddfg",
    mobile: "9561245157",
    citizenid: "124",
    caseid: "1021",
    screnner_fullname: "gsegts  esfs",
    address: "sdfd",
    onboarding_date: "21/04/2021",
    date: "21/04/2021",
    alert: "Hey Alert",
  },
  {
    sr: 3,
    petient_details: "fddfg",
    mobile: "9561245157",
    citizenid: "124",
    caseid: "1021",
    screnner_fullname: "gsegts  esfs",
    address: "sdfd",
    onboarding_date: "21/04/2021",
    date: "21/04/2021",
    alert: "Hey Alert",
  },


]


function Cholesterol_Lipid_Panel_amber_Cases() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr',
        header: 'Sr No',
        size: 150,
      },
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
        header: 'Citizen ID ',
        size: 150,
      },
      {
        accessorKey: 'caseid',
        header: 'Case ID',
        size: 150,
      },
      {
        accessorKey: 'screnner_fullname',
        header: 'Screnner Full Name',
        size: 150,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 150,
      },
      {
        accessorKey: 'onboarding_date',
        header: 'Onbording Date',
        size: 150,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 150,
      },
      {
        accessorKey: 'alert',
        header: 'Alert',
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
      <Card className='mt-2'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '20px' }}>Cholesterol-Lipid Panel amber Cases</p>
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
                <Export_Button data={data} name={"Cholestrol Lipid amber cases"} />
              </Box>
            </Box>
          </Box>
          <MaterialReactTable table={table} />
        </Card.Body>
      </Card>

    </>
  )
}

export default Cholesterol_Lipid_Panel_amber_Cases
