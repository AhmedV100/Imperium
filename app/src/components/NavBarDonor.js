import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "./navIcon.ico";
import "./hover.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import defaultProfile from "../images/default user profile.png";

let subMenu = document.getElementById("subMenu");

export default function NavBarDonor() {
  const nav = useNavigate();
  const { donorId } = useParams();

  const handleDeliveryCardClick = () => {
    nav(`/donor/${parseInt(donorId)}/deliveryandnotifications`);
  };

  const handleDeleteDonor = () => {
    const Donors = JSON.parse(localStorage.getItem("donors"));
    const updatedDonors = Donors.filter((donor)=>donor.id !== parseInt(donorId));
    localStorage.setItem("Donors",JSON.stringify(updatedDonors));
};

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "70px" }}>
      <Container style={{ maxWidth: "100%" }}>
        <Navbar.Brand
          href="/home"
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
             <NavLink to="/Home" className={`nav-link`} activeClassName={`active`} style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>Home</NavLink>
             <NavLink to={`/donor#${donorId}`} className={`nav-link`} activeClassName={`active`} style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>Donate</NavLink>
             <NavLink to="/faqs" className={`nav-link`} activeClassName={`active`} style={{ paddingLeft: '1vw', paddingRight: '1vw', margin: '0' }}>FAQs</NavLink>
          </Nav>
          <img src={defaultProfile} className="ms-auto user-profile" onClick={toggleMenu}/>
          <div className="user-dropdown-wrap" id="subMenu">
            <div className="user-dropdown">
              <div className="user-info">
                <img src={defaultProfile}/>
                <p style={{fontSize:'20px', marginTop:'10px'}}>James Angelo</p>
              </div>
              <hr/>
              <a onClick={handleDeliveryCardClick} class="dropdown-link">
                <p style={{marginTop: '18px', fontSize:'18px'}}>Check delivery</p> <span>{'>'}</span>
              </a>
              <a href="/Home" class="dropdown-link">
                <p style={{marginTop: '18px', fontSize:'18px'}}> Log out</p> <span>{'>'}</span>
              </a>
              <hr/>
                <a href="/Home" onClick={handleDeleteDonor} class="dropdown-link">
              <p style={{marginTop: '18px', fontSize:'18px'}}>Delete user</p> <br /> <span>{'>'}</span>
              </a>
            </div>
          </div>

          {/* <Button
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
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
