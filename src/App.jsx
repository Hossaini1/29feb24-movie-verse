import { useState } from 'react'
import {Col,Row, Image} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Img from './assets/image/the-movie-verse.png'

function App() {
  
  return (
    <>
    {/* Navbar */}
      <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#">🌐 Movie-Verve</Navbar.Brand>
      </Container>
    </Navbar>

    <Container>
      {/* Hero section 1 */}
    <Col className='d-flex pt-5 align-items-center '>
    <Row>
     <h1 className='hero-text'>Welcome to the Movie Verse</h1>
     <p className='hero-description'>Find and save your favorite movies</p>
    </Row>
    <Row>
      <Image src={Img} alt='Hero image' />
    </Row>
    </Col>
    </Container>


    {/* Hero section 2 */}


     

    </>
  )
}

export default App
