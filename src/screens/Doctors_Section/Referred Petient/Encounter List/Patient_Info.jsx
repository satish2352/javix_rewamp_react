import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PatientInfoProfile from './PatientInfoProfile';
import './Patient_Info.css';
import Encounters from './Encounters';
import PersonalHistory from './PersonalHistory';
import Allergies from './Allergies';
import MedicalHistory from './MedicalHistory';
import ReproductiveHistory from './ReproductiveHistory';
import Rx from './Rx';
import Documents from './Documents';

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          centered
        >
          <Tab label="Profile" />
          <Tab label="Encounters" />
          <Tab label="Personal History" />
          <Tab label="Allergies" />
          <Tab label="Medical History" />
          <Tab label="Reproductive History" />
          <Tab label="Rx" />
          <Tab label="Documents" />
        </Tabs>
      </Box>

      <div>
        {value === 0 && <PatientInfoProfile />}
        {value === 1 && <Encounters />}
        {value === 2 && <PersonalHistory />}
        {value === 3 && <Allergies />}
        {value === 4 && <MedicalHistory />}
        {value === 5 && <ReproductiveHistory />}
        {value === 6 && <Rx />}
        {value === 7 && <Documents />}
      </div>
    </>
  );
}