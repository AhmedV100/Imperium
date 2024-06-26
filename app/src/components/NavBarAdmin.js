import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "./navIcon.ico";
import "./hover.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const nav = useNavigate();
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
        <Navbar.Collapse id="basic-navbar-nav" style={{ margin: "0" }}>
          <Nav className="ml-auto" style={{ margin: "0" }}>
            <Nav.Link
              href="/home"
              className={`nav-link`} activeClassName={`active`}
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/admindashboard"
              className={`nav-link`} activeClassName={`active`}
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              Dashboard
            </Nav.Link>
          </Nav>
          <Button
            className="ms-auto"
            type="button"
            variant="outline-light"
            onClick={() => nav("/home")}
            style={{
              paddingLeft: "1.2vw",
              paddingRight: "1.2vw",
              paddingTop: "3px",
              paddingBottom: "5px",
              marginRight: "4vw",
            }}
          >
            logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
