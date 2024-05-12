import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "./navIcon.ico";
import "./hover.css";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import NotificationIcon from "./NotificationIcon";
import defaultProfile from "../images/default user profile.png";
let subMenu = document.getElementById("subMenu");

export default function NavBarOrg({ posts }) {
  const nav = useNavigate();
  const { orgId } = useParams();
const handleDeleteOrganization = () => {
    const organizations = JSON.parse(localStorage.getItem("organizations"));
    const updatedOrganizations = organizations.filter((org)=>org.id !== parseInt(orgId));
    localStorage.setItem("organizations",JSON.stringify(updatedOrganizations));
};

  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);

  useEffect(() => {
    const count = posts.reduce((total, post) => {
      if (post.donorId && !post.fulfilled) {
        return total + 1;
      }
      return total;
    }, 0);

    setUnreadNotificationsCount(count);
  }, [posts]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "70px" }}>
      <Container style={{ margin: "0", maxWidth: "100%" }}>
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ margin: "0" }}>
            <Nav.Link
              href={`/organization/${orgId}`}
              className={`nav-link`}
              activeClassName={`active`}
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href={`/organization/${orgId}/notifications`}
              className={`nav-link`}
              activeClassName={`active`}
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              <NotificationIcon count={unreadNotificationsCount} />
            </Nav.Link>
            <Nav.Link
              href={`/organization/${orgId}/all-posts`}
              className={`nav-link`}
              activeClassName={`active`}
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              View Posts
            </Nav.Link>

            {/* Add more Nav.Link components for additional pages */}
          </Nav>
          <Button
            type="button"
            onClick={() => nav(`/organization/${orgId}/new-post`)}
            variant="outline-light"
            style={{
              paddingLeft: "1.2vw",
              paddingRight: "1.2vw",
              paddingTop: "3px",
              paddingBottom: "5px",
            }}
          >
            New Post
          </Button>
          <img
            src={defaultProfile}
            className="ms-auto user-profile"
            onClick={toggleMenu}
          />
          <div className="user-dropdown-wrap" id="subMenu">
            <div className="user-dropdown">
              <div className="user-info">
                <img src={defaultProfile} />
                <p style={{ fontSize: "20px", marginTop: "10px" }}>
                  James Angelo
                </p>
              </div>
              <hr />
              
              <a href="/Home" class="dropdown-link">
                <p style={{ marginTop: "18px", fontSize: "18px" }}> Log out</p>{" "}
                <span>{">"}</span>
              </a>
              <hr />
              <a href="#" class="dropdown-link">
                <p style={{ marginTop: "18px", fontSize: "18px" }}>
                  Delete user
                </p>{" "}
                <br /> <span>{">"}</span>
              </a>
            </div>
          </div>
         {/* <*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
