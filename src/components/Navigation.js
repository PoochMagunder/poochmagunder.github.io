import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/Devon Eadie Logo.png";
import "../assets/css/Navigation.css";

const NavApp = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        className="Nav"
        bg="dark"
        expand="md"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/" className="brand-image">
          <img
            className="d-inline-block align-top m-2"
            src={logo}
            width={100}
            alt="Devon Alexander Eadie"
          />
        </Navbar.Brand>
        <Container className="nav-container">
          <Navbar.Toggle className="nav-button" aria-controls="navbar" />
          <Navbar.Collapse className="nav-collapse" id="navbar">
            <Nav className="nav-links ml-auto">
              <>
                <Nav.Link as={Link} to="/">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  My Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Me
                </Nav.Link>
                <Nav.Link as={Link} to="/resume">
                  My Resume
                </Nav.Link>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavApp;
