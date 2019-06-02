import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About CF</Nav.Link>
            <Nav.Link href="#howroll">How we roll</Nav.Link>
            <NavDropdown title="Tutorials" id="basic-nav-dropdown">
              <NavDropdown.Item href="#tutorial/1">Tutorial-1</NavDropdown.Item>
              <NavDropdown.Item href="#tutorial/2">Tutorial-2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#codesnippets">Code snippets</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
