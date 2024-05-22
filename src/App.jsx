import { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Home from "./screens/dashboard/home/Home";
import Adduser from './screens/adduser/Adduser'
import { AreaCards } from "./components";
import LoginPage from "./screens/LoginPage";
import ForgotPassword from "./screens/ForgotPassword";
import Footer from "./screens/dashboard/Footer";
import General_survey from "./screens/general survey/General_survey";
import Health_survey from "./screens/health survey/Health_survey";
import Socieconomin_survey from "./screens/socieconomic survey/Socieconomin_survey";
import Screening_screener from "./screens/daily and weely data/Screening_screener";
import Screening_sevika from "./screens/daily and weely data/Screening_sevika";
import Patient_List_For_Lipid_Panel_Test from "./screens/daily and weely data/Patient_List_For_Lipid_Panel_Test";
import New_issue from "./screens/issue addressing/New_issue";
import Update_issue from "./screens/issue addressing/Update_issue";
import Active_users from "./screens/users/Active_users";
import Change_request from "./screens/change request/Change_request";
import Inactive_users from "./screens/users/Inactive_users";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/adduser' element={<Adduser />} />
            <Route path='/approveduser/activeuser' element={<Active_users />} />
            <Route path='/approveduser/Inactiveuser' element={<Inactive_users />} />
            <Route path='/generalsurvey' element={<General_survey />} />
            <Route path='/healthsurvey' element={<Health_survey />} />
            <Route path='/socieconomic_survey' element={<Socieconomin_survey />} />
            <Route path='/dailyandweeklydata/screening_screener' element={<Screening_screener />} />
            <Route path='/dailyandweeklydata/screening_sevika' element={<Screening_sevika />} />
            <Route path='/dailyandweeklydata/patientlist' element={<Patient_List_For_Lipid_Panel_Test />} />
            <Route path='/issueaddressing/newissue' element={<New_issue />} />
            <Route path='/issueaddressing/updateissue' element={<Update_issue />} />
            <Route path='/changerequest' element={<Change_request />} />


            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Route>
          
        </Routes>
        <Footer/>
        

        {/* <button
        
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button> */}
      </Router>
    </>
  );
}

export default App;
