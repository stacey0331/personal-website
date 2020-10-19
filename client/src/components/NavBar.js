import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import signature from '../images/signature.PNG'

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div id="navBar">
      <Navbar color="faded" style={{backgroundColor: "#EDD9FF"}} light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <div style={{textAlign: "right"}}>
            <NavbarBrand href="/" className="mr-auto"><img src={signature} className="signature" alt="signature" /> </NavbarBrand>
        </div>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar >
            <NavItem>
              <NavLink href="/about-me">
                  <div className="navItem">About me</div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">
                  <div className="navItem">Portfolio</div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-me"> 
                <div className="navItem">Contact me</div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;