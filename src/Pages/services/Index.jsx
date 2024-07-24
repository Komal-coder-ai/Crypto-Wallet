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
        <Col xs={10} sm={5} md={5} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
          <img src={servicelogo} alt="" className="img-fluid for-mobile" />
        </Col>
        <Col xs={10} sm={5} md={5} lg={6} xl={5} className="d-flex ServiceContainer flex-column justify-content-center align-items-center service-content">
          <div className="text-container ">
            <h1>24/7 access to full service customer support</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a  href="#getstarted">
            <ButtonCom name="Get Started" bgcolor="none" border="1px solid" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
