import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './index.css';
import footerbg from '../../assets/ss/bgFooter.png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const FooterCom = () => {
    return (
        <div className=""
            style={{
                background: `url(${footerbg})`,
                backgroundSize: "cover"


            }}

        >

            <Container>
                <Row className='footer-container justify-content-lg-start'>
                    {/* <Col xs={12} md={6} lg={4} className='EmailCon' 
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
                                    
                                    padding: "10px",
                                    paddingRight: "40px"
                                }}

                            />
                            <FaArrowRight className="input-icon" />
                        </div>

                         </Col> */}

                    <Col xs={6} md={3} lg={2} className='menucon'>
<h5 style={{fontWeight:'bold'}} className=' mb-4'>Support</h5>
                        <ListGroup.Item action className='list ' href="https://www.bitpaisaa.com/faq"
                        >FAQ's</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3' href="https://www.bitpaisaa.com/contact"
                        >Contact</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3' href="https://www.bitpaisaa.com/#"
                        >Blog</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3' href="https://www.bitpaisaa.com/#"
                        >Career</ListGroup.Item>

                        {/* <ListGroup.Item action className='list mt-3'
                        >News</ListGroup.Item>
                        <ListGroup.Item action className='list mt-3'
                        >Merch</ListGroup.Item> */}

                    </Col>

                    <Col xs={6} md={3} lg={4} style={{ textDecoration: "none", color: 'inherit' }}>
                    <h5 style={{fontWeight:'bold'}} className=' mb-4'>About Us</h5>
                      
                        <p><a href="https://www.bitpaisaa.com/#" style={{ textDecoration: "none", color: 'inherit' }}>Referral Program</a></p>
                        <p><a href="https://www.bitpaisaa.com/#" style={{ textDecoration: "none", color: 'inherit' }}>Apply for Listing</a></p>
                        <p><a href="https://www.bitpaisaa.com/announcement" style={{ textDecoration: "none", color: 'inherit' }}>Announcement</a></p>
                        <p><a href="https://www.bitpaisaa.com/terms_conditions" style={{ textDecoration: "none", color: 'inherit' }}>Terms and Conditions</a></p>
                        <p><a href="https://www.bitpaisaa.com/privacy" style={{ textDecoration: "none", color: 'inherit' }}>Privacy</a></p>
                        <p><a href="https://www.bitpaisaa.com/risk" style={{ textDecoration: "none", color: 'inherit' }}>Risk</a></p>
                        <p><a href="https://www.bitpaisaa.com/refund" style={{ textDecoration: "none", color: 'inherit' }}>Refund Policy</a></p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterCom;
