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

import Investing from '../../Pages/Investing';
import fullbg from '../../assets/ss/fullbg.png';
import { TfiAlignJustify } from "react-icons/tfi";
import ReceiveTransmission from '../../Pages/Receivetransmissions/Index';

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
      <Navbar expand="lg" className="navbar">

        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <Nav className=" d-flex justify-content-center navlinkcontinerfor" onClick={closeMenu}>
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

        <Nav className="d-flex flex-row  buttoncontainer"
        style={{
          marginRight:"50px"
        }}

        >
          <Nav.Link className="nav_Link" as={HashLink} smooth to="#about">
            <ButtonCom name="Sign In" bgcolor="none" border="1px solid"></ButtonCom>
          </Nav.Link>
          <Nav.Link className="nav_Link" as={HashLink} smooth to="#about">
            <ButtonCom name="Sign Up" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none"></ButtonCom>
          </Nav.Link>
        </Nav>

        {/* Toggle icon (TfiAlignJustify) */}
        <div className="toggle-icon">
          <TfiAlignJustify
            onClick={toggleMenu}
            style={{
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
              marginTop: "15px",
              marginRight: "20px",
              display: "block",  // Show by default
            }}
          />
        </div>
      </Navbar>

      {/* Content sections */}
      <div>
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
