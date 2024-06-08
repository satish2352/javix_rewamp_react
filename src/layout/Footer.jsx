import React from 'react'
import { Container } from 'react-bootstrap';
import './Footer.scss'
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=' text-md-end text-sm-center' >
      <Container fluid>
        <p className=' footer_section mt-3'>COPYRIGHT © {currentYear} <a href='#' style={{ textDecoration: 'none' }}>Javix Life Pvt. Ltd.</a> All Rights Reserved</p>
      </Container>

    </div>
  )
}

export default Footer
