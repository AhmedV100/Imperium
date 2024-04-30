import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../logo.svg'; // Example logo, replace with your own
import "./hover.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '75px'}}>
      <Container style={{margin: '0'}}>
        <Navbar.Brand href="#home" style={{ paddingLeft: '15px', paddingRight: '15px', marginRight: '20px', marginLeft: '75px' }}>
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
            <Nav.Link href="#home" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>Home</Nav.Link>
            <Nav.Link href="#features" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>Donate</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>FAQs</Nav.Link>
            {/* Add more Nav.Link components for additional pages */}
          </Nav>
          <Button variant="outline-light" className="ms-auto" style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '3px', paddingBottom: '5px', margin: '-300px' }}>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
