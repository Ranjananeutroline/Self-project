import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import "./NavHead.css";

function NavHead() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand>
        <NavLink to="/" exact className="nav-link">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            WASTE SOLUTIONS
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
            <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHead;