import React from 'react'
import Home from '../../layout/Header'
import changerequest_img from '../../assets/images/change.png'
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './changerequest.scss'
import { Container } from 'react-bootstrap';
function Change_request() {
    return (
        <>
            <Home />
            <br></br>
            <Container style={{ textAlign: "center" , paddingTop : '100px'}}>
                <Image src={changerequest_img} rounded />
                <h1>We are Working</h1>
            </Container>

        </>
    )
}

export default Change_request
