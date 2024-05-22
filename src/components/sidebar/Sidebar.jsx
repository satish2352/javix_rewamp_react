import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";

import javixlogo from '../sidebar/logo1.png'
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
// import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { RiUserAddFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { MdApproval } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          {/* <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" /> */}
          <span className="sidebar-brand-text">
            <img src={javixlogo} alt="" width={'225px'} height={'50px'} />
          </span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <Menu>
              <li className="menu-item">
                <Link to="/"><MenuItem icon={<IoHomeSharp />} style={{ color: "black" }}>Home</MenuItem></Link>
              </li>
              <li className="menu-item">
                <Link to="/adduser"><MenuItem icon={<RiUserAddFill />} style={{ color: "black" }}>Add User</MenuItem></Link>
              </li>
              <li className="menu-item">
                <SubMenu label="Approved User" icon={<MdApproval />}>
                  <MenuItem>Doctors</MenuItem>
                  <MenuItem>NGO</MenuItem>
                  <MenuItem>Screener</MenuItem>
                  <MenuItem>Sevika</MenuItem>
                  <MenuItem>Pharmacy</MenuItem>
                </SubMenu>
              </li>
              <li className="menu-item">
                <SubMenu label="Users" icon={<FaRegUser />}>
                  <Link to="/approveduser/activeuser"><MenuItem>Active Users</MenuItem></Link>
                  <MenuItem>Inactive Users</MenuItem>
                </SubMenu>
              </li>
              <li className="menu-item">
                <SubMenu label="Daily and Weekly Reports" icon={<FaRegUser />}>
                  <Link to='/dailyandweeklydata/screening_screener'><MenuItem>Screening Screener</MenuItem></Link>
                  <Link to='/dailyandweeklydata/screening_sevika'><MenuItem>Screening Sevika</MenuItem></Link>
                  <Link to='/dailyandweeklydata/patientlist'><MenuItem>Patient List For Lipid Panel Test</MenuItem></Link>
                </SubMenu>
              </li>
              <li className="menu-item">
                <MenuItem icon={<TbActivityHeartbeat />}>Insights</MenuItem>
              </li>
              <li className="menu-item">
                <Link to='/generalsurvey'><MenuItem icon={<TbActivityHeartbeat />}>General Survey Data</MenuItem></Link>
              </li>
              <li className="menu-item">
                <Link to='/healthsurvey'><MenuItem icon={<TbActivityHeartbeat />}>Health Survey Data</MenuItem></Link>
              </li>
              <li className="menu-item">
                <Link to='/socieconomic_survey'><MenuItem icon={<TbActivityHeartbeat />}>Socieconomic Survey Data</MenuItem></Link>
              </li>
              <li className="menu-item">
                <MenuItem icon={<IoMdCheckboxOutline />}>Change Request</MenuItem>
              </li>
              <li className="menu-item">
                <SubMenu label="Issue Addressing" icon={<LuBellRing />}>
                  <Link to='/issueaddressing/newissue'><MenuItem>New Issue</MenuItem></Link>
                  <Link to='/issueaddressing/updateissue'><MenuItem>Update Issue</MenuItem></Link>
                </SubMenu>
              </li>
              <li className="menu-item">
                <MenuItem icon={<IoMdLogOut />}>Logout</MenuItem>
              </li>
            </Menu>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
