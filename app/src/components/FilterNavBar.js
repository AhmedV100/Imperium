import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//////////////////////NO USE FOR NOW/////////////////////////
export default function FilterNavBar() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("Type Category to Browse...");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = () => {
    setCurrentCategory(searchTerm ? searchTerm : "Type Category to Browse...");
    if (searchTerm === "clothes") {
      navigate("/donor/browser/clothes");
    } else if (searchTerm === "toys") {
      navigate("/donor/browser/toys");
    } else if (searchTerm === "food") {
      navigate("/donor/browser/food");
    } else if (searchTerm === "medical") {
      navigate("/donor/browser/medical");
    } else if (searchTerm === "school") {
      navigate("/donor/browser/school");
    } else if (searchTerm === "blood") {
      navigate("/donor/browser/blood");
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "var(--bs-gray-500)" }}>
      <Container fluid>
        <Navbar.Brand>{currentCategory}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" onClick={handleFilterClick}>
              Filter
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
