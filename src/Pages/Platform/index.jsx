import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ButtonCom from '../../components/button';
import './index.css'; // Import your custom CSS file
import platformstar from '../../assets/start/platformstar.svg';
import { HashLink } from 'react-router-hash-link';

const Platform = () => {
  return (
    <div className='PlatFormContainer'>
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={7} lg={7} className='text-center'>
            <h2 className='mb-4'>
            Empowering Your Crypto Journey with Strategic Mining Investments</h2>
            <p className='mb-4' style={{ width: "70%", margin: "auto" }}>
            Unlock your potential with our tailored mining solutions, designed to maximize your gains and support your growth in the crypto world.
              </p>
            <Nav.Link className="nav_Link" as={HashLink} smooth to="#getstarted">
            <ButtonCom name="Get Started" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none" />
            </Nav.Link>
            <img src={platformstar} alt="Platform Star" className='platformstar img-fluid mt-4' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Platform;
