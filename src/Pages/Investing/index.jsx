import React from 'react';
import ButtonCom from '../../components/button';
import { Row, Col } from 'react-bootstrap';
import './index.css'; // Assuming this is your CSS file for styling
import bag from '../../assets/icon/bag.svg';

const Investing = () => {
  return (
    <div className='investingcontainer'>
      <Row className="align-items-center container">
        {/* Column for text content */}
        <Col xs={12} md={6} className="text-content">
          <h2>Take your first step into safe, secure crypto investing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#getstarted">
            <ButtonCom name="Get Started" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none" />
          </a>  </Col>

        {/* Column for image */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img src={bag} alt="Bag Icon" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

export default Investing;
