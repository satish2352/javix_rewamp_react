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

import Export_Button from '../../screens/dashboard/Exportbuttoncomponents/Export_Button';
import { Card } from 'react-bootstrap';

const data = [
  {
    sr: 1,
    citizenID: "abc",
    caseID: "axy",
    screenerID: "Doctors",
    citizen_name: "Inactive",
    screenerfullname: "axy sdc",
    DOB: "124",
    Role: 'dfvdf',
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
    lefteyerange: "Active",
    righteyerange: "Active",
    homoglobins: "Active",
    bloodglucoseunit: "Active",
    bloodglucosetype: "Active",
    nitrite: "Active",
    urobilinogen: "Active",
    protein: "Active",
    blood: "Active",
    specificgravity: "Active",
    ketone: "Active",
    bilirubin: "Active",
    ph: "Active",
    urineglucose: "Active",
    leukocytes: "Active",
    fvcpredicted: "Active",
    fvcactual: "Active",
    fvcpredictedpercent: "Active",
    fev1predicted: "Active",
    fev1actual: "Active",
    fev1predictedpercent: "Active",
    pefpredicted: "Active",
    pefactual: "Active",
    pefpredictedpercent: "Active",
    fvc1predicted: "Active",
    fvc1actual: "Active",
    fvc1predictedpercent: "Active",
    cholesterol: "Active",
    hdlcholesterol: "Active",
    triglycerides: "Active",
    ldl: "Active",
    tchdl: "Active",
    ldlhdl: "Active",
    nonhdl: "Active",
    lipidglucose: "Active",
    type: "Active",
    createdat: "Active",
    action: ActivateUserIcon

  },
  {
    sr: 2,
    citizenID: "xyzz",
    caseID: "axffefwy",
    screenerID: "Doctors",
    citizen_name: "Inactive",
    screenerfullname: "axy sdc",
    DOB: '12',
    Role: "No",
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
    lefteyerange: "Active",
    righteyerange: "Active",
    homoglobins: "Active",
    bloodglucoseunit: "Active",
    bloodglucosetype: "Active",
    nitrite: "Active",
    urobilinogen: "Active",
    protein: "Active",
    blood: "Active",
    specificgravity: "Active",
    ketone: "Active",
    bilirubin: "Active",
    ph: "Active",
    urineglucose: "Active",
    leukocytes: "Active",
    fvcpredicted: "Active",
    fvcactual: "Active",
    fvcpredictedpercent: "Active",
    fev1predicted: "Active",
    fev1actual: "Active",
    fev1predictedpercent: "Active",
    pefpredicted: "Active",
    pefactual: "Active",
    pefpredictedpercent: "Active",
    fvc1predicted: "Active",
    fvc1actual: "Active",
    fvc1predictedpercent: "Active",
    cholesterol: "Active",
    hdlcholesterol: "Active",
    triglycerides: "Active",
    ldl: "Active",
    tchdl: "Active",
    ldlhdl: "Active",
    nonhdl: "Active",
    lipidglucose: "Active",
    type: "Active",
    createdat: "Active",
    action: ActivateUserIcon

  },
  {
    sr: 3,
    citizenID: "rerr",
    caseID: "regerver",
    screenerID: "Doctors",
    citizen_name: "Inactive",
    screenerfullname: "axy sdc",
    DOB: "124",
    Role: "No",
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
    lefteyerange: "Active",
    righteyerange: "Active",
    homoglobins: "Active",
    bloodglucoseunit: "Active",
    bloodglucosetype: "Active",
    nitrite: "Active",
    urobilinogen: "Active",
    protein: "Active",
    blood: "Active",
    specificgravity: "Active",
    ketone: "Active",
    bilirubin: "Active",
    ph: "Active",
    urineglucose: "Active",
    leukocytes: "Active",
    fvcpredicted: "Active",
    fvcactual: "Active",
    fvcpredictedpercent: "Active",
    fev1predicted: "Active",
    fev1actual: "Active",
    fev1predictedpercent: "Active",
    pefpredicted: "Active",
    pefactual: "Active",
    pefpredictedpercent: "Active",
    fvc1predicted: "Active",
    fvc1actual: "Active",
    fvc1predictedpercent: "Active",
    cholesterol: "Active",
    hdlcholesterol: "Active",
    triglycerides: "Active",
    ldl: "Active",
    tchdl: "Active",
    ldlhdl: "Active",
    nonhdl: "Active",
    lipidglucose: "Active",
    type: "Active",
    createdat: "Active",
    action: ActivateUserIcon

  },
  {
    sr: 4,
    citizenID: "jmhjhgh",
    caseID: "fdgfgdfg",
    screenerID: "Doctors",
    citizen_name: "Inactive",
    screenerfullname: "axy sdc",
    DOB: "124",
    Role: "No",
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
    lefteyerange: "Active",
    righteyerange: "Active",
    homoglobins: "Active",
    bloodglucoseunit: "Active",
    bloodglucosetype: "Active",
    nitrite: "Active",
    urobilinogen: "Active",
    protein: "Active",
    blood: "Active",
    specificgravity: "Active",
    ketone: "Active",
    bilirubin: "Active",
    ph: "Active",
    urineglucose: "Active",
    leukocytes: "Active",
    fvcpredicted: "Active",
    fvcactual: "Active",
    fvcpredictedpercent: "Active",
    fev1predicted: "Active",
    fev1actual: "Active",
    fev1predictedpercent: "Active",
    pefpredicted: "Active",
    pefactual: "Active",
    pefpredictedpercent: "Active",
    fvc1predicted: "Active",
    fvc1actual: "Active",
    fvc1predictedpercent: "Active",
    cholesterol: "Active",
    hdlcholesterol: "Active",
    triglycerides: "Active",
    ldl: "Active",
    tchdl: "Active",
    ldlhdl: "Active",
    nonhdl: "Active",
    lipidglucose: "Active",
    type: "Active",
    createdat: "Active",
    action: ActivateUserIcon

  },
  {
    sr: 5,
    citizenID: "vfdvvf",
    caseID: "ujkyuym",
    screenerID: "Doctors",
    citizen_name: "Inactive",
    screenerfullname: "axy sdc",
    DOB: "124",
    Role: "No",
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
    lefteyerange: "Active",
    righteyerange: "Active",
    homoglobins: "Active",
    bloodglucoseunit: "Active",
    bloodglucosetype: "Active",
    nitrite: "Active",
    urobilinogen: "Active",
    protein: "Active",
    blood: "Active",
    specificgravity: "Active",
    ketone: "Active",
    bilirubin: "Active",
    ph: "Active",
    urineglucose: "Active",
    leukocytes: "Active",
    fvcpredicted: "Active",
    fvcactual: "Active",
    fvcpredictedpercent: "Active",
    fev1predicted: "Active",
    fev1actual: "Active",
    fev1predictedpercent: "Active",
    pefpredicted: "Active",
    pefactual: "Active",
    pefpredictedpercent: "Active",
    fvc1predicted: "Active",
    fvc1actual: "Active",
    fvc1predictedpercent: "Active",
    cholesterol: "Active",
    hdlcholesterol: "Active",
    triglycerides: "Active",
    ldl: "Active",
    tchdl: "Active",
    ldlhdl: "Active",
    nonhdl: "Active",
    lipidglucose: "Active",
    type: "Active",
    createdat: "Active",
    action: ActivateUserIcon

  },

]

function Patient_List_For_Lipid_Panel_Test() {
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
        accessorKey: 'screenerfullname',
        header: 'Screener Full Name',
        size: 150,
      },
      {
        accessorKey: 'DOB',
        header: 'DOB',
        size: 150,
      },
      {
        accessorKey: 'Role',
        header: 'Role',
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
      // {
      //   accessorKey: 'aadhar_number',
      //   header: 'Aadhar Number',
      //   size: 150,
      // },
      // {
      //   accessorKey: 'mobile',
      //   header: 'mobile',
      //   size: 150,
      // },
      // {
      //   accessorKey: 'address',
      //   header: 'Address',
      //   size: 150,
      // },
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
        accessorKey: 'lefteyerange',
        header: 'Left Eye Range',
        size: 150,
      },
      {
        accessorKey: 'righteyerange',
        header: 'right Eye Range',
        size: 150,
      },
      {
        accessorKey: 'homoglobins',
        header: 'Homoglobins',
        size: 150,
      },
      {
        accessorKey: 'bloodglucoseunit',
        header: 'Blood Glucose Unit',
        size: 150,
      },
      {
        accessorKey: 'bloodglucosetype',
        header: 'Blood Glucose Type',
        size: 150,
      },
      {
        accessorKey: 'nitrite',
        header: 'Nitrite',
        size: 150,
      },
      {
        accessorKey: 'urobilinogen',
        header: 'Urobilinogen',
        size: 150,
      },

      {
        accessorKey: 'protein',
        header: 'Protein',
        size: 150,
      },
      {
        accessorKey: 'blood',
        header: 'Blood',
        size: 150,
      },
      {
        accessorKey: 'specificgravity',
        header: 'Specific Gravity',
        size: 150,
      },
      {
        accessorKey: 'ketone',
        header: 'Ketone',
        size: 150,
      },
      {
        accessorKey: 'bilirubin',
        header: 'Bilirubin',
        size: 150,
      },
      {
        accessorKey: 'ph',
        header: 'PH',
        size: 150,
      },
      {
        accessorKey: 'urineglucose',
        header: 'urineglucose',
        size: 150,
      },
      {
        accessorKey: 'leukocytes',
        header: 'Leukocytes',
        size: 150,
      },
      {
        accessorKey: 'fvcpredicted',
        header: 'FVC Predicated',
        size: 150,

      },
      {
        accessorKey: 'fvcactual',
        header: 'FVC Actual',
        size: 150,
      },
      {
        accessorKey: 'fvcpredictedpercent',
        header: 'FVC Predicted Percent',
        size: 150,
      },
      {
        accessorKey: 'fev1predicted',
        header: 'FEV 1 Predicated',
        size: 150,
      },
      {
        accessorKey: 'fev1actual',
        header: 'FEV 1 Actual',
        size: 150,
      },
      {
        accessorKey: 'fev1predictedpercent',
        header: 'FEV 1 Predicted Percent',
        size: 150,
      },
      {
        accessorKey: 'pefpredicted',
        header: 'PEF Predicted',
        size: 150,
      },
      {
        accessorKey: 'pefactual',
        header: 'PEF Actual',
        size: 150,
      },
      {
        accessorKey: 'pefpredictedpercent',
        header: 'PEF Predicted Percent',
        size: 150,
      },
      {
        accessorKey: 'fvc1predicted',
        header: 'FVC 1 Predicted',
        size: 150,
      },
      {
        accessorKey: 'fvc1actual',
        header: 'FVC 1 Actual',
        size: 150,
      },
      {
        accessorKey: 'fvc1predictedpercent',
        header: 'FVC 1 Predicted Percent',
        size: 150,
      },
      {
        accessorKey: 'cholesterol',
        header: 'Cholestrol',
        size: 150,
      },
      {
        accessorKey: 'hdlcholesterol',
        header: 'HDL Cholesterol',
        size: 150,
      },
      {
        accessorKey: 'triglycerides',
        header: 'Trigly Cerides',
        size: 150,
      },

      {
        accessorKey: 'ldl',
        header: 'LDL',
        size: 150,
      },
      {
        accessorKey: 'tchdl',
        header: 'TC/HDL',
        size: 150,
      },
      {
        accessorKey: 'ldlhdl',
        header: 'LDL/HDL',
        size: 150,
      },
      {
        accessorKey: 'nonhdl',
        header: 'NON_HDL',
        size: 150,
      },
      {
        accessorKey: 'lipidglucose',
        header: 'Lipide glucose',
        size: 150,
      },
      {
        accessorKey: 'type',
        header: 'Type',
        size: 150,
      },
      {
        accessorKey: 'createdat',
        header: 'Created At',
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
          <p style={{ color: "black", fontSize: '20px' }}>Lipid Critical Cases</p>
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
                <Export_Button data={data} name={"Patient list test"} />
              </Box>
            </Box>
          </Box>
          <MaterialReactTable table={table} />
        </Card.Body>
      </Card>

    </>


  )
}

export default Patient_List_For_Lipid_Panel_Test
