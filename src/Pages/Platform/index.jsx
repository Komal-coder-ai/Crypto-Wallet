import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import ButtonCom from '../../components/button'; // Assuming ButtonCom is correctly defined
import './index.css'; // Import your custom CSS file
import platformstar from '../../assets/start/platformstar.svg';
import platformbg from '../../assets/ss/platformbg.png'

const Platform = () => {
  return (
    <div className='PlatFormContainer'>
      <Container fluid>
        <Row className='justify-content-center align-items-center' style={{
           backgroundImage: `url(${platformbg})`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
          
          backgroundPosition: 'right bottom',
          minHeight: '100vh',
          position: 'relative',
          color: '#FFFFFF', // Set text color
          textAlign: 'center' // Center align text
        }}>
          <Col xs={10} md={7} lg={7} className='text-center'>
            <h2 className='mb-4'>A crypto mining platform that invests in you</h2>
            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ButtonCom name="Get Started" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none"/>
         
            <img src={platformstar} alt="Platform Star" className='platformstar img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Platform;
