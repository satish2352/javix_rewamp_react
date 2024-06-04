import './Encounters.css';
import vitalSigns from '../../../../assets/images/Encounters/vital signs.png';
import bloodGlucose from '../../../../assets/images/Encounters/blood glucose.png';
import rapidTest from '../../../../assets/images/Encounters/rapid test.png';
import drugTest from '../../../../assets/images/Encounters/drug test.png';
import lipidPanel from '../../../../assets/images/Encounters/lipid panel.png';
import sickleCell from '../../../../assets/images/Encounters/sickle cell.png';
import thalassemia from '../../../../assets/images/Encounters/thalassemia.png';
import lungFunction from '../../../../assets/images/Encounters/lung function.png';
import eyeTest from '../../../../assets/images/Encounters/eye test.png';
import haemoglobin from '../../../../assets/images/Encounters/haemoglobin.png';

const data = [
  {
    imgSrc: vitalSigns,
    title: 'Vital Signs',
    details: {
      Height: '160.02 Inches',
      Weight: '135 Kg',
      BMI: '52.72',
      'Blood Pressure': '65/65 mmHg',
      'SPO2(%)': '32 spo2%',
      'Heart Rate': '45 bpm',
      Temperature: '105 F',
      Arm: '8 cm',
      Notes: ''
    }
  },
  {
    imgSrc: bloodGlucose,
    title: 'Blood Glucose',
    details: {
      'Blood Glucose': '- mg/dl',
      Type: '-',
      Notes: '-'
    }
  },
  {
    imgSrc: rapidTest,
    title: 'Rapid Test',
    details: {
      '(RAPID TEST REPORT)': ''
    }
  },
  {
    imgSrc: drugTest,
    title: 'Drug Test',
    details: {
      '(DRUG TEST REPORT)': ''
    }
  },
  {
    imgSrc: lipidPanel,
    title: 'Lipid Panel',
    details: {
      'Cholesterol': '- Mg / dl',
      'HDL Cholesterol': '- Mg / dl',
      'Trioglycerides': '- Mg / dl',
      'Glucose': '- Mg / dl',
      'LDL': '- Mg / dl',
      'TCL LDL': '-',
      'LDL HDL': '-',
      'NON HDL': '-',
      'TYPE': '-',
      'Notes': '-',
    }
  },
  {
    imgSrc: sickleCell,
    title: 'Sickle Cell',
    details: {
      'Sickle Cell': '-',
      'Notes': '-',
    }
  },
  {
    imgSrc: thalassemia,
    title: 'Thalassemia',
    details: {
      'Thalassemia': '-',
      'Notes': '-',
    }
  },
];

const Encounters = () => {
  return (
    <div className="grid-container">
      {data.map((item, index) => (
        <div key={index} className="grid-row">
          <div className="grid-column image-column">
            <img src={item.imgSrc} alt={`Image ${index + 1}`} />
          </div>
          <div className="grid-column title-column">
            <span>{item.title}</span>
          </div>
          <div className="grid-column details-column">
            {Object.keys(item.details).map((key, idx) => (
              <div key={idx} className="detail">
                <div className="detail-key">{key}</div>
                <div className="detail-value">{item.details[key]}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Encounters;