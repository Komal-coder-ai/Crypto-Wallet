import React from 'react';
import './index.css';
import ButtonCom from '../../components/button';
import homebg from '../../assets/ss/homebg.png';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div className="home-container">
      <div className="HomeContainer">
        <h1>Your Gateway to Secure and Simple Crypto Management</h1>
        <div className="GetStartedBtn">
        <Nav.Link className="nav_Link" as={HashLink} smooth >
          <ButtonCom
            name="Get Started"
            bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)"
            border="none"
          />
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
