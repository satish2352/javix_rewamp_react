import React from 'react';
import CustomBarGraph from './CustomBarGraph';
import { Link } from 'react-router-dom';
import Home from '../dashboard/home/Home'
import './insights.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const data1 = [
    { name: 'Page A', Green: 4000, Amber: 2400, Red: 2400 },
    { name: 'Page B', Green: 3000, Amber: 1398, Red: 2210 },
    { name: 'Page C', Green: 2000, Amber: 9800, Red: 2290 },
];

const data2 = [
    { name: 'Group A', Green: 1200, Amber: 3300, Red: 3200 },
    { name: 'Group B', Green: 2800, Amber: 2300, Red: 2100 },
    { name: 'Group C', Green: 1900, Amber: 4100, Red: 3200 },
];

function Insights() {
    const colors = ['#28C76F', '#FFBF00', '#EA5455']; // Green, Amber, Red

    return (
        <>
            <Home />
            <br></br>

            <div>
                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div>
                            <div>
                                <h4>Blood Pressure</h4>
                                <CustomBarGraph
                                    data={data1}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Blood Pressure Green Cases</p></Link>
                                <Link><p>Blood Pressure Amber Cases</p></Link>
                                <Link><p>Blood Pressure Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>SPO2</h4>
                                <CustomBarGraph
                                    data={data2}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>SPO2 Green Cases</p></Link>
                                <Link><p>SPO2 Amber Cases</p></Link>
                                <Link><p>SPO2 Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Temperature</h4>
                                <CustomBarGraph
                                    data={data1}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Temperature Green Cases</p></Link>
                                <Link><p>Temperature Amber Cases</p></Link>
                                <Link><p>Temperature Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Heart Rate</h4>
                                <CustomBarGraph
                                    data={data2}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Heart Rate Green Cases</p></Link>
                                <Link><p>Heart Rate Amber Cases</p></Link>
                                <Link><p>Heart Rate Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>BMI</h4>
                                <CustomBarGraph
                                    data={data1}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>BMI Green Cases</p></Link>
                                <Link><p>BMI Amber Cases</p></Link>
                                <Link><p>BMI Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Blood Glucose</h4>
                                <CustomBarGraph
                                    data={data2}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Blood Glucose Green Cases</p></Link>
                                <Link><p>Blood Glucose Amber Cases</p></Link>
                                <Link><p>Blood Glucose Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>LDL-Lipid Panel</h4>
                                <CustomBarGraph
                                    data={data1}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>LDL-Lipid Panel Green Cases</p></Link>
                                <Link><p>LDL-Lipid Panel Amber Cases</p></Link>
                                <Link><p>LDL-Lipid Panel Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>HDL-Lipid Panel</h4>
                                <CustomBarGraph
                                    data={data2}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>HDL-Lipid Panel Green Cases</p></Link>
                                <Link><p>HDL-Lipid Panel Amber Cases</p></Link>
                                <Link><p>HDL-Lipid Panel Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Triglycerides-Lipid Panel</h4>
                                <CustomBarGraph
                                    data={data1}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Triglycerides-Lipid Panel Green Cases</p></Link>
                                <Link><p>Triglycerides-Lipid Panel Amber Cases</p></Link>
                                <Link><p>Triglycerides-Lipid Panel Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Cholesterol-Lipid Panel</h4>
                                <CustomBarGraph
                                    data={data2}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Cholesterol-Lipid Panel Green Cases</p></Link>
                                <Link><p>Cholesterol-Lipid Panel Amber Cases</p></Link>
                                <Link><p>Cholesterol-Lipid Panel Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Right Eye Tests</h4>
                                <CustomBarGraph
                                    data={data1}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Right Eye Tests Green Cases</p></Link>
                                <Link><p>Right Eye Tests Amber Cases</p></Link>
                                <Link><p>Right Eye Tests Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>

                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Left Eye Tests</h4>
                                <CustomBarGraph
                                    data={data2}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Left Eye Tests Green Cases</p></Link>
                                <Link><p>Left Eye Tests Amber Cases</p></Link>
                                <Link><p>Left Eye Tests Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card id='CARD_IMG'>
                    <Card.Body>
                        <div className='mt-5'>
                            <div>
                                <h4>Haemoglobin</h4>
                                <CustomBarGraph
                                    data={data1}
                                    xAxisKey="name"
                                    barKeys={['Green', 'Amber', 'Red']}
                                    colors={colors}
                                />
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-center mt-3'>
                                <Link><p>Haemoglobin Green Cases</p></Link>
                                <Link><p>Haemoglobin Amber Cases</p></Link>
                                <Link><p>Haemoglobin Red Cases</p></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Insights
