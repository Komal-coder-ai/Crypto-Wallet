import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './index.css';
import footerbg from '../../assets/ss/bgFooter.png'
const FooterCom = () => {
    return (
        <div className=""
        style={{
            backgroundImage:`url(${footerbg})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}
        >
            
            <Container>
                <Row className='footer-container'>
                    <Col xs={12} md={6} lg={4} className='EmailCon'>
                        <p>
                            CoinFlip, the world’s leading bitcoin ATM operator, makes it so flippin’ easy to buy and sell bitcoin via cash, card, or bank transfer. Sign up to get the latest in CoinFlip news, discounts, and more.
                        </p>
                        <input type="email" placeholder="Email Address" className="email-input " 
                        style={{
                            borderRadius:"10px"
                        }}
                        />

                        <p className='mt-4'>© 2021 GPD Holdings, LLC FinCEN MSB</p>
                    </Col>

                    <Col xs={6} md={3} lg={2} className='menucon'>

                        <ListGroup.Item action className='list'
                        >Company</ListGroup.Item>
                        <ListGroup.Item action className='list'
                        >About</ListGroup.Item>
                        <ListGroup.Item action className='list'
                        >Careers</ListGroup.Item>
                        <ListGroup.Item action className='list'
                        >Press</ListGroup.Item>
                       
                        <ListGroup.Item action className='list'
                        >News</ListGroup.Item>
                        <ListGroup.Item action className='list'
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
