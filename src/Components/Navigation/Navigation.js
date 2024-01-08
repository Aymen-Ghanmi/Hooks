import React from 'react'
import {Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {


  return (
    <div >
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            
            <div style={{display:'flex',justifyContent:'center',alignItems:"center",marginTop:"5px",width:'900px', height:"30px" }}>
      
         </div>
          </Nav>
        </Container>
      </Navbar>  
    </div>
  )
}

export default Navigation