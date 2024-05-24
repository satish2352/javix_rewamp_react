import RectangleCards from './home page components/RectangleCards';
import PieAndBar from './home page components/PieAndBar';
import SquareCards from './home page components/SqaureCards';
import BarAndPie from './home page components/BarAndPie';

const squareCardsData = [
    { title: 'Doctors', text: '0' },
    { title: 'NGOs', text: '0' },
    { title: 'Screeners', text: '0' },
    { title: 'Sevikas', text: '0' },
    { title: 'Citizens Screened', text: '0' },
    { title: 'Screening', text: '0' },
    { title: 'Pharmacies', text: '0' },
    { title: 'Prescribed', text: '0' },
    { title: 'Non-Prescribed', text: '0' },
    { title: 'Advanced Screening Pending Cases', text: '0' },
    { title: 'Advanced Screening Total Cases', text: '0' },
];

const rectangleCardsData = [
    { title: 'All Prescribed and Referred Cases', text: '' },
    { title: 'Prescribed Cases', text: '41' },
    { title: 'Pending Cases', text: '' },
];

const barAndPieData = [
    { name: 'Green', value: 400 },
    { name: 'Amber', value: 300 },
    { name: 'Red', value: 200 },
];

const pieAndBarData = [
    { name: 'Doctors', value: 400 },
    { name: 'Screener', value: 300 },
    { name: 'NGO', value: 200 },
    { name: 'Sevika', value: 70 },
    { name: 'Screening', value: 150 },
    { name: 'Pharmacy', value: 250 },
];

const barAndPieColors = ['#28C76F', '#FFBF00', '#EA5455'];
const pieAndBarColors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#008FFB']

const DoctorHome = () => {
    return (
        <div className="home-container">
            <div className="welcome-message">
                <h2>Welcome, Doctor!</h2>
            </div>
            <RectangleCards cardsData={rectangleCardsData} />
            <BarAndPie data={barAndPieData} colors={barAndPieColors} />
            <SquareCards cardsData={squareCardsData} />
            <PieAndBar data={pieAndBarData} colors={pieAndBarColors} />
        </div>
    );
};

export default DoctorHome;