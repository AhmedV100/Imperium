import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "./navIcon.ico";
import "./hover.css";

function NavBar(isLoggedIn) {
  const location = useLocation();
  const nav = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Extract the pathname from the current location and set the active link accordingly
    const pathname = location.pathname;
    if (pathname === "/Home") setActiveLink("Home");
    else if (pathname === "/donor/browser") setActiveLink("Donate");
    else if (pathname === "/faqs") setActiveLink("FAQs");
  }, [location.pathname]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "70px" }}>
      <Container style={{ maxWidth: "100%" }}>
        <Navbar.Brand
          href="/Home"
          style={{
            paddingLeft: "2vw",
            paddingRight: "1vw",
            marginRight: "1.5vw",
            marginLeft: "2vw",
          }}
        >
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {" Imperium"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ margin: '0' }}>
          <Nav className="ml-auto" style={{ margin: '0' }}>
            <NavLink to="/Home" className={`nav-link`} activeClassName={`active`} style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>Home</NavLink>
            <NavLink to="/donor/browser" className={`nav-link`} activeClassName={`active`} style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>Donate</NavLink>
            <NavLink to="/faqs" className={`nav-link`} activeClassName={`active`} style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>FAQs</NavLink>
          </Nav>
          <Button
            className="ms-auto"
            type="button"
            onClick={() => nav("/Login")}
            variant="outline-light"
            style={{
              paddingLeft: "1.2vw",
              paddingRight: "1.2vw",
              paddingTop: "3px",
              paddingBottom: "5px",
              marginRight: "4vw",
            }}
          >
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
