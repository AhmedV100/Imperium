import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../logo.svg'; // Example logo, replace with your own
import "./hover.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '75px' }}>
      <Container>
        <Navbar.Brand href="#home">
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
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-link">Features</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link">Pricing</Nav.Link>
            {/* Add more Nav.Link components for additional pages */}
          </Nav>
          <Button variant="outline-light" className="ms-auto">Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

