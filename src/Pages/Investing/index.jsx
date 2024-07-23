import React from 'react';
import ButtonCom from '../../components/button';
import bag from '../../assets/icon/bag.svg';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import investingbg from '../../assets/ss/investingbg.png'
import bagbg from '../../assets/icon/bagbg.svg'
const Investing = () => {
  return (
    <div className='investingcontainer'
    style={{
        
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
       
    }}
    >
      <Row className="align-items-center container">
        {/* Column for text content */}
        <Col xs={12} sm={6} md={6} lg={6}>
          <div className="text-content">
            <h2>Take your first step into safe, secure crypto investing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ButtonCom name="Get Started" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none"></ButtonCom>
          </div>
        </Col>
        
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center">
          {/* <div className="image-container"
          style={{
            background:`url(${bagbg})`
          }}
          >
            <img src={bag} alt="Bag Icon" className="img-fluid" />
          </div> */}
            <img src={bag} alt="Bag Icon" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

export default Investing;
