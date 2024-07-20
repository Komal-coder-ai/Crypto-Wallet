
import bgimg from '../../assets/bgimage.svg'
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import ButtonCom from "../button/index";
import Home from '../../Pages/home/Index';
import './index.css'
import AuthenticationManager from '../../Pages/AuthenticationManager/Index';
import Platform from '../../Pages/Platform';
const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar expand="lg"
        style={{
          background: `linear-gradient(to bottom right, rgba(11, 11, 15, 0.9), rgba(18, 59, 82, 0.8)), url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // minHeight: '400px', // Adjust height as needed
          position: 'relative', // Ensure positioning for overlapping elements
        }}
      >
        {/* Logo */}
        {/* <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top m-4"
          alt="Logo"
        />{' '}
   
      </Navbar.Brand> */}

        {/* Navbar toggler for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav  ">
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
            <ButtonCom >Sign In</ButtonCom>
          </Nav.Link>
          <Nav.Link
            className='nav_Link' className="ml-2" as={HashLink} smooth to="#about" onClick={closeMenu}>
            <ButtonCom name="Sign Up"></ButtonCom>
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

           </div>

    </>
  );
};

export default NavbarComponent;
