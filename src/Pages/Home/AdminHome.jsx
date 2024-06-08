import RectangleCards from '../../components/home pages/home page components/RectangleCards';
import PieAndBar from '../../components/home pages/home page components/PieAndBar';
import SquareCards from '../../components/home pages/home page components/SqaureCards';
import BarAndPie from '../../components/home pages/home page components/BarAndPie';
import './AdminHome.css'
import { Card } from 'react-bootstrap';
import Home from '../../screens/dashboard/home/Home'
// import xyz from '../../screens/Doctors_Section/Petient view/Petient_view'

const squareCardsData = [
    { title: 'Doctors', text: '0', url: '/home/doctots_list' },
    { title: 'NGO', text: '0', url: '/approvedusers/ngo' },
    { title: 'Screeners', text: '0', url: '/approvedusers/screener' },
    { title: 'Sevikas', text: '0', url: '/approvedusers/sevika' },
    { title: 'Citizen ', text: '0', url: '/citizen-list' },
    { title: 'Screening', text: '0', url: '/scrennings' },
    { title: 'Pharmacies', text: '0', url: '/approvedusers/pharmacy' },
    { title: 'Prescribed', text: '0', url: '/prescrided' },
    { title: 'Non-Prescribed', text: '0', url: '/non-prescrided' },
    { title: 'Advanced Screening Pending Cases', text: '0', url: '/advanced-pending-cases' },
    { title: 'Advanced Screening Total Cases', text: '0', url: '/advanced-total-cases' },
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
                <div className="welcome-message" >
                    <h2 className='text-capitalize' >Welcome, {role} !</h2>
                </div>
                <SquareCards cardsData={squareCardsData}/>
                <BarAndPie data={barAndPieData} colors={barAndPieColors} />
                {/* <PieAndBar data={pieAndBarData} colors={pieAndBarColors} /> */}
            </div>
        </>
    );
};

export default AdminHome;