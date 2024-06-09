import React from 'react';
import CustomPieChart from './CustomPieChart';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Home from '../../layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './insights.scss'
import Button from 'react-bootstrap/Button';

const data1 = [
    { name: 'Green', value: 400 },
    { name: 'Amber', value: 300 },
    { name: 'Red', value: 200 },
];

const data2 = [
    { name: 'Green', value: 100 },
    { name: 'Amber', value: 200 },
    { name: 'Red', value: 300 },
];

import { useMemo } from 'react';
import './insights.scss';

import {
    MaterialReactTable,
    useMaterialReactTable,

} from 'material-react-table';
import { Box, lighten } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


const data = [
    {
        sr: 1,
        screnner_name: "fddfg",
        mobile: "9561245157",
        new_citizen: "124",
        total_cases: "1021",
        gender: "male",
        role: "sdfd",
        age: "21",
        date: "21/04/2021",
        action: "Hey Alert",
    },
    {
        sr: 2,
        screnner_name: "fddfg",
        mobile: "9561245157",
        new_citizen: "124",
        total_cases: "1021",
        gender: "female",
        role: "sdfd",
        age: "20",
        date: "21/04/2021",
        action: "Hey Alert",
    },
    {
        sr: 3,
        screnner_name: "dvd",
        mobile: "9561245157",
        new_citizen: "124",
        total_cases: "1021",
        gender: "female",
        role: "sdfd",
        age: "40",
        date: "21/04/2021",
        action: "Hey Alert",
    },
    {
        sr: 4,
        screnner_name: "fdb",
        mobile: "9561245157",
        new_citizen: "124",
        total_cases: "1021",
        gender: "female",
        role: "sdfd",
        age: "40",
        date: "21/04/2021",
        action: "Hey Alert",
    },
]



const Insights2 = () => {
    const Navigate = useNavigate();
    const colors = ['#28C76F', '#FFBF00', '#EA5455']; // Green, Amber, Red

    const columns = useMemo(
        () => [
            {
                accessorKey: 'sr',
                header: 'Sr No',
                size: 150,
            },
            {
                accessorKey: 'screnner_name',
                header: 'Screnner Name',
                size: 150,
            },
            {
                accessorKey: 'mobile',
                header: 'Mobile',
                size: 150,
            },
            {
                accessorKey: 'new_citizen',
                header: 'New Citizen ',
                size: 150,
            },
            {
                accessorKey: 'total_cases',
                header: 'Total Cases',
                size: 150,
            },
            {
                accessorKey: 'gender',
                header: 'Gender',
                size: 150,
            },
            {
                accessorKey: 'role',
                header: 'Role',
                size: 150,
            },
            {
                accessorKey: 'age',
                header: 'Age',
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
                        <Button variant="outline-success" onClick={() => handleActivate()}>View</Button>
                        {/* <button onClick={() => handleActivateUser(row)} style={{ height: '32px', width: '32px', borderRadius: '50%' }}>
                            {/* <img src={ActivateUserIcon} alt="" style={{ width: '100%', height: 'auto' }} /> */}
                        {/* <IoScanCircle style={{ fontSize: "30px" }} />
                        </button> */}
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



    const handleActivate = () => {
        alert('Do you want to see case list..???');
        Navigate('/caselist')
    };


    return (
        <>
            <Home />
            <br></br>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Blood Pressure</h5>
                            <CustomPieChart
                                data={data1}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            {/* <div className='d-flex justify-content-around align-items-center text-center mt-3'> */}
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/bloodpresure_table'><p >Blood Pressure Green Cases</p></Link>
                                <Link to='/admin/insights/bloodpresure_table/Blood_Pressure_Amber_Cases'><p>Blood Pressure Amber Cases</p></Link>
                                <Link to='/admin/insights/bloodpresure_table/Blood_Pressure_Red_Cases'><p>Blood Pressure Red Cases</p></Link>
                            </div>

                            {/* </div> */}
                        </Card.Body>
                    </Card>
                    <br></br>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>SPO2</h5>
                            <CustomPieChart
                                data={data2}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            {/* <div className='d-flex justify-content-around align-items-center text-center mt-3'> */}
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/SPO2/SPO2_Green_Cases'><p >SPO2 Green Cases</p></Link>
                                <Link to='/admin/insights/SPO2/SPO2_Amber_Cases'><p >SPO2 Amber Cases</p></Link>
                                <Link to='/admin/insights/SPO2/SPO2_Red_Cases'><p>SPO2 Red Cases</p></Link>
                                {/* </div> */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Temperature</h5>
                            <CustomPieChart
                                data={data1}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            {/* <div className='d-flex justify-content-around align-items-center text-center mt-3'> */}
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/temperature/Temperature_Green_Cases'><p >Temperature Green Cases</p></Link>
                                <Link to='/admin/insights/temperature/Temperature_Amber_Cases'><p >Temperature Amber Cases</p></Link>
                                <Link to='/admin/insights/temperature/Temperature_Red_Cases'><p>Temperature Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Heart Rate</h5>
                            <CustomPieChart
                                data={data2}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            {/* <div className='d-flex justify-content-around align-items-center text-center mt-3'> */}
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/Heart_rate/Heart_Rate_Green_Cases' ><p >Heart Rate Green Cases</p></Link>
                                <Link to='/admin/insights/Heart_rate/Heart_Rate_Amber_Cases'><p >Heart Rate Amber Cases</p></Link>
                                <Link to='/admin/insights/Heart_rate/Heart_Rate_Red_Cases'><p>Heart Rate Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>

            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>BMI</h5>
                            <CustomPieChart
                                data={data1}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/BMI/BMI_Green_Cases'><p >BMI Green Cases</p></Link>
                                <Link to='/admin/insights/BMI/BMI_Amber_Cases'><p >BMI Amber Cases</p></Link>
                                <Link to='/admin/insights/BMI/BMI_Red_Cases'><p>BMI Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <br></br>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Blood Glucose</h5>
                            <CustomPieChart
                                data={data2}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/blood_glucose/Blood_Glucose_Green_Cases'><p >Blood Glucose Green Cases</p></Link>
                                <Link to='/admin/insights/blood_glucose/Blood_Glucose_Amber_Cases'><p >Blood Glucose Amber Cases</p></Link>
                                <Link to='/admin/insights/blood_glucose/Blood_Glucose_Red_Cases'><p>Blood Glucose Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>

            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>LDL-Lipid Panel</h5>
                            <CustomPieChart
                                data={data1}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/LDL-Lipid panel/LDL_Lipid_Panel_Green_cases'><p >LDL-Lipid Panel Green Cases</p></Link>
                                <Link to='/admin/insights/LDL-Lipid panel/LDL_Lipid_Panel_amber_cases'><p >LDL-Lipid Panel Amber Cases</p></Link>
                                <Link to='/admin/insights/LDL-Lipid panel/LDL_Lipid_Panel_Red_cases'><p>LDL-Lipid Panel Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>HDL-Lipid Panel</h5>
                            <CustomPieChart
                                data={data2}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Green_Cases'><p >HDL-Lipid Panel Green Cases</p></Link>
                                <Link to='/admin/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Amber_Cases'><p >HDL-Lipid Panel Amber Cases</p></Link>
                                <Link to='/admin/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Red_Cases'><p>HDL-Lipid Panel Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>

            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Triglycerides-Lipid Panel</h5>
                            <CustomPieChart
                                data={data1}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/Triglycerides_Lipid_Panel/Triglycerides_Lipid_Panel_green_cases'><p >Triglycerides-Lipid Panel Green Cases</p></Link>
                                <Link to='/admin/insights/Triglycerides_Lipid_Panel/Triglycerides_Lipid_Panel_amber_cases'><p >Triglycerides-Lipid Panel Amber Cases</p></Link>
                                <Link to='/admin/insights/Triglycerides_Lipid_Panel/Triglycerides_Lipid_Panel_red_cases'><p>Triglycerides-Lipid Panel Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <br></br>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Cholesterol-Lipid Panel</h5>
                            <CustomPieChart
                                data={data2}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Green_Cases'><p >Cholesterol-Lipid Panel Green Cases</p></Link>
                                <Link to='/admin/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_amber_Cases'><p >Cholesterol-Lipid Panel Amber Cases</p></Link>
                                <Link to='/admin/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Red_Cases'><p>Cholesterol-Lipid Panel Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Right Eye Tests</h5>
                            <CustomPieChart
                                data={data1}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/Right_Eye_Tests/Right_Eye_Tests_Green_case'><p >Right Eye Tests Green Cases</p></Link>
                                <Link to='/admin/insights/Right_Eye_Tests/Right_Eye_Tests_Amber_case'><p >Right Eye Tests Amber Cases</p></Link>
                                <Link to='/admin/insights/Right_Eye_Tests/Right_Eye_Tests_Red_case'><p >Right Eye Tests Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Body>
                            <h5>Left Eye Tests</h5>
                            <CustomPieChart
                                data={data2}
                                xAxisKey="name"
                                barKeys={['Green', 'Amber', 'Red']}
                                colors={colors}
                            />
                            <div style={{ textAlign: 'center' }} className='mt-3'>
                                <Link to='/admin/insights/Left_Eye_Tests/Left_Eye_Tests_Green_Tests'><p >Left Eye Tests Green Cases</p></Link>
                                <Link to='/admin/insights/Left_Eye_Tests/Left_Eye_Tests_Amber_Tests'><p >Left Eye Tests Amber Cases</p></Link>
                                <Link to='/admin/insights/Left_Eye_Tests/Left_Eye_Tests_Red_Tests'><p >Left Eye Tests Red Cases</p></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className='shadow p-lg-5 mt-5'>
                    <div>
                        <h5>Haemoglobin</h5>
                        <CustomPieChart
                            data={data1}
                            xAxisKey="name"
                            barKeys={['Green', 'Amber', 'Red']}
                            colors={colors}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }} className='mt-3'>
                        <Link to='/admin/insights/Haemoglobin/Haemoglobin_green_case'><p>Haemoglobin Green Cases</p></Link>
                        <Link to='/admin/insights/Haemoglobin/Haemoglobin_amber_case'><p>Haemoglobin Amber Cases</p></Link>
                        <Link to='/admin/insights/Haemoglobin/Haemoglobin_red_case'><p>Haemoglobin Red Cases</p></Link>
                    </div>
                </div>
            </Row>
            <br></br>

            <Card id='CARD_IMG'>
                <Card.Body>
                    <h4 style={{ textAlign: "center", color: 'rgb(196, 83, 102)' }}><b>Sevika And Screnner Report</b></h4>
                </Card.Body>
            </Card>

            <MaterialReactTable table={table} />

        </>
    );
}

export default Insights2;
