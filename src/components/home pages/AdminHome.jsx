import RectangleCards from './home page components/RectangleCards';
import PieAndBar from './home page components/PieAndBar';
import SquareCards from './home page components/SqaureCards';
import BarAndPie from './home page components/BarAndPie';
import './AdminHome.css'
import { Card } from 'react-bootstrap';

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

const barAndPieData = [
    { name: 'Green', value: 400 },
    { name: 'Amber', value: 300 },
    { name: 'Red', value: 200 },
];

const barAndPieColors = ['#28C76F', '#FFBF00', '#EA5455'];

const AdminHome = () => {
    return (
        <div className="home-container">
            <div className="welcome-message">
                <h2>Welcome, System Admin!</h2>
            </div>
            <SquareCards cardsData={squareCardsData} />
            <BarAndPie data={barAndPieData} colors={barAndPieColors} />
            {/* <PieAndBar data={pieAndBarData} colors={pieAndBarColors} /> */}


        </div>
    );
};

export default AdminHome;