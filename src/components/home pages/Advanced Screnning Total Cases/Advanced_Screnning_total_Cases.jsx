import React, { useMemo } from 'react';
import './total_cases.scss';

import { FaCheck } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
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
import { TbHandClick } from "react-icons/tb";


const data = [
    {
        sr: 1,
        // photo: <Avatar alt="Remy Sharp" src={avtar} />,
        citizenid: "5124587495235",
        caseid: "125415",
        scrennerid: "1234",
        citizenname: "sdsdv sdvscz",
        scrennername: "rahul dcvs borse",
        DOB: '12/04/2012',
        gender: 'male',
        age: '23',
        mobile: "9564215748",
        address: "cvdfddv grgs rgrs gsg",
        createdat: "12/04/2012 "
    },
    {
        sr: 2,
        // photo: <Avatar alt="Remy Sharp" src={avtar} />,
        citizenid: "84512574956235",
        caseid: "85412574",
        scrennerid: "23614",
        citizenname: "hgdfegw hgdvha ",
        scrennername: "jagsvdh gayts yy vy",
        DOB: '12/04/2012',
        gender: 'female',
        age: '20',
        mobile: "9651241475",
        address: "jhcbj jsndc ",
        createdat: "12/04/2012 ",
    },
]
function Advanced_Screnning_total_Cases() {
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
                accessorKey: 'citizenid',
                header: 'Citizen ID',
                size: 150,
            },
            {
                accessorKey: 'caseid',
                header: 'Case ID',
                size: 150,
            },
            {
                accessorKey: 'scrennerid',
                header: 'Scrnner ID',
                size: 150,
            },
            {
                accessorKey: 'citizenname',
                header: 'Citizen Name',
                size: 150,
            },
            {
                accessorKey: 'scrennername',
                header: 'Screnner Name',
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
                accessorKey: 'mobile',
                header: 'Mobile',
                size: 150,
            },
            {
                accessorKey: 'address',
                header: 'Address',
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
            //       <p onClick={() => handleActivateUser1(row)} ><Button variant="outline-success">Pick And Prescribed</Button></p>
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

    const handleActivateUser1 = (row) => {
        alert('1');
        //Navigate('/citizen-form')
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
                    <p style={{ color: "black", fontSize: '16px' }}>Advanced Screnning Case</p>
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
                                {/* <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }}>Export</Button> */}
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

export default Advanced_Screnning_total_Cases
