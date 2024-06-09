import React, { useMemo } from 'react';
import './general_survey.scss';
import { IoScanCircle } from "react-icons/io5";
import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,
} from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';
import Home from '../../layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import Export_Button from '../../screens/dashboard/Exportbuttoncomponents/Export_Button';

const data = [
    {
        sr: 1,
        no_of_family: 2,
        family_head: "testscanner",
        familyid: "problem in Edit Profile",
        citizenid: "vegrh",
        sevikaname: "vegrh",
        mobile: "vegrh",
        aadhar_no: "28-12-2023",
        address: "test address",
        family_member_name: "John Doe",
        age: 30,
        no_of_adult_male: 1,
        no_of_adult_female: 1,
        no_of_children_male: 0,
        no_of_children_female: 0,
        survey_date: "01-01-2024",
    },
    {
        sr: 2,
        no_of_family: 3,
        family_head: "dsvdfv",
        familyid: "problem in Edit Profile",
        citizenid: "vegrh",
        sevikaname: "vegrh",
        mobile: "vegrh",
        aadhar_no: "28-12-2023",
        address: "test address",
        family_member_name: "Jane Doe",
        age: 28,
        no_of_adult_male: 1,
        no_of_adult_female: 1,
        no_of_children_male: 1,
        no_of_children_female: 0,
        survey_date: "01-01-2024",
    },
];

function GeneralSurvey() {
    const columns = useMemo(
        () => [
            { accessorKey: 'sr', header: 'Sr No', size: 150 },
            { accessorKey: 'no_of_family', header: 'Number Of Family Member', size: 150 },
            { accessorKey: 'family_head', header: 'Family Head Name', size: 150 },
            { accessorKey: 'familyid', header: 'Family ID', size: 150 },
            { accessorKey: 'citizenid', header: 'Citizen ID', size: 150 },
            { accessorKey: 'sevikaname', header: 'Sevika Name', size: 150 },
            { accessorKey: 'mobile', header: 'Mobile', size: 150 },
            { accessorKey: 'aadhar_no', header: 'Aadhar number', size: 150 },
            { accessorKey: 'address', header: 'Address', size: 150 },
            { accessorKey: 'family_member_name', header: 'Family Member Name', size: 150 },
            { accessorKey: 'age', header: 'Age', size: 150 },
            { accessorKey: 'no_of_adult_male', header: 'No of Adult Male', size: 150 },
            { accessorKey: 'no_of_adult_female', header: 'No of Adult Female', size: 150 },
            { accessorKey: 'no_of_children_male', header: 'No of Children Male', size: 150 },
            { accessorKey: 'no_of_children_female', header: 'No of Children Female', size: 150 },
            { accessorKey: 'survey_date', header: 'Survey Date', size: 150 },
            // {
            //     accessorKey: 'action',
            //     header: 'Action',
            //     size: 150,
            //     Cell: ({ row }) => (
            //         <Box>
            //             <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
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

    // const handleExport = () => {
    //     const worksheet = XLSX.utils.json_to_sheet(data);
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Data");
    //     XLSX.writeFile(workbook, "General_Survey_Data.xlsx");
    // };

    return (
        <>
            <Home />
            <Card className='mt-3'>
                <Card.Body>
                    <p style={{ color: "black", fontSize: '20px' }}>General Survey Data</p>
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
                                <Export_Button data={data} name={"General Survey"}/>
                                {/* <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }} onClick={handleExport}>Export</Button> */}
                            </Box>
                        </Box>
                    </Box>
                    <MaterialReactTable table={table} />
                </Card.Body>
            </Card>
        </>
    );
}

export default GeneralSurvey;