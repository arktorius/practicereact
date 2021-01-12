import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LogoT from "../assets/ark.png";
import * as Scroll from 'react-scroll';

import Emer from '../prompt/emer'




class Header extends React.Component {



  render() {
    return <div id="homebar"> 
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top py-0">
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
              <h4>C.V.</h4>
              </Scroll.Link>
          </Nav.Link>
         
          <NavDropdown title="My-Code" id="collasible-nav-dropdown" style={{fontSize:20}}>
            <NavDropdown.Item href="https://github.com/arktorius/Express-MongoDb-API-REST">Express</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/arktorius/DicesGame">Spring</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://github.com/arktorius">more</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
          <Emer></Emer>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  }




}

export default Header;