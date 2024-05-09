import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "./navIcon.ico";
import "./hover.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import NotificationIcon  from "./NotificationIcon";
import organizationsData from "../Data/Organizations.json";
function NavBar() {
  const nav = useNavigate();
  const { orgId } = useParams();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    // Simulating data fetching from JSON file
    const org = organizationsData.organizations.find(
      (org) => org.id === parseInt(orgId)
    );
    setOrganization(org);
  }, [orgId]);

const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);

useEffect(() => {
  if (!organization) return;

  const count = organization.posts.reduce((total, post) => {
    return total + (post.fulfilled && !post.isCoordinateSet ? 1 : 0);
  }, 0);

  setUnreadNotificationsCount(count);
}, [organization]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "70px" }}>
      <Container style={{ margin: "0" }}>
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ margin: "0" }}>
            <Nav.Link
              href={`/organization/${orgId}`}
              className="nav-link"
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#notifications"
              className="nav-link"
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              <NotificationIcon count={unreadNotificationsCount} />
            </Nav.Link>
            <Nav.Link
              href="#view-posts"
              className="nav-link"
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              View Posts
            </Nav.Link>
            <Nav.Link
              href="#settings"
              className="nav-link"
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              Settings
            </Nav.Link>
            {/* Add more Nav.Link components for additional pages */}
          </Nav>
          <Button
            type="button"
            onClick={() => nav("/NewPost")}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
