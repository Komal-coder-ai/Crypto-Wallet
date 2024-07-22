import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonCom from '../../components/button';
import './index.css'; // Import your custom CSS file
import platformstar from '../../assets/start/platformstar.svg';

const Platform = () => {
  return (
    <div className='PlatFormContainer'>
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={7} lg={7} className='text-center'>
            <h2 className='mb-4'>A crypto mining platform that invests in you</h2>
            <p className='mb-4' style={{ width: "80%", margin: "auto" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonCom name="Get Started" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none" />

            <img src={platformstar} alt="Platform Star" className='platformstar img-fluid mt-4' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Platform;
