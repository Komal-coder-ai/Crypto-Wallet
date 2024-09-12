import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './index.css';
import footerbg from '../../assets/ss/bgFooter.png'
import { FaArrowRight } from 'react-icons/fa';
const FooterCom = () => {
    return (
        <div className=""
        style={{ background: `url(${footerbg})`,
      backgroundSize:"cover"
    
    
    }}

        >

            <Container>
                <Row className='footer-container'>
                    <Col xs={12} md={6} lg={4} className='EmailCon' 
                    style={{
                        marginBottom: "15px"
                    }}
                    >
                        <p>
                            CoinFlip: The Top Bitcoin ATM Operator, Making Buying and Selling Bitcoin Effortless with Cash, Card, or Bank Transfer.
                        </p><p> Subscribe for the Latest CoinFlip News, Exclusive Discounts, and More Updates.</p>
                        <div className="input-container" style={{


                            width: "90%",
                                                }}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="email-input"
                                style={{
                                    width: "100%",
                                    // borderRadius: "10px",
                                    padding: "10px",
                                    paddingRight: "40px"
                                }}

                            />
                            <FaArrowRight className="input-icon" />
                        </div>

                        {/* <p className='mt-4'>© 2021 GPD Holdings, LLC FinCEN MSB</p> */}
                    </Col>

                    <Col xs={6} md={3} lg={2} className='menucon'>

                        <ListGroup.Item action className='list '
                        >Company</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3'
                        >About</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3'
                        >Careers</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3'
                        >Press</ListGroup.Item>

                        <ListGroup.Item action className='list mt-3'
                        >News</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3'
                        >Merch</ListGroup.Item>

                    </Col>

                    <Col xs={6} md={3} lg={4} >
                        <p>Privacy Policy and Terms of Service</p>
                        <p>CoinFlip Privacy Policy</p>
                        <p>CoinFlip Biometrics Privacy Policy</p>
                        <p>CoinFlip Terms of Service</p>
                        <p>CoinFlip Trade Desk Terms of Service</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterCom;
