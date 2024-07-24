import React from 'react';
import './index.css';
import ButtonCom from '../../components/button';
import homebg from '../../assets/ss/homebg.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="HomeContainer">
        <h1>We make crypto clear and simple</h1>
        <div className="GetStartedBtn">
          <ButtonCom
            name="Get Started"
            bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)"
            border="none"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
