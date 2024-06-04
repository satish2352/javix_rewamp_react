import { lazy, useContext, useEffect } from "react";

// import { ThemeContext } from "../context/ThemeContext";
// import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import BaseLayout from "../layout/BaseLayout";

// import Home from "../screens/dashboard/home/Home";
// import Adduser from '../screens/adduser/Adduser'
// import { AreaCards } from "../components";
// import LoginPage from "../screens/LoginPage";
// import ForgotPassword from "../screens/ForgotPassword";
import Footer from "../screens/dashboard/Footer";
// import General_survey from "../screens/general survey/General_survey";
// import Health_survey from "../screens/health survey/Health_survey";
// import Socieconomin_survey from "../screens/socieconomic survey/Socieconomin_survey";
// import Screening_screener from "../screens/daily and weely data/Screening_screener";
// import Screening_sevika from "../screens/daily and weely data/Screening_sevika";
// // import Patient_List_For_Lipid_Panel_Test from "../screens/daily and weely data/Patient_List_For_Lipid_Panel_Test";
// // import New_issue from "../screens/issue addressing/New_issue";
// import Update_issue from "../screens/issue addressing/Update_issue";
// import Active_users from "../screens/users/Active_users";
// import Change_request from "../screens/change request/Change_request";
// import Inactive_users from "../screens/users/Inactive_users";
// import Referred_patient from "../screens/Doctors_Section/Referred Petient/Referred_patient";
// import Petient_view from "../screens/Doctors_Section/Petient view/Petient_view";
// import Help_doctors from "../screens/Doctors_Section/Help section/Help_doctors";
// import Insights from "./screens/Doctors_Section/insights/Insights";
// import Directory from "../screens/dashboard/home/Directory";
// import Insights from "../screens/insights/Insights";
// import Insights2 from "../screens/insights/Insights2";
// import Blood_pressure_table from "../screens/insights/Blood Pressure chart 1/Blood_pressure_table";
// import Blood_Pressure_Amber_Cases from "../screens/insights/Blood Pressure chart 1/Blood_Pressure_Amber_Cases";
// import Blood_Pressure_Red_Cases from "../screens/insights/Blood Pressure chart 1/Blood_Pressure_Red_Cases";
// import SPO2_Green_Cases from "../screens/insights/spo2 chart/SPO2_Green_Cases";
// import SPO2_Amber_Cases from "../screens/insights/spo2 chart/SPO2_Amber_Cases";
// import SPO2_Red_Cases from "../screens/insights/spo2 chart/SPO2_Red_Cases";
// import Temperature_Green_Cases from "../screens/insights/Temperature/Temperature_Green_Cases";
// import Temperature_Amber_Cases from "../screens/insights/Temperature/Temperature_Amber_Cases";
// import Temperature_Red_Cases from "../screens/insights/Temperature/Temperature_Red_Cases";
// import Heart_Rate_Green_Cases from "../screens/insights/Heart Rate/Heart_Rate_Green_Cases";
// import Heart_Rate_Amber_Cases from "../screens/insights/Heart Rate/Heart_Rate_Amber_Cases";
// import Heart_Rate_Red_Cases from "../screens/insights/Heart Rate/Heart_Rate_Red_Cases";
// import BMI_Green_Cases from "../screens/insights/BMI Chart/BMI_Green_Cases";
// import BMI_Red_Cases from "../screens/insights/BMI Chart/BMI_Red_Cases";
// import BMI_Amber_Cases from "../screens/insights/BMI Chart/BMI_Amber_Cases";
// import Blood_Glucose_Green_Cases from "../screens/insights/Blood Glucose/Blood_Glucose_Green_Cases";
// import Blood_Glucose_Red_Cases from "../screens/insights/Blood Glucose/Blood_Glucose_Red_Cases";
// import Blood_Glucose_Amber_Cases from "../screens/insights/Blood Glucose/Blood_Glucose_Amber_Cases";
// import LDL_Lipid_Panel_Green_cases from "../screens/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_Green_cases";
// import LDL_Lipid_Panel_Red_cases from "../screens/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_Red_cases";
// import LDL_Lipid_Panel_amber_cases from "../screens/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_amber_cases";
// import HDL_Lipid_Panel_Green_Cases from "../screens/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Green_Cases";
// import HDL_Lipid_Panel_Amber_Cases from "../screens/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Amber_Cases";
// import HDL_Lipid_Panel_Red_Cases from "../screens/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Red_Cases";
// import Triglycerides_Lipid_Panel_green_cases from "../screens/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_green_cases";
// import Triglycerides_Lipid_Panel_red_cases from "../screens/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_red_cases";
// import Triglycerides_Lipid_Panel_amber_cases from "../screens/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_amber_cases";
// import Cholesterol_Lipid_Panel_Green_Cases from "../screens/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Green_Cases";
// import Cholesterol_Lipid_Panel_Red_Cases from "../screens/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Red_Cases";
// import Cholesterol_Lipid_Panel_amber_Cases from "../screens/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_amber_Cases";
// import Right_Eye_Tests_Amber_case from "../screens/insights/Right Eye Tests/Right_Eye_Tests_Amber_case";
// import Right_Eye_Tests_Green_case from "../screens/insights/Right Eye Tests/Right_Eye_Tests_Green_case";
// import Right_Eye_Tests_Red_case from "../screens/insights/Right Eye Tests/Right_Eye_Tests_Red_case";
// import Left_Eye_Tests_Green_Tests from "../screens/insights/Left Eye Tests/Left_Eye_Tests_Green_Tests";
// import Left_Eye_Tests_Red_Tests from "../screens/insights/Left Eye Tests/Left_Eye_Tests_Red_Tests";
// import Left_Eye_Tests_Amber_Tests from "../screens/insights/Left Eye Tests/Left_Eye_Tests_Amber_Tests";
// import Haemoglobin_green_case from "../screens/insights/Haemoglobin/Haemoglobin_green_case";
// import Haemoglobin_red_case from "../screens/insights/Haemoglobin/Haemoglobin_red_case";
// import Haemoglobin_amber_case from "../screens/insights/Haemoglobin/Haemoglobin_amber_case";
// import Home_component from "./screens/dashboard/home/Home_component";
// import AdminHome from '../src/components/home pages/AdminHome'
// import AdminHome from '../components/home pages/AdminHome'
// import DoctorHome from '../components/home pages/DoctorHome'
// import DoctorsCard_table from "../components/Home_page_card_data/DoctorsCard_table";
// import Doctors from "";
// import Ngo from "../screens/Approved Users/Ngo";
// import Screener from "../screens/Approved Users/Screener";
// import Sevika from "../screens/Approved Users/Sevika";
// import Pharmacy from "../screens/Approved Users/Pharmacy";
// import DoctorProfileDisplay from "../screens/DoctorsProfileDisplay/DoctorProfileDisplay";
// import DoctorProfileEdit from "../screens/DoctorsProfileDisplay/DoctorProfileEdit";
// import Encounter_List from "../screens/Doctors_Section/Referred Petient/Encounter List/Encounter_List";
// import Patient_Info from "../screens/Doctors_Section/Referred Petient/Encounter List/Patient_Info";
// import Citizen_profile from "../screens/Doctors_Section/Petient view/Citizen_profile";
// import Encounter_petient_list from "../screens/Doctors_Section/Petient view/Encounter_petient_list";
// import ScreenerProfileInfo from "../screens/Approved Users/ScreenerProfileInfo";
// import Firstpage from "../components/home pages/Firstpage";
import Loadable from "./Loadable";

//LOADEER
const Firstpage = Loadable(lazy(() => import('../components/home pages/Firstpage')));
const LoginPage = Loadable(lazy(() => import('../screens/LoginPage')));
const ForgotPassword = Loadable(lazy(() => import('../screens/ForgotPassword')));

const BaseLayout = Loadable(lazy(() => import('../layout/BaseLayout')));

const AdminHome = Loadable(lazy(() => import('../components/home pages/AdminHome')));
const DoctorsCard_table = Loadable(lazy(() => import('../components/Home_page_card_data/DoctorsCard_table')));
const DoctorProfileDisplay = Loadable(lazy(() => import('../screens/DoctorsProfileDisplay/DoctorProfileDisplay')));
const DoctorProfileEdit = Loadable(lazy(() => import('../screens/DoctorsProfileDisplay/DoctorProfileEdit')));
const Directory = Loadable(lazy(() => import('../screens/dashboard/home/Directory')));
const Adduser = Loadable(lazy(() => import('../screens/adduser/Adduser')));
const Doctors = Loadable(lazy(() => import('../screens/Approved Users/Doctors')));
const Ngo= Loadable(lazy(() => import('../screens/Approved Users/Ngo')));
const Screener= Loadable(lazy(() => import('../screens/Approved Users/Screener')));
const ScreenerProfileInfo= Loadable(lazy(() => import('../screens/Approved Users/ScreenerProfileInfo')));
const Sevika= Loadable(lazy(() => import('../screens/Approved Users/Sevika')));
const Pharmacy = Loadable(lazy(() => import('../screens/Approved Users/Pharmacy')));
const Active_users = Loadable(lazy(() => import('../screens/users/Active_users')));
const Inactive_users = Loadable(lazy(() => import('../screens/users/Inactive_users')));
const General_survey = Loadable(lazy(() => import('../screens/general survey/General_survey')));
const Health_survey = Loadable(lazy(() => import('../screens/health survey/Health_survey')));
const Insights2 = Loadable(lazy(() => import('../screens/insights/Insights2')));

const Blood_pressure_table = Loadable(lazy(() => import('../screens/insights/Blood Pressure chart 1/Blood_pressure_table')));
const Blood_Pressure_Amber_Cases = Loadable(lazy(() => import('../screens/insights/Blood Pressure chart 1/Blood_Pressure_Amber_Cases')));
const Blood_Pressure_Red_Cases = Loadable(lazy(() => import('../screens/insights/Blood Pressure chart 1/Blood_Pressure_Red_Cases')));


const SPO2_Green_Cases = Loadable(lazy(() => import('../screens/insights/spo2 chart/SPO2_Green_Cases')));
const SPO2_Amber_Cases = Loadable(lazy(() => import('../screens/insights/spo2 chart/SPO2_Amber_Cases')));
const SPO2_Red_Cases = Loadable(lazy(() => import('../screens/insights/spo2 chart/SPO2_Red_Cases')));


const Temperature_Green_Cases = Loadable(lazy(() => import('../screens/insights/Temperature/Temperature_Green_Cases')));
const Temperature_Amber_Cases = Loadable(lazy(() => import('../screens/insights/Temperature/Temperature_Amber_Cases')));
const Temperature_Red_Cases = Loadable(lazy(() => import('../screens/insights/Temperature/Temperature_Red_Cases')));


const Heart_Rate_Green_Cases = Loadable(lazy(() => import('../screens/insights/Heart Rate/Heart_Rate_Green_Cases')));
const Heart_Rate_Amber_Cases = Loadable(lazy(() => import('../screens/insights/Heart Rate/Heart_Rate_Amber_Cases')));
const Heart_Rate_Red_Cases = Loadable(lazy(() => import('../screens/insights/Heart Rate/Heart_Rate_Red_Cases')));


const BMI_Green_Cases = Loadable(lazy(() => import('../screens/insights/BMI Chart/BMI_Green_Cases')));
const BMI_Red_Cases = Loadable(lazy(() => import('../screens/insights/BMI Chart/BMI_Red_Cases')));
const BMI_Amber_Cases = Loadable(lazy(() => import('../screens/insights/BMI Chart/BMI_Amber_Cases')));


const Blood_Glucose_Green_Cases = Loadable(lazy(() => import('../screens/insights/Blood Glucose/Blood_Glucose_Green_Cases')));
const Blood_Glucose_Red_Cases = Loadable(lazy(() => import('../screens/insights/Blood Glucose/Blood_Glucose_Red_Cases')));
const Blood_Glucose_Amber_Cases = Loadable(lazy(() => import('../screens/insights/Blood Glucose/Blood_Glucose_Amber_Cases')));


const LDL_Lipid_Panel_Green_cases = Loadable(lazy(() => import('../screens/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_Green_cases')));
const LDL_Lipid_Panel_Red_cases = Loadable(lazy(() => import('../screens/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_Red_cases')));
const LDL_Lipid_Panel_amber_cases = Loadable(lazy(() => import('../screens/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_amber_cases')));


const HDL_Lipid_Panel_Green_Cases = Loadable(lazy(() => import('../screens/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Green_Cases')));
const HDL_Lipid_Panel_Amber_Cases = Loadable(lazy(() => import('../screens/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Amber_Cases')));
const HDL_Lipid_Panel_Red_Cases = Loadable(lazy(() => import('../screens/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Red_Cases')));


const Triglycerides_Lipid_Panel_green_cases = Loadable(lazy(() => import('../screens/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_green_cases')));
const Triglycerides_Lipid_Panel_red_cases = Loadable(lazy(() => import('../screens/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_red_cases')));
const Triglycerides_Lipid_Panel_amber_cases = Loadable(lazy(() => import('../screens/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_amber_cases')));


const Cholesterol_Lipid_Panel_Green_Cases = Loadable(lazy(() => import('../screens/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Green_Cases')));
const Cholesterol_Lipid_Panel_Red_Cases = Loadable(lazy(() => import('../screens/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Red_Cases')));
const Cholesterol_Lipid_Panel_amber_Cases = Loadable(lazy(() => import('../screens/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_amber_Cases')));


const Right_Eye_Tests_Amber_case = Loadable(lazy(() => import('../screens/insights/Right Eye Tests/Right_Eye_Tests_Amber_case')));
const Right_Eye_Tests_Green_case = Loadable(lazy(() => import('../screens/insights/Right Eye Tests/Right_Eye_Tests_Green_case')));
const Right_Eye_Tests_Red_case = Loadable(lazy(() => import('../screens/insights/Right Eye Tests/Right_Eye_Tests_Red_case')));

const Left_Eye_Tests_Green_Tests = Loadable(lazy(() => import('../screens/insights/Left Eye Tests/Left_Eye_Tests_Green_Tests')));
const Left_Eye_Tests_Red_Tests = Loadable(lazy(() => import('../screens/insights/Left Eye Tests/Left_Eye_Tests_Red_Tests')));
const Left_Eye_Tests_Amber_Tests = Loadable(lazy(() => import('../screens/insights/Left Eye Tests/Left_Eye_Tests_Amber_Tests')));


const Haemoglobin_green_case = Loadable(lazy(() => import('../screens/insights/Haemoglobin/Haemoglobin_green_case')));
const Haemoglobin_red_case = Loadable(lazy(() => import('../screens/insights/Haemoglobin/Haemoglobin_red_case')));
const Haemoglobin_amber_case = Loadable(lazy(() => import('../screens/insights/Haemoglobin/Haemoglobin_amber_case')));

const Socieconomin_survey = Loadable(lazy(() => import('../screens/socieconomic survey/Socieconomin_survey')));
const Screening_screener = Loadable(lazy(() => import('../screens/daily and weely data/Screening_screener')));
const Screening_sevika = Loadable(lazy(() => import('../screens/daily and weely data/Screening_sevika')));
const Patient_List_For_Lipid_Panel_Test = Loadable(lazy(() => import('../screens/daily and weely data/Patient_List_For_Lipid_Panel_Test')));
const New_issue = Loadable(lazy(() => import('../screens/issue addressing/New_issue')));
const Update_issue = Loadable(lazy(() => import('../screens/issue addressing/Update_issue')));
const Change_request = Loadable(lazy(() => import('../screens/change request/Change_request')));

//DOCTORS SECTION
const DoctorHome = Loadable(lazy(() => import('../components/home pages/DoctorHome')));
const Referred_patient = Loadable(lazy(() => import('../screens/Doctors_Section/Referred Petient/Referred_patient')));
const Encounter_List = Loadable(lazy(() => import('../screens/Doctors_Section/Referred Petient/Encounter List/Encounter_List')));
const Patient_Info = Loadable(lazy(() => import('../screens/Doctors_Section/Referred Petient/Encounter List/Patient_Info')));
const Petient_view = Loadable(lazy(() => import('../screens/Doctors_Section/Petient view/Petient_view')));
const Citizen_profile = Loadable(lazy(() => import('../screens/Doctors_Section/Petient view/Citizen_profile')));
const Encounter_petient_list = Loadable(lazy(() => import('../screens/Doctors_Section/Petient view/Encounter_petient_list')));
const Help_doctors = Loadable(lazy(() => import('../screens/Doctors_Section/Help section/Help_doctors')));



function RouterComponent() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  // // adding dark-mode class if the dark mode is set on to the body tag
  // useEffect(() => {
  //   if (theme === DARK_THEME) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  // }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          {/* Login pages */}

          <Route path='/' element={<Firstpage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          {/* Base layout start */}
          <Route element={<BaseLayout />}>
            {/* Admin section start */}
            <Route path="/dashboard" element={<AdminHome />} />

            <Route path='/home/doctots_list' element={<DoctorsCard_table />} />
            <Route path='/home/doctor_list/doctorprofiledisplay' element={<DoctorProfileDisplay />} />
            <Route path='/home/doctor_list/doctorprofiledisplay/doctorprofile_edit' element={<DoctorProfileEdit />} />

            <Route path="/home/directory" element={<Directory />} />
            <Route path='/adduser' element={<Adduser />} />


            {/* Approved users */}
            <Route path='/approvedusers/doctors' element={<Doctors />} />
            <Route path='/approvedusers/ngo' element={<Ngo />} />
            <Route path='/approvedusers/screener' element={<Screener />} />
            <Route path='/approvedusers/screener/screener-profile' element={<ScreenerProfileInfo />} />
            <Route path='/approvedusers/sevika' element={<Sevika />} />
            <Route path='/approvedusers/pharmacy' element={<Pharmacy />} />



            <Route path='/approveduser/activeuser' element={<Active_users />} />
            <Route path='/approveduser/Inactiveuser' element={<Inactive_users />} />
            <Route path='/generalsurvey' element={<General_survey />} />
            <Route path='/healthsurvey' element={<Health_survey />} />
            <Route path='/admin/insights' element={<Insights2 />} />

            <Route path='/admin/insights/bloodpresure_table' element={<Blood_pressure_table />} />
            <Route path='/admin/insights/bloodpresure_table/Blood_Pressure_Amber_Cases' element={<Blood_Pressure_Amber_Cases />} />
            <Route path='/admin/insights/bloodpresure_table/Blood_Pressure_Red_Cases' element={<Blood_Pressure_Red_Cases />} />

            <Route path='/admin/insights/SPO2/SPO2_Green_Cases' element={<SPO2_Green_Cases />} />
            <Route path='/admin/insights/SPO2/SPO2_Amber_Cases' element={<SPO2_Amber_Cases />} />
            <Route path='/admin/insights/SPO2/SPO2_Red_Cases' element={<SPO2_Red_Cases />} />

            <Route path='/admin/insights/temperature/Temperature_Green_Cases' element={<Temperature_Green_Cases />} />
            <Route path='/admin/insights/temperature/Temperature_Amber_Cases' element={<Temperature_Amber_Cases />} />
            <Route path='/admin/insights/temperature/Temperature_Red_Cases' element={<Temperature_Red_Cases />} />

            <Route path='/admin/insights/Heart_rate/Heart_Rate_Green_Cases' element={<Heart_Rate_Green_Cases />} />
            <Route path='/admin/insights/Heart_rate/Heart_Rate_Amber_Cases' element={<Heart_Rate_Amber_Cases />} />
            <Route path='/admin/insights/Heart_rate/Heart_Rate_Red_Cases' element={<Heart_Rate_Red_Cases />} />

            <Route path='/admin/insights/BMI/BMI_Green_Cases' element={<BMI_Green_Cases />} />
            <Route path='/admin/insights/BMI/BMI_Red_Cases' element={<BMI_Red_Cases />} />
            <Route path='/admin/insights/BMI/BMI_Amber_Cases' element={<BMI_Amber_Cases />} />

            <Route path='/admin/insights/blood_glucose/Blood_Glucose_Green_Cases' element={<Blood_Glucose_Green_Cases />} />
            <Route path='/admin/insights/blood_glucose/Blood_Glucose_Red_Cases' element={<Blood_Glucose_Red_Cases />} />
            <Route path='/admin/insights/blood_glucose/Blood_Glucose_Amber_Cases' element={<Blood_Glucose_Amber_Cases />} />

            <Route path='/admin/insights/LDL-Lipid panel/LDL_Lipid_Panel_Green_cases' element={<LDL_Lipid_Panel_Green_cases />} />
            <Route path='/admin/insights/LDL-Lipid panel/LDL_Lipid_Panel_Red_cases' element={<LDL_Lipid_Panel_Red_cases />} />
            <Route path='/admin/insights/LDL-Lipid panel/LDL_Lipid_Panel_amber_cases' element={<LDL_Lipid_Panel_amber_cases />} />


            <Route path='/admin/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Green_Cases' element={<HDL_Lipid_Panel_Green_Cases />} />
            <Route path='/admin/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Amber_Cases' element={<HDL_Lipid_Panel_Amber_Cases />} />
            <Route path='/admin/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Red_Cases' element={<HDL_Lipid_Panel_Red_Cases />} />

            <Route path='/admin/insights/Triglycerides_Lipid_Panel/Triglycerides_Lipid_Panel_green_cases' element={<Triglycerides_Lipid_Panel_green_cases />} />
            <Route path='/admin/insights/Triglycerides_Lipid_Panel/Triglycerides_Lipid_Panel_red_cases' element={<Triglycerides_Lipid_Panel_red_cases />} />
            <Route path='/admin/insights/Triglycerides_Lipid_Panel/Triglycerides_Lipid_Panel_amber_cases' element={<Triglycerides_Lipid_Panel_amber_cases />} />

            <Route path='/admin/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Green_Cases' element={<Cholesterol_Lipid_Panel_Green_Cases />} />
            <Route path='/admin/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Red_Cases' element={<Cholesterol_Lipid_Panel_Red_Cases />} />
            <Route path='/admin/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_amber_Cases' element={<Cholesterol_Lipid_Panel_amber_Cases />} />

            <Route path='/admin/insights/Right_Eye_Tests/Right_Eye_Tests_Amber_case' element={<Right_Eye_Tests_Amber_case />} />
            <Route path='/admin/insights/Right_Eye_Tests/Right_Eye_Tests_Green_case' element={<Right_Eye_Tests_Green_case />} />
            <Route path='/admin/insights/Right_Eye_Tests/Right_Eye_Tests_Red_case' element={<Right_Eye_Tests_Red_case />} />

            <Route path='/admin/insights/Left_Eye_Tests/Left_Eye_Tests_Green_Tests' element={<Left_Eye_Tests_Green_Tests />} />
            <Route path='/admin/insights/Left_Eye_Tests/Left_Eye_Tests_Red_Tests' element={<Left_Eye_Tests_Red_Tests />} />
            <Route path='/admin/insights/Left_Eye_Tests/Left_Eye_Tests_Amber_Tests' element={<Left_Eye_Tests_Amber_Tests />} />

            <Route path='/admin/insights/Haemoglobin/Haemoglobin_green_case' element={<Haemoglobin_green_case />} />
            <Route path='/admin/insights/Haemoglobin/Haemoglobin_red_case' element={<Haemoglobin_red_case />} />
            <Route path='/admin/insights/Haemoglobin/Haemoglobin_amber_case' element={<Haemoglobin_amber_case />} />



            {/* <Route path='/admin/insights' element={<Insights2 />} /> */}
            <Route path='/socieconomic_survey' element={<Socieconomin_survey />} />
            <Route path='/dailyandweeklydata/screening_screener' element={<Screening_screener />} />
            <Route path='/dailyandweeklydata/screening_sevika' element={<Screening_sevika />} />
            <Route path='/dailyandweeklydata/patientlist' element={<Patient_List_For_Lipid_Panel_Test />} />
            <Route path='/issueaddressing/newissue' element={<New_issue />} />
            <Route path='/issueaddressing/updateissue' element={<Update_issue />} />
            <Route path='/changerequest' element={<Change_request />} />
            {/* Admin section End */}

            {/* Doctors Section start */}
            <Route path="/DoctorHome" element={<DoctorHome />} />
            <Route path='/referred_patient' element={<Referred_patient />} />

            <Route path='/referred_patient/Encounter_List' element={<Encounter_List />} />
            <Route path='/referred_patient/Encounter_List/Patient_Info' element={<Patient_Info />} />


            <Route path='/petient_view' element={<Petient_view />} />
            <Route path='/referred_patient/petient_view/citizen_profile' element={<Citizen_profile />} />
            <Route path='/referred_patient/petient_view/Encounter_petient_list' element={<Encounter_petient_list />} />


            <Route path='/help_doctors' element={<Help_doctors />} />
            {/* <Route path='/insight_doctors' element={<Insights />} /> */}
          </Route>
          {/* Base layout End */}

        </Routes>
        {
          window.location.href === "/" &&
          <Footer />
        }
      </Router>
    </>
  );
}

export default RouterComponent;
