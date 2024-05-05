import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../logo.svg'; // Example logo, replace with your own
import "./hover.css";
import {useNavigate} from "react-router-dom";

function NavBar() {
  const nav = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '70px'}}>
      <Container style={{margin: '0'}} >
        <Navbar.Brand href="#home" style={{ paddingLeft: '15px', paddingRight: '15px', marginRight: '2%', marginLeft: '3%' }}>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Your Brand'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ margin: '0' }}>
            <Nav.Link href="/Home" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>Home</Nav.Link>
            <Nav.Link href="/Login" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>Donate</Nav.Link>
            <Nav.Link href="#faqs" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>FAQs</Nav.Link>
            {/* Add more Nav.Link components for additional pages */}
          </Nav>
          <Button type="button" onClick={()=>nav("/Register")} variant="outline-light" className="ms-auto" style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '3px', paddingBottom: '5px', marginRight: '-30%' }}>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
