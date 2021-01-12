import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LogoT from "../assets/ark.png";
import * as Scroll from 'react-scroll';




class Header extends React.Component {



  render() {
    return <div id="homebar"> 
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Navbar.Brand href="#home">
        <Scroll.Link to="homebar" smooth={true} offset={-50}>
          <img
            className="d-block  ml-auto mr-auto"
            height="30px"
            src={LogoT}
            alt="First slide" />
        </Scroll.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">
            <Scroll.Link to="cvark" smooth={true} offset={0}>
              Abaut me
              </Scroll.Link>
          </Nav.Link>
          <Nav.Link href="#pricing">Git-Hub</Nav.Link>
          <NavDropdown title="code" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Express</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Spring</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">more</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">xxx</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            memes
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  }




}

export default Header;