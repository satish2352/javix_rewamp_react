import React, { useMemo } from 'react';
import './Screening_screener.scss';
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
import Export_Button from '../../screens/dashboard/Exportbuttoncomponents/Export_Button';

const data = [
  {
    sr: 1,
    citizenID: "abc",
    caseID: "axy",
    screenerID: "Doctors",
    citizen_name: "Inactive",
    screener_name: "axy sdc",
    DOB: "No",
    gender: "No",
    age: "Active",
    aadhar_number: "No",
    mobile: "Active",
    address: "No",
    height: "Active",
    weight: "No",
    bmi: "Active",
    bpsys: "No",
    bpdia: "Active",
    spo2: "Active",
    pulse: "Active",
    temperature: "Active",
    arm: "Active",
    createat: "createat",

    action: ActivateUserIcon

  },
  {
    sr: 2,
    citizenID: "gnfgn",
    caseID: "sdssdf",
    screenerID: "sevika",
    citizen_name: "Inactive",
    screener_name: "axy sdc",
    DOB: "No",
    gender: "No",
    age: "Active",
    aadhar_number: "No",
    mobile: "Active",
    address: "No",
    action: ActivateUserIcon

  },


]

function Screening_sevika() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sr',
        header: 'Sr No',
        size: 150,
      },
      {
        accessorKey: 'citizenID',
        header: 'Citizen ID',
        size: 150,
      },
      {
        accessorKey: 'caseID',
        header: 'Case ID',
        size: 150,
      },
      {
        accessorKey: 'screenerID',
        header: 'Screener ID',
        size: 150,
      },
      {
        accessorKey: 'citizen_name',
        header: 'Citizen Name',
        size: 150,
      },
      {
        accessorKey: 'screener_name',
        header: 'Screener Name',
        size: 150,
      },
      {
        accessorKey: 'DOB',
        header: 'DOB',
        size: 150,
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        size: 150,
      },
      {
        accessorKey: 'age',
        header: 'Age',
        size: 150,
      },
      {
        accessorKey: 'aadhar_number',
        header: 'Aadhar Number',
        size: 150,
      },
      {
        accessorKey: 'mobile',
        header: 'mobile',
        size: 150,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 150,
      },
      {
        accessorKey: 'height',
        header: 'Height',
        size: 150,
      },
      {
        accessorKey: 'weight',
        header: 'Weight',
        size: 150,
      },
      {
        accessorKey: 'bmi',
        header: 'BMI',
        size: 150,
      },
      {
        accessorKey: 'bpsys',
        header: 'BPSYS',
        size: 150,
      },
      {
        accessorKey: 'bpdia',
        header: 'BPDIA',
        size: 150,
      },
      {
        accessorKey: 'spo2',
        header: 'SPO2',
        size: 150,
      },
      {
        accessorKey: 'pulse',
        header: 'Pulse',
        size: 150,
      },
      {
        accessorKey: 'temperature',
        header: 'Temperature',
        size: 150,
      },
      {
        accessorKey: 'arm',
        header: 'Arm',
        size: 150,
      },
      {
        accessorKey: 'createdat',
        header: 'Create At',
        size: 150,
      },
      // {
      //   accessorKey: 'action',
      //   header: 'Action',
      //   size: 150,
      //   Cell: ({ row }) => (
      //     <Box>
      //       <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
      //         <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} />
      //       </button>
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

  const handleActivateUser = (row) => {
    alert('activating ' + row.getValue('name'));
  };
  return (
    <>

      <Card className='mt-3'>
        <Card.Body>
          <p style={{ color: "black", fontSize: '20px' }}>Daily And Weekly Screening Sevika Report</p>

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
                <Export_Button data={data} name={"Screening sevika"} />
              </Box>
            </Box>
          </Box>
          <MaterialReactTable table={table} />
        </Card.Body>
      </Card>

    </>
  )
}

export default Screening_sevika
