import React from 'react';
import './index.css';
import ButtonCom from '../../components/button';
import homebg from '../../assets/ss/homebg.png';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const gradientStyle = {
  background: "linear-gradient(190deg, #18C8FF, #933FFE)",
  border: "none",
  borderRadius: '10px',
  color: '#fff',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  fontWeight: '600',
marginRight:"5px"
};


const Home = () => {
  return (
    <div className="home-container">
      <div className="HomeContainer">
        <h1

        >
          Your Gateway to Secure and Simple Crypto Management
          </h1>
        <div className="GetStartedBtn">
            <NavLink to="https://www.bitpaisaa.com">
            {/* <ButtonCom
              name="Get Started"
              bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)"
              border="none"
            /> */}
            <div style={gradientStyle} >
            Get Started
            </div>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
