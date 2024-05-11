import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "./navIcon.ico";
import "./hover.css";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import NotificationIcon  from "./NotificationIcon";
function NavBar({posts}) {
  const nav = useNavigate();
  const { orgId } = useParams();


   // end of paste

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
              href={`/organization/${orgId}/notifications`}
              className="nav-link"
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              <NotificationIcon count={unreadNotificationsCount} />
            </Nav.Link>
            <Nav.Link
              href={`/organization/${orgId}/posts`}
              className="nav-link"
              style={{ paddingLeft: "1vw", paddingRight: "1vw", margin: "0" }}
            >
              View Posts
            </Nav.Link>
            <Nav.Link
              href={`/organization/${orgId}/settings`}
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
