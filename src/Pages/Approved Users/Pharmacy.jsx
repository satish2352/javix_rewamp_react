import React from 'react'
import Home from '../../screens/dashboard/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

import pharmcypic from '../../assets/images/change.png'
import { Container } from 'react-bootstrap';
function Pharmacy() {
  return (
    <>
      <Home />
      <Container style={{ textAlign: "center", paddingTop: '100px' }}>
        <Image src={pharmcypic} rounded />
        <h1>No Data Found...</h1>
      </Container>

    </>
  )
}

export default Pharmacy
