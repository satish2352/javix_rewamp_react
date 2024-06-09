import { useState } from 'react';
import './Encounters.css';
import { Container, Row, Col, Image, Table, Button } from 'react-bootstrap';
import vitalSigns from '../../../assets/images/Encounters/vital signs.png';
import bloodGlucose from '../../../assets/images/Encounters/blood glucose.png';
import rapidTest from '../../../assets/images/Encounters/rapid test.png';
import drugTest from '../../../assets/images/Encounters/drug test.png';
import lipidPanel from '../../../assets/images/Encounters/lipid panel.png';
import sickleCell from '../../../assets/images/Encounters/sickle cell.png';
import thalassemia from '../../../assets/images/Encounters/thalassemia.png';
import lungFunction from '../../../assets/images/Encounters/lung function.png';
import eyeTest from '../../../assets/images/Encounters/eye test.png';
import haemoglobin from '../../../assets/images/Encounters/haemoglobin.png';

const encounterData = {
  '28-5-2024': [
    {
      type: 'Vital Signs',
      image: vitalSigns,
      details: [
        { key: 'Height', value: '160.02 Inches' },
        { key: 'Weight', value: '135 Kg' },
        { key: 'BMI', value: '52.72' },
        { key: 'Blood Pressure', value: '65/65 mmHg' },
        { key: 'SPO2(%)', value: '32 spo2%' },
        { key: 'Heart Rate', value: '45 bpm' },
        { key: 'Temperature', value: '105 F' },
        { key: 'Arm', value: '8 cm' },
        { key: 'Notes', value: '' },
      ],
    },
    {
      type: 'Blood Glucose',
      image: bloodGlucose,
      details: [
        { key: 'Blood Glucose', value: '- mg/dl' },
        { key: 'Type', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Rapid Test',
      image: rapidTest,
      details: [{ key: '(RAPID TEST REPORT)', value: '' }],
    },
    {
      type: 'Drug Test',
      image: drugTest,
      details: [{ key: '(DRUG TEST REPORT)', value: '' }],
    },
    {
      type: 'Lipid Panel',
      image: lipidPanel,
      details: [
        { key: 'Cholesterol', value: '- Mg / dl' },
        { key: 'HDL Cholesterol', value: '- Mg / dl' },
        { key: 'Trioglycerides', value: '- Mg / dl' },
        { key: 'Glucose', value: '- Mg / dl' },
        { key: 'LDL', value: '- Mg / dl' },
        { key: 'TCL LDL', value: '-' },
        { key: 'LDL HDL', value: '-' },
        { key: 'NON HDL', value: '-' },
        { key: 'TYPE', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Sickle Cell',
      image: sickleCell,
      details: [
        { key: 'Sickle Cell', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Thalassemia',
      image: thalassemia,
      details: [
        { key: 'Thalassemia', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Lung Function',
      image: lungFunction,
      details: [
        {
          key: '',
          value: '',
          table: [
            { parameter: 'FVC(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'FEV1(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'FEV1%(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'PEF(L/s)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'Notes', predicted: '-', actual: '', percent: '' },
          ],
        },
      ],
    },
    {
      type: 'Eye Test',
      image: eyeTest,
      details: [
        { key: 'Left Eye Test', value: '- mtr' },
        { key: 'Right Eye Test', value: '- mtr' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Haemoglobin',
      image: haemoglobin,
      details: [
        { key: 'Haemoglobin', value: '- gl/dl' },
        { key: 'Notes', value: '-' },
      ],
    },
  ],
  '27-5-2024': [
    {
      type: 'Vital Signs',
      image: vitalSigns,
      details: [
        { key: 'Height', value: '160.02 Inches' },
        { key: 'Weight', value: '135 Kg' },
        { key: 'BMI', value: '52.72' },
        { key: 'Blood Pressure', value: '65/65 mmHg' },
        { key: 'SPO2(%)', value: '32 spo2%' },
        { key: 'Heart Rate', value: '45 bpm' },
        { key: 'Temperature', value: '105 F' },
        { key: 'Arm', value: '8 cm' },
        { key: 'Notes', value: '' },
      ],
    },
    {
      type: 'Blood Glucose',
      image: bloodGlucose,
      details: [
        { key: 'Blood Glucose', value: '- mg/dl' },
        { key: 'Type', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Rapid Test',
      image: rapidTest,
      details: [{ key: '(RAPID TEST REPORT)', value: '' }],
    },
    {
      type: 'Drug Test',
      image: drugTest,
      details: [{ key: '(DRUG TEST REPORT)', value: '' }],
    },
    {
      type: 'Lipid Panel',
      image: lipidPanel,
      details: [
        { key: 'Cholesterol', value: '- Mg / dl' },
        { key: 'HDL Cholesterol', value: '- Mg / dl' },
        { key: 'Trioglycerides', value: '- Mg / dl' },
        { key: 'Glucose', value: '- Mg / dl' },
        { key: 'LDL', value: '- Mg / dl' },
        { key: 'TCL LDL', value: '-' },
        { key: 'LDL HDL', value: '-' },
        { key: 'NON HDL', value: '-' },
        { key: 'TYPE', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Sickle Cell',
      image: sickleCell,
      details: [
        { key: 'Sickle Cell', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Thalassemia',
      image: thalassemia,
      details: [
        { key: 'Thalassemia', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Lung Function',
      image: lungFunction,
      details: [
        {
          key: '',
          value: '',
          table: [
            { parameter: 'FVC(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'FEV1(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'FEV1%(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'PEF(L/s)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'Notes', predicted: '-', actual: '', percent: '' },
          ],
        },
      ],
    },
    {
      type: 'Eye Test',
      image: eyeTest,
      details: [
        { key: 'Left Eye Test', value: '- mtr' },
        { key: 'Right Eye Test', value: '- mtr' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Haemoglobin',
      image: haemoglobin,
      details: [
        { key: 'Haemoglobin', value: '- gl/dl' },
        { key: 'Notes', value: '-' },
      ],
    },
  ],
  '28-12-2023': [
    {
      type: 'Vital Signs',
      image: vitalSigns,
      details: [
        { key: 'Height', value: '160.02 Inches' },
        { key: 'Weight', value: '135 Kg' },
        { key: 'BMI', value: '52.72' },
        { key: 'Blood Pressure', value: '65/65 mmHg' },
        { key: 'SPO2(%)', value: '32 spo2%' },
        { key: 'Heart Rate', value: '45 bpm' },
        { key: 'Temperature', value: '105 F' },
        { key: 'Arm', value: '8 cm' },
        { key: 'Notes', value: '' },
      ],
    },
    {
      type: 'Blood Glucose',
      image: bloodGlucose,
      details: [
        { key: 'Blood Glucose', value: '- mg/dl' },
        { key: 'Type', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Rapid Test',
      image: rapidTest,
      details: [{ key: '(RAPID TEST REPORT)', value: '' }],
    },
    {
      type: 'Drug Test',
      image: drugTest,
      details: [{ key: '(DRUG TEST REPORT)', value: '' }],
    },
    {
      type: 'Lipid Panel',
      image: lipidPanel,
      details: [
        { key: 'Cholesterol', value: '- Mg / dl' },
        { key: 'HDL Cholesterol', value: '- Mg / dl' },
        { key: 'Trioglycerides', value: '- Mg / dl' },
        { key: 'Glucose', value: '- Mg / dl' },
        { key: 'LDL', value: '- Mg / dl' },
        { key: 'TCL LDL', value: '-' },
        { key: 'LDL HDL', value: '-' },
        { key: 'NON HDL', value: '-' },
        { key: 'TYPE', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Sickle Cell',
      image: sickleCell,
      details: [
        { key: 'Sickle Cell', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Thalassemia',
      image: thalassemia,
      details: [
        { key: 'Thalassemia', value: '-' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Lung Function',
      image: lungFunction,
      details: [
        {
          key: '',
          value: '',
          table: [
            { parameter: 'FVC(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'FEV1(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'FEV1%(L)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'PEF(L/s)', predicted: '-', actual: '-', percent: '-' },
            { parameter: 'Notes', predicted: '-', actual: '', percent: '' },
          ],
        },
      ],
    },
    {
      type: 'Eye Test',
      image: eyeTest,
      details: [
        { key: 'Left Eye Test', value: '- mtr' },
        { key: 'Right Eye Test', value: '- mtr' },
        { key: 'Notes', value: '-' },
      ],
    },
    {
      type: 'Haemoglobin',
      image: haemoglobin,
      details: [
        { key: 'Haemoglobin', value: '- gl/dl' },
        { key: 'Notes', value: '-' },
      ],
    },
  ],
};

const Encounters = () => {
  const [visibleDate, setVisibleDate] = useState(null);

  const toggleVisibility = (date) => {
    setVisibleDate(visibleDate === date ? null : date);
  };

  return (
    <Container className="grid-container mt-3">
      {Object.keys(encounterData).map((date) => (
        <div key={date}>
          <Button
            variant={visibleDate === date ? 'primary' : 'outline-primary'}
            onClick={() => toggleVisibility(date)}
          >
            {date}
          </Button>
          {visibleDate === date && (
            <div>
              {encounterData[date].map((encounter, index) => (
                <Row className="grid-row mt-3" key={index}>
                  <Col className="grid-column image-column">
                    <Image src={encounter.image} alt={encounter.type} />
                  </Col>
                  <Col className="grid-column title-column">
                    <span>{encounter.type}</span>
                  </Col>
                  <Col className="grid-column details-column">
                    {encounter.details.map((detail, detailIndex) => (
                      <div className="detail" key={detailIndex}>
                        <div className="detail-key">
                          <ul>
                            <li>{detail.key}</li>
                          </ul>
                        </div>
                        <div className="detail-value">{detail.value}</div>
                        {detail.table && (
                          <Table>
                            <thead>
                              <tr>
                                <th>Parameters</th>
                                <th>Predicted</th>
                                <th>Actual</th>
                                <th>%Predicted</th>
                              </tr>
                            </thead>
                            <tbody>
                              {detail.table.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  <td>{row.parameter}</td>
                                  <td>{row.predicted}</td>
                                  <td>{row.actual}</td>
                                  <td>{row.percent}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        )}
                      </div>
                    ))}
                  </Col>
                </Row>
              ))}
            </div>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Encounters;