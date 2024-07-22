import React from 'react';
import './index.css';
import servicelogo from '../../assets/icon/servicelogo.svg';
import ButtonCom from '../../components/button';
import { Container, Row, Col } from 'react-bootstrap';

const Service = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row>
        <Col xs={12} sm={6} className="d-flex">
          <img src={servicelogo} alt="" className="img-fluid" />
        </Col>
        <Col xs={12} sm={6} className="d-flex flex-column justify-content-center align-items-center">
          <div className="text">
            <h1>24/7 access to full service customer support</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonCom name="Get Started" bgcolor="none" border="1px solid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
