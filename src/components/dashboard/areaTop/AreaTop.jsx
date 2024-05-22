import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import Card from 'react-bootstrap/Card';

import { FaRegMessage } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiStar } from "react-icons/ci";

import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <section className="content-area-top">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
        <MdOutlineMenu size={24} /><p style={{fontSize : "20px" , marginTop : '15px' , paddingLeft : "10px"}}>Menu</p>
        </button>
        
        
      </div>
    </section>


  );
};

export default AreaTop;


{/* <Card>
            <Card.Body style={{ padding: "10px" }}>
              <FaRegMessage /> <IoMdCheckboxOutline /> <CiMail /> <SlCalender /> <CiStar />
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Card.Body>
          </Card> */}




{/* 
      <div className="area-top-r">
        <div
          ref={dateRangeRef}
          className={`date-range-wrapper ${!showDatePicker ? "hide-date-range" : ""
            }`}
          onClick={handleInputClick}
        > */}

{/* <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            showMonthAndYearPickers={false}
          /> */}
{/* </div>

      </div> */}