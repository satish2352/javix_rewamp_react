import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";

import javixlogo from '../sidebar/logo1.png';
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
import { Link } from "react-router-dom";
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
import { FaHandsHelping } from "react-icons/fa";

// Define the menu structure for different roles
const menuConfig = {
  doctor: [
    { label: "Home", icon: <IoHomeSharp />, link: "/dashboard" },
    { label: "Referred Patient", icon: <LuBellRing />, link: "/referred_patient" },
    { label: "Patient View", icon: <FaRegUser />, link: "/petient_view" },
    { label: "Help", icon: <FaHandsHelping />, link: "/help_doctors" },
    { label: "Insights", icon: <TbActivityHeartbeat />, link: "/admin/insights" },
  ],
  system_admin: [
    { label: "Home", icon: <IoHomeSharp />, link: "/dashboard" },
    { label: "Add User", icon: <RiUserAddFill />, link: "/adduser" },
    {
      label: "Approved User",
      icon: <MdApproval />,
      subMenu: [
        { label: "Doctors", link: "/approvedusers/doctors" },
        { label: "NGO", link: "/approvedusers/ngo" },
        { label: "Screener", link: "/approvedusers/screener" },
        { label: "Sevika", link: "/approvedusers/sevika" },
        { label: "Pharmacy", link: "/approvedusers/pharmacy" },
      ],
    },
    {
      label: "Users",
      icon: <FaRegUser />,
      subMenu: [
        { label: "Active Users", link: "/approveduser/activeuser" },
        { label: "Inactive Users", link: "/approveduser/Inactiveuser" },
      ],
    },
    {
      label: "Daily and Weekly Reports",
      icon: <FaRegUser />,
      subMenu: [
        { label: "Screening Screener", link: "/dailyandweeklydata/screening_screener" },
        { label: "Screening Sevika", link: "/dailyandweeklydata/screening_sevika" },
        { label: "Patient List For Lipid Panel Test", link: "/dailyandweeklydata/patientlist" },
      ],
    },
    { label: "Insights", icon: <TbActivityHeartbeat />, link: "/admin/insights" },
    { label: "General Survey Data", icon: <TbActivityHeartbeat />, link: "/generalsurvey" },
    { label: "Health Survey Data", icon: <TbActivityHeartbeat />, link: "/healthsurvey" },
    { label: "Socieconomic Survey Data", icon: <TbActivityHeartbeat />, link: "/socieconomic_survey" },
    { label: "Change Request", icon: <IoMdCheckboxOutline />, link: "/changerequest" },
    {
      label: "Issue Addressing",
      icon: <LuBellRing />,
      subMenu: [
        { label: "New Issue", link: "/issueaddressing/newissue" },
        { label: "Update Issue", link: "/issueaddressing/updateissue" },
      ],
    },
  ],
  sevika: [
    { label: "Home", icon: <IoHomeSharp />, link: "/" },
    { label: "Add User", icon: <RiUserAddFill />, link: "/adduser" },
    { label: "Insights", icon: <TbActivityHeartbeat />, link: "#" },
  ],
};

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // Get the user's role from localStorage
  const userRole = localStorage.getItem('userRole') || 'doctor';

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
              {menuConfig[userRole]?.map((menuItem, index) => (
                menuItem.subMenu ? (
                  <li className="menu-item" key={index}>
                    <SubMenu label={menuItem.label} icon={menuItem.icon}>
                      {menuItem.subMenu.map((subItem, subIndex) => (
                        <Link to={subItem.link} key={subIndex}><MenuItem>{subItem.label}</MenuItem></Link>
                      ))}
                    </SubMenu>
                  </li>
                ) : (
                  <li className="menu-item" key={index}>
                    <Link to={menuItem.link}><MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem></Link>
                  </li>
                )
              ))}
              {/* Logout button always displayed */}
              <li className="menu-item">
                <Link to='/login'><MenuItem icon={<IoMdLogOut />}>Logout</MenuItem></Link>
              </li>
            </Menu>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
