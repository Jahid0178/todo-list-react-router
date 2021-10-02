import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar-bg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#home">
            Dashboard
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="mx-2 text-white nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="mx-2 text-white nav-link" to="/todos">
              Todos
            </NavLink>
            <NavLink className="mx-2 text-white nav-link" to="/about">
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
