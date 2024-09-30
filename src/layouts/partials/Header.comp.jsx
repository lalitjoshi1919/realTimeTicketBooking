/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {

  const navigate = useNavigate();

  const logmeout = () => {
    navigate('/');
  };

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <h2>CRM...</h2>
        {/* <img src={logo} alt="logo" width="50px" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>

          <Link to="">Logout</Link> */}   {/* this is for react-dom */}


          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
            <Nav.Link onClick ={logmeout} >Logout</Nav.Link>    {/* to logout generally we useNavigate function  */}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
