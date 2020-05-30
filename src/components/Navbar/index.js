import React from 'react'
import * as Icon from "react-icons/fa";  // Font Awesome
import logo from "../../images/wmlogopurple.png";
import './style.css'

export default _ => <>
  <nav style={{display: 'flex'}}>
    <img src={logo}/>
  </nav>
</>

/*
export default _ => 
<Navbar bg="light" expand="sm">
  <Navbar.Brand href="#home">
      <Icon.FaCode/> &nbsp;
      Walter Melo
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
*/