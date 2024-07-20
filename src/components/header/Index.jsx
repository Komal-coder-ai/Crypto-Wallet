
import bgimg from '../../assets/bgimage.svg'
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import ButtonCom from "../button/index";
import Home from '../../Pages/home/Index';
import './index.css'
import AuthenticationManager from '../../Pages/AuthenticationManager/Index';
import Platform from '../../Pages/Platform';
import Service from '../../Pages/services/Index';
import Buyandsell from '../../Pages/Buyandsell';
import headerbg from '../../assets/ss/headerbg.png'

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar expand="lg"
        style={{
          backgroundImage: `url(${headerbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
          // minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Logo */}
        {/* <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top m-4 " 
          // alt="Logo"
        />{' '}
   
      </Navbar.Brand> */}

        {/* Navbar toggler for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav   "
        className='d-flex justify-content-center'
        >
          <Nav className="mr-auto ml-4 "
          >
            <Nav.Link
              className='nav_Link'
              as={HashLink}
              smooth
              to="#home"
              onClick={closeMenu}
            >
              Buy / Sell
            </Nav.Link>
            <Nav.Link
              className='nav_Link'
              as={HashLink}
              smooth
              to="#AuthenticationManager"
              onClick={closeMenu}
            >
              Grow
            </Nav.Link>
            <Nav.Link
              className='nav_Link'
              as={HashLink}
              smooth
              to="#how-we-work"
              onClick={closeMenu}
            >
              Markets
            </Nav.Link>
            <Nav.Link
              className='nav_Link'
              as={HashLink}
              smooth
              to="#about"
              onClick={closeMenu}
            >
              Business
            </Nav.Link>
            <Nav.Link
              className='nav_Link'
              as={HashLink}
              smooth
              to="#about"
              onClick={closeMenu}
            >
              Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Sign in / Sign up buttons */}
        <Nav className="ml-auto">
          <Nav.Link
            className='nav_Link' as={HashLink} smooth to="#about" onClick={closeMenu}>
            <ButtonCom name="Sign In " bgcolor="none" border="1px solid  ">Sign In</ButtonCom>
          </Nav.Link>
          <Nav.Link
            className="nav_Link ml-2" as={HashLink} smooth to="#about" onClick={closeMenu}>
            <ButtonCom name="Sign Up" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none"></ButtonCom>
          </Nav.Link>
        </Nav>
      </Navbar>



      {/* *********************** */}
      <div>

        <div id="home">
          <Home></Home>
        </div>

        <div id="AuthenticationManager">
          <AuthenticationManager></AuthenticationManager>
        </div>
        <div id="">
          <Platform></Platform>
        </div>
        <div id="">
          <Service></Service>
        </div>
        <div id="">
          <Buyandsell></Buyandsell>
        </div>
      </div>

    </>
  );
};

export default NavbarComponent;
