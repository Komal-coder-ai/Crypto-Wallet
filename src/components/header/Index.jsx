import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import ButtonCom from '../button/index';
import Home from '../../Pages/home/Index';
import AuthenticationManager from '../../Pages/AuthenticationManager/Index';
import Platform from '../../Pages/Platform';
import Service from '../../Pages/services/Index';
import Buyandsell from '../../Pages/Buyandsell';
import headerbg from '../../assets/ss/headerbg.png';
import './index.css';
import ReceiveTransmission from '../../Pages/Receivetransmissions/Index';
import Investing from '../../Pages/Investing';
import fullbg from '../../assets/ss/fullbg.png'
const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar"
        // style={{
        //   backgroundImage: `url(${headerbg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
   
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} className="navbar-toggler" />

        <Navbar.Collapse id="basic-navbar-nav d-flex" className={`justify-content-center navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <Nav className="ml-auto d-flex justify-content-center" onClick={closeMenu}>
            <Nav.Link className="nav_Link center_link" as={HashLink} smooth to="#">
              Buy / Sell
            </Nav.Link>
            <Nav.Link className="nav_Link center_link" as={HashLink} smooth to="#">
              Grow
            </Nav.Link>
            <Nav.Link className="nav_Link center_link" as={HashLink} smooth to="#">
              Markets
            </Nav.Link>
            <Nav.Link className="nav_Link center_link" as={HashLink} smooth to="#">
              Business
            </Nav.Link>
            <Nav.Link className="nav_Link center_link" as={HashLink} smooth to="#">
              Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ml-auto d-flex flex-row justify-content-sm-around buttoncontainer">
          <Nav.Link className="nav_Link" as={HashLink} smooth to="#about">
            <ButtonCom name="Sign In" bgcolor="none" border="1px solid"></ButtonCom>
          </Nav.Link>
          <Nav.Link className="nav_Link " as={HashLink} smooth to="#about">
            <ButtonCom name="Sign Up" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none"></ButtonCom>
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Content sections */}
      <div
      >
        <div id="home">
          <Home />
        </div>
        <div id="AuthenticationManager">
          <AuthenticationManager />
        </div>
        <div id="platform">
          <Platform />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="buyandsell">
          <Buyandsell />
        </div>
        <Investing></Investing>
        <ReceiveTransmission/>
      </div>
    </>
  );
};

export default NavbarComponent;
