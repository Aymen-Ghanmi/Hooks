import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import Filtermovie from '../Filtermovie'
import ReactStars from 'react-stars'

const Navigation = () => {


  return (
    <div >
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <div style={{display:'flex',justifyContent:'center',alignItems:"center",marginTop:"5px",width:'900px', height:"30px" }}>
      
         </div>
          </Nav>
        </Container>
      </Navbar>  
    </div>
  )
}

export default Navigation