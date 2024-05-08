import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from './navIcon.ico';
import "./hover.css";
import {useNavigate} from "react-router-dom";

function NavBar() {
  const nav = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '70px'}}>
      <Container style={{margin: '0'}}>
        <Navbar.Brand href="/Home" style={{ paddingLeft: '2vw', paddingRight: '1vw', marginRight: '1.5vw', marginLeft: '2vw' }}>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Imperium'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ margin: '0' }}>
            <Nav.Link href="/Home" className="nav-link" style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>Home</Nav.Link>
            <Nav.Link href="/donor" className="nav-link" style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>Donate</Nav.Link>
            <Nav.Link href="#faqs" className="nav-link" style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>FAQs</Nav.Link>
            {/* Add more Nav.Link components for additional pages */}
          </Nav>

        </Navbar.Collapse>
        <div style={{ display:'flex', justifyContent: 'flex-end' }}>
          <Button type="button" onClick={()=>nav("/Login")} variant="outline-light" 
          style={{ paddingLeft: '1.2vw', paddingRight: '1.2vw', paddingTop: '3px', paddingBottom: '5px', marginRight:'-10vw'}}>
            Sign In</Button>
          </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
