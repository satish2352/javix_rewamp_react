import RectangleCards from './home page components/RectangleCards';
import PieAndBar from './home page components/PieAndBar';
import SquareCards from './home page components/SqaureCards';
import BarAndPie from './home page components/BarAndPie';
import './AdminHome.css'
import { Card } from 'react-bootstrap';
import Home from '../../screens/dashboard/home/Home'

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
    let role = localStorage.getItem("userRole")

    try {
        if (role === "system_admin") {
            role = role.split("_")
            role = role[0] + " " + role[1]
            console.log("role", role);
        }
    } catch (error) {
        console.log("error", error);
    }
    return (
        <>
            <Home />
            <div className="home-container">
                <div className="welcome-message">
                    <h2 className='text-capitalize'>Welcome, {role} !</h2>
                </div>
                <SquareCards cardsData={squareCardsData} />
                <BarAndPie data={barAndPieData} colors={barAndPieColors} />
                {/* <PieAndBar data={pieAndBarData} colors={pieAndBarColors} /> */}


            </div>
        </>
    );
};

export default AdminHome;