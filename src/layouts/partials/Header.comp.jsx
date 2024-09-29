import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"


export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <h2>CRM...</h2>
        {/* <img src={logo} alt="logo" width="50px" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>

          <Link to="">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
