import { lazy, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "../screens/dashboard/Footer";
import Loadable from "./Loadable";


// import ChangePasswordDoctor from "../screens/DoctorsProfileDisplay/ChangePasswordDoctor";
// import Citizen_update from "";

// import Ngo_Profile from "../components/home pages/home page components/ngo profile/Ngo_Profile";

// import AddUser from "../screens/adduser/Adduser";
//LOADEER
const Firstpage = Loadable(lazy(() => import('../AuthPages/Firstpage')));
const LoginPage = Loadable(lazy(() => import('../AuthPages/LoginPage')));
const ForgotPassword = Loadable(lazy(() => import('../AuthPages/ForgotPassword')));

const BaseLayout = Loadable(lazy(() => import('../layout/BaseLayout')));

const Home = Loadable(lazy(() => import('../Pages/Home/Home')));
const DoctorsCard_table = Loadable(lazy(() => import('../components/Home_page_card_data/DoctorsCard_table')));
const DoctorProfileDisplay = Loadable(lazy(() => import('../screens/DoctorsProfileDisplay/DoctorProfileDisplay')));
const DoctorProfileEdit = Loadable(lazy(() => import('../screens/DoctorsProfileDisplay/DoctorProfileEdit')));
const Ngo_Profile = Loadable(lazy(()=>import('../components/home pages/home page components/ngo profile/Ngo_Profile')))
const Directory = Loadable(lazy(() => import('../screens/dashboard/home/Directory')));
const Scrennering = Loadable(lazy(() => import('../components/home pages/home page components/scrennings_home/Scrennering')));
const Add_Citizen = Loadable(lazy(() => import('../components/home pages/home page components/citizen profile/Add_Citizen')));
const Citizen_form = Loadable(lazy(() => import('../components/home pages/home page components/citizen profile/Citizen_form')));
const AddUser = Loadable(lazy(() => import('../Pages/adduser/Adduser')));
const Citizen_update = Loadable(lazy(() => import('../components/home pages/home page components/citizen profile/Citizen_update')));
const Doctors = Loadable(lazy(() => import('../Pages/Approved Users/Doctors')));
const Ngo = Loadable(lazy(() => import('../Pages/Approved Users/Ngo')));
const Screener = Loadable(lazy(() => import('../Pages/Approved Users/Screener')));
const ScreenerProfileInfo = Loadable(lazy(() => import('../Pages/Approved Users/ScreenerProfileInfo')));
const Sevika = Loadable(lazy(() => import('../Pages/Approved Users/Sevika')));
const Pharmacy = Loadable(lazy(() => import('../Pages/Approved Users/Pharmacy')));
const Active_users = Loadable(lazy(() => import('../Pages/users/Active_users')));
const Inactive_users = Loadable(lazy(() => import('../Pages/users/Inactive_users')));
const General_survey = Loadable(lazy(() => import('../Pages/general survey/General_survey')));
const Health_survey = Loadable(lazy(() => import('../Pages/health survey/Health_survey')));
const Insights2 = Loadable(lazy(() => import('../Pages/insights/Insights2')));

const Blood_pressure_table = Loadable(lazy(() => import('../Pages/insights/Blood Pressure chart 1/Blood_pressure_table')));
const Blood_Pressure_Amber_Cases = Loadable(lazy(() => import('../Pages/insights/Blood Pressure chart 1/Blood_Pressure_Amber_Cases')));
const Blood_Pressure_Red_Cases = Loadable(lazy(() => import('../Pages/insights/Blood Pressure chart 1/Blood_Pressure_Red_Cases')));


const SPO2_Green_Cases = Loadable(lazy(() => import('../Pages/insights/spo2 chart/SPO2_Green_Cases')));
const SPO2_Amber_Cases = Loadable(lazy(() => import('../Pages/insights/spo2 chart/SPO2_Amber_Cases')));
const SPO2_Red_Cases = Loadable(lazy(() => import('../Pages/insights/spo2 chart/SPO2_Red_Cases')));


const Temperature_Green_Cases = Loadable(lazy(() => import('../Pages/insights/Temperature/Temperature_Green_Cases')));
const Temperature_Amber_Cases = Loadable(lazy(() => import('../Pages/insights/Temperature/Temperature_Amber_Cases')));
const Temperature_Red_Cases = Loadable(lazy(() => import('../Pages/insights/Temperature/Temperature_Red_Cases')));


const Heart_Rate_Green_Cases = Loadable(lazy(() => import('../Pages/insights/Heart Rate/Heart_Rate_Green_Cases')));
const Heart_Rate_Amber_Cases = Loadable(lazy(() => import('../Pages/insights/Heart Rate/Heart_Rate_Amber_Cases')));
const Heart_Rate_Red_Cases = Loadable(lazy(() => import('../Pages/insights/Heart Rate/Heart_Rate_Red_Cases')));


const BMI_Green_Cases = Loadable(lazy(() => import('../Pages/insights/BMI Chart/BMI_Green_Cases')));
const BMI_Red_Cases = Loadable(lazy(() => import('../Pages/insights/BMI Chart/BMI_Red_Cases')));
const BMI_Amber_Cases = Loadable(lazy(() => import('../Pages/insights/BMI Chart/BMI_Amber_Cases')));


const Blood_Glucose_Green_Cases = Loadable(lazy(() => import('../Pages/insights/Blood Glucose/Blood_Glucose_Green_Cases')));
const Blood_Glucose_Red_Cases = Loadable(lazy(() => import('../Pages/insights/Blood Glucose/Blood_Glucose_Red_Cases')));
const Blood_Glucose_Amber_Cases = Loadable(lazy(() => import('../Pages/insights/Blood Glucose/Blood_Glucose_Amber_Cases')));


const LDL_Lipid_Panel_Green_cases = Loadable(lazy(() => import('../Pages/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_Green_cases')));
const LDL_Lipid_Panel_Red_cases = Loadable(lazy(() => import('../Pages/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_Red_cases')));
const LDL_Lipid_Panel_amber_cases = Loadable(lazy(() => import('../Pages/insights/LDL-Lipid Panel Chart/LDL_Lipid_Panel_amber_cases')));


const HDL_Lipid_Panel_Green_Cases = Loadable(lazy(() => import('../Pages/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Green_Cases')));
const HDL_Lipid_Panel_Amber_Cases = Loadable(lazy(() => import('../Pages/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Amber_Cases')));
const HDL_Lipid_Panel_Red_Cases = Loadable(lazy(() => import('../Pages/insights/HDL-Lipid Panel/HDL_Lipid_Panel_Red_Cases')));


const Triglycerides_Lipid_Panel_green_cases = Loadable(lazy(() => import('../Pages/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_green_cases')));
const Triglycerides_Lipid_Panel_red_cases = Loadable(lazy(() => import('../Pages/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_red_cases')));
const Triglycerides_Lipid_Panel_amber_cases = Loadable(lazy(() => import('../Pages/insights/Triglycerides-Lipid Panel/Triglycerides_Lipid_Panel_amber_cases')));


const Cholesterol_Lipid_Panel_Green_Cases = Loadable(lazy(() => import('../Pages/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Green_Cases')));
const Cholesterol_Lipid_Panel_Red_Cases = Loadable(lazy(() => import('../Pages/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_Red_Cases')));
const Cholesterol_Lipid_Panel_amber_Cases = Loadable(lazy(() => import('../Pages/insights/Cholesterol-Lipid Panel/Cholesterol_Lipid_Panel_amber_Cases')));


const Right_Eye_Tests_Amber_case = Loadable(lazy(() => import('../Pages/insights/Right Eye Tests/Right_Eye_Tests_Amber_case')));
const Right_Eye_Tests_Green_case = Loadable(lazy(() => import('../Pages/insights/Right Eye Tests/Right_Eye_Tests_Green_case')));
const Right_Eye_Tests_Red_case = Loadable(lazy(() => import('../Pages/insights/Right Eye Tests/Right_Eye_Tests_Red_case')));

const Left_Eye_Tests_Green_Tests = Loadable(lazy(() => import('../Pages/insights/Left Eye Tests/Left_Eye_Tests_Green_Tests')));
const Left_Eye_Tests_Red_Tests = Loadable(lazy(() => import('../Pages/insights/Left Eye Tests/Left_Eye_Tests_Red_Tests')));
const Left_Eye_Tests_Amber_Tests = Loadable(lazy(() => import('../Pages/insights/Left Eye Tests/Left_Eye_Tests_Amber_Tests')));


const Haemoglobin_green_case = Loadable(lazy(() => import('../Pages/insights/Haemoglobin/Haemoglobin_green_case')));
const Haemoglobin_red_case = Loadable(lazy(() => import('../Pages/insights/Haemoglobin/Haemoglobin_red_case')));
const Haemoglobin_amber_case = Loadable(lazy(() => import('../Pages/insights/Haemoglobin/Haemoglobin_amber_case')));

const Socieconomin_survey = Loadable(lazy(() => import('../screens/socieconomic survey/Socieconomin_survey')));
const Screening_screener = Loadable(lazy(() => import('../Pages/daily and weely data/Screening_screener')));
const Screening_sevika = Loadable(lazy(() => import('../Pages/daily and weely data/Screening_sevika')));
const Patient_List_For_Lipid_Panel_Test = Loadable(lazy(() => import('../Pages/daily and weely data/Patient_List_For_Lipid_Panel_Test')));
const New_issue = Loadable(lazy(() => import('../screens/issue addressing/New_issue')));
const New_issue_From = Loadable(lazy(() => import('../screens/issue addressing/New_issue_From')));
const Update_issue = Loadable(lazy(() => import('../screens/issue addressing/Update_issue')));
const Change_request = Loadable(lazy(() => import('../screens/change request/Change_request')));

//DOCTORS SECTION
const DoctorHome = Loadable(lazy(() => import('../components/home pages/DoctorHome')));
const Referred_patient = Loadable(lazy(() => import('../screens/Doctors_Section/Referred Petient/Referred_patient')));
const Encounter_List = Loadable(lazy(() => import('../screens/Doctors_Section/Referred Petient/Encounter List/Encounter_List')));
const Patient_Info = Loadable(lazy(() => import('../screens/Doctors_Section/Referred Petient/Encounter List/Patient_Info')));
const Petient_view = Loadable(lazy(() => import('../screens/Doctors_Section/Petient view/Petient_view')));
const Citizen_profile = Loadable(lazy(() => import('../components/home pages/home page components/citizen profile/Citizen_profile')));
const Encounter_petient_list = Loadable(lazy(() => import('../screens/Doctors_Section/Petient view/Encounter_petient_list')));
const Help_doctors = Loadable(lazy(() => import('../screens/Doctors_Section/Help section/Help_doctors')));
const Prescribed = Loadable(lazy(() => import('../components/home pages/Prescrided/Prescrided')));
const Non_Prescribed = Loadable(lazy(() => import('../components/home pages/Non-Prescrided/Non_prescrided')));
const Advanced_screnning_pendding_Case = Loadable(lazy(() => import('../components/home pages/Advanced Screnning Pending Cases/Advanced_screnning_pendding_Case')));
const Advanced_Screnning_total_Cases = Loadable(lazy(() => import('../components/home pages/Advanced Screnning Total Cases/Advanced_Screnning_total_Cases')));



function RouterComponent() {
  let userRole = localStorage.getItem("userRole")
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

      <Routes>
        {/* Login pages */}


        <Route path='/' element={<Firstpage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        {/* <Route path="*" element={<Navigate to={"/login"} />} /> */}

        {/* Base layout start */}
        <Route element={<BaseLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path='/insights' element={<Insights2 />} />
          {/* Admin section start */}
          {/* <Route path="/dashboard" element={<AdminHom />} /> */}

          {
            // userRole === "system_admin" &&
            <>


              <Route path="/home/directory" element={<Directory />} />
              <Route path='/adduser' element={<AddUser />} />

              
              {/* Approved users */}
                <Route path='/approvedusers/doctors' element={<Doctors />} />
              <Route path='/approvedusers/ngo' element={<Ngo />} />
              <Route path='/approvedusers/screener' element={<Screener />} />
              <Route path='/approvedusers/screener/screener-profile' element={<ScreenerProfileInfo />} />
              <Route path='/approvedusers/sevika' element={<Sevika />} />
              <Route path='/approvedusers/pharmacy' element={<Pharmacy />} />
              <Route path='/ngo-profile' element={<Ngo_Profile />} />
              <Route path='/citizen-list' element={<Citizen_profile />} />
              <Route path='/add-citizen' element={<Add_Citizen />} />
              <Route path='/citizen-form' element={<Citizen_form />} />
              <Route path='/citizen-update-form' element={<Citizen_update />} />
              <Route path='/scrennings' element={<Scrennering />} />

              



              <Route path='/approveduser/activeuser' element={<Active_users />} />
              <Route path='/approveduser/Inactiveuser' element={<Inactive_users />} />
              <Route path='/generalsurvey' element={<General_survey />} />
              <Route path='/healthsurvey' element={<Health_survey />} />

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



              {/* <Route path='/admin/insights' element={<Insights />} /> */}
              <Route path='/socieconomic_survey' element={<Socieconomin_survey />} />
              <Route path='/dailyandweeklydata/screening_screener' element={<Screening_screener />} />
              <Route path='/dailyandweeklydata/screening_sevika' element={<Screening_sevika />} />
              <Route path='/dailyandweeklydata/patientlist' element={<Patient_List_For_Lipid_Panel_Test />} />
              <Route path='/issueaddressing/newissue' element={<New_issue />} />
              <Route path='/new-issue-form' element={<New_issue_From />} />
              <Route path='/issueaddressing/updateissue' element={<Update_issue />} />
              <Route path='/changerequest' element={<Change_request />} />

              <Route path='/prescrided' element={<Prescribed />} />
              <Route path='/non-prescrided' element={<Non_Prescribed />} />
              <Route path='/advanced-pending-cases' element={<Advanced_screnning_pendding_Case />} />
              <Route path='/advanced-total-cases' element={<Advanced_Screnning_total_Cases />} />
              {/* Admin section End */}
            </>

          }
          {/* Doctors Section start */}


          <Route path="/DoctorHome" element={<DoctorHome />} />
          <Route path='/referred_patient' element={<Referred_patient />} />

          <Route path='/referred_patient/Encounter_List' element={<Encounter_List />} />
          <Route path='/referred_patient/Encounter_List/Patient_Info' element={<Patient_Info />} />

          <Route path='/home/doctots_list' element={<DoctorsCard_table />} />
          <Route path='/home/doctor_list/doctorprofiledisplay' element={<DoctorProfileDisplay />} />
          <Route path='/home/doctor_list/doctorprofiledisplay/doctorprofile_edit' element={<DoctorProfileEdit />} />

          <Route path='/petient_view' element={<Petient_view />} />
          {/* <Route path='/referred_patient/petient_view/citizen_profile' element={<Citizen_profile />} /> */}
          <Route path='/referred_patient/petient_view/Encounter_petient_list' element={<Encounter_petient_list />} />


          <Route path='/help_doctors' element={<Help_doctors />} />


        </Route>
        {/* Base layout End */}

      </Routes>
      {
        window.location.href != "/" &&
        <Footer />
      }

    </>
  );
}

export default RouterComponent;
