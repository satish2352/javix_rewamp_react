import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdOutlineClose } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { MdApproval } from "react-icons/md";
import { FaRegUser, FaHandsHelping, FaArrowRight } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoMdCheckboxOutline, IoMdLogOut } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import javixlogo from '../sidebar/logo1.png';
import { SidebarContext } from "../../context/SidebarContext";
import "./Sidebar.scss";

// Define the menu structure for different roles
const menuConfig = {
  doctor: [
    { label: "Home", icon: <IoHomeSharp />, link: "/dashboard" },
    { label: "Referred Patient", icon: <LuBellRing />, link: "/referred_patient" },
    { label: "Patient View", icon: <FaRegUser />, link: "/petient_view" },
    { label: "Help", icon: <FaHandsHelping />, link: "/help_doctors" },
    { label: "Insights", icon: <TbActivityHeartbeat />, link: "/insights" },
  ],
  system_admin: [
    { label: "Home", icon: <IoHomeSharp />, link: "/dashboard" },
    { label: "Add User", icon: <RiUserAddFill />, link: "/adduser" },
    {
      label: "Approved User",
      icon: <MdApproval />,
      subMenu: [
        { label: "Doctors", link: "/approvedusers/doctors", icon: <FaArrowRight /> },
        { label: "NGO", link: "/approvedusers/ngo", icon: <FaArrowRight /> },
        { label: "Screener", link: "/approvedusers/screener", icon: <FaArrowRight /> },
        { label: "Sevika", link: "/approvedusers/sevika", icon: <FaArrowRight /> },
        { label: "Pharmacy", link: "/approvedusers/pharmacy", icon: <FaArrowRight /> },
      ],
    },
    {
      label: "Users",
      icon: <FaRegUser />,
      subMenu: [
        { label: "Active Users", link: "/approveduser/activeuser", icon: <FaArrowRight /> },
        { label: "Inactive Users", link: "/approveduser/Inactiveuser", icon: <FaArrowRight /> },
      ],
    },
    {
      label: "Daily and Weekly Reports",
      icon: <FaRegUser />,
      subMenu: [
        { label: "Screening Screener", link: "/dailyandweeklydata/screening_screener", icon: <FaArrowRight /> },
        { label: "Screening Sevika", link: "/dailyandweeklydata/screening_sevika", icon: <FaArrowRight /> },
        { label: "Patient List For Lipid Panel Test", link: "/dailyandweeklydata/patientlist", icon: <FaArrowRight /> },
      ],
    },
    { label: "Insights", icon: <TbActivityHeartbeat />, link: "/insights" },
    { label: "General Survey Data", icon: <TbActivityHeartbeat />, link: "/generalsurvey" },
    { label: "Health Survey Data", icon: <TbActivityHeartbeat />, link: "/healthsurvey" },
    { label: "Socioeconomic Survey Data", icon: <TbActivityHeartbeat />, link: "/socieconomic_survey" },
    { label: "Change Request", icon: <IoMdCheckboxOutline />, link: "/changerequest" },
    {
      label: "Issue Addressing",
      icon: <LuBellRing />,
      subMenu: [
        { label: "New Issue", link: "/issueaddressing/newissue", icon: <FaArrowRight /> },
        { label: "Update Issue", link: "/issueaddressing/updateissue", icon: <FaArrowRight /> },
      ],
    },
  ],
  sevika: [
    { label: "Home", icon: <IoHomeSharp />, link: "/" },
    { label: "Add User", icon: <RiUserAddFill />, link: "/adduser" },
    { label: "Insights", icon: <TbActivityHeartbeat />, link: "/insights" },
  ],
};

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // State to track the currently active submenu item
  const [activeSubMenuItem, setActiveSubMenuItem] = useState(window.location.pathname);

  // Get the user's role from localStorage
  const userRole = localStorage.getItem('userRole') || 'doctor';
 
  const logoutBtn = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('userRole');
  };

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
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

  const renderMenuItems = (menuItems) => {
    return menuItems.map((menuItem, index) => (
      menuItem.subMenu ? (
        <li className="menu-item" key={index}>
          <SubMenu
            label={menuItem.label}
            icon={<span className={`menu-item-icon ${activeSubMenuItem === menuItem.link ? "active-icon" : ""}`}>{menuItem.icon}</span>}
          >
            {menuItem.subMenu.map((subItem, subIndex) => (
              <Link to={subItem.link} key={subIndex} onClick={() => setActiveSubMenuItem(subItem.link)}>
                <MenuItem
                  className={activeSubMenuItem === subItem.link ? "activeMenuClass" : ""}
                  icon={<span className={`menu-item-icon ${activeSubMenuItem === subItem.link ? "active-icon" : ""}`}>{subItem.icon}</span>}
                >
                  {subItem.label}
                </MenuItem>
              </Link>
            ))}
          </SubMenu>
        </li>
      ) : (
        <li className="menu-item" key={index}>
          <Link to={menuItem.link} onClick={() => setActiveSubMenuItem(menuItem.link)}>
            <MenuItem
              className={activeSubMenuItem === menuItem.link ? "activeMenuClass" : ""}
              icon={<span className={`menu-item-icon ${activeSubMenuItem === menuItem.link ? "active-icon" : ""}`}>{menuItem.icon}</span>}
            >
              {menuItem.label}
            </MenuItem>
          </Link>
        </li>
      )
    ));
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} ref={navbarRef}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="sidebar-brand-text">
            <img src={javixlogo} alt="Javix Logo" width={'225px'} height={'50px'} />
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
              {renderMenuItems(menuConfig[userRole] || [])}
              {/* Logout button always displayed */}
              <li className="menu-item">
                <Link onClick={logoutBtn} to="/login">
                  <MenuItem icon={<span className="menu-item-icon"><IoMdLogOut /></span>}>Logout</MenuItem>
                </Link>
              </li>
            </Menu>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
