import React from 'react'
import firstpage_img from '../assets/images/firstpage.png'
import page from '../assets/images/1.png'
import Image from 'react-bootstrap/Image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Firstpage() {
    return (
        <>
            <section className='d-flex justify-content-center align-items-center vh-100 flex-column'>

                <Container className='mb-4 text-center'>
                    <Image className='mx-md-4' src={page} rounded width={'200px'} />
                    <Image src={firstpage_img} rounded fluid />
                </Container>
                <Container>
                    <h2 style={{ textAlign: 'center' }}>Welcome to Javix Life Healthcare!</h2>
                    <p style={{ textAlign: 'center' }} className='mt-3'>Intelligent Diagnostic With Instant Reporting. Get your health checkup done now with our unique & world class technology!</p>
                    <p className='text-lg-center text-md-center text-sm-center'>
                        <Link to='/login'><Button variant="primary" className='my-3 p-2 px-4 fs-5'>Click on Login</Button></Link>
                    </p>
                </Container>


                {/* <Container>
                 <Image src={firstpage_img} rounded width={'700px'} />
            </Container> */}

            </section>
        </>
    )
}

export default Firstpage
