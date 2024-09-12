import React from 'react';
import './index.css';
import servicelogo from '../../assets/icon/servicelogo.svg';
import ButtonCom from '../../components/button';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Service = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center service-container">
      <Row>
        <Col xs={10} sm={5} md={5} lg={6} xl={5} className="d-flex justify-content-center align-items-center">
          <img src={servicelogo} alt="" className="img-fluid for-mobile" />
        </Col>
        <Col xs={10} sm={5} md={5} lg={6} xl={5} className="d-flex ServiceContainer flex-column justify-content-center align-items-center service-content">
          <div className="text-container ">
            <h1>
              
            24/7 Access to Comprehensive Customer Support
              </h1>
            <p>
            Experience round-the-clock assistance from our dedicated team, ready to help you with any inquiries or issues to ensure your seamless experience  </p>
            <a >
            <ButtonCom name="Get Started" bgcolor="none" border="1px solid" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
