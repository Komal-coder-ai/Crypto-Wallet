import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css'; // Import your CSS file for additional styling
import create from '../../assets/icon/create.svg';
import { FaArrowRight } from "react-icons/fa";
import authbg from "../../assets/ss/authbg.png";
import manage from "../../assets/icon/manage.svg";
import login from "../../assets/icon/login.svg";
import star from '../../assets/start/starAuth.svg';

const AuthenticationManager = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center Authenticationcontainer" // Center content horizontally and vertically
     
    >
      <Row className="justify-content-evenly container mt-5">
        {/* Column 1 */}
        <Col xs={12} sm={10} md={8} lg={3} className="mb-3 boxes">
          <div className="text-center">
            <img src={create} alt="" />
            <h3 className="mt-2">Create</h3>
            <p>
            Design and set up your personalized crypto wallet with our intuitive tools, tailored to meet your unique needs and preferences.
            </p>

            <a href="#getstarted">Get Started <span className='mx-2'><FaArrowRight /></span></a>
          </div>
        </Col>

        {/* Column 2 */}
        <Col xs={12} sm={10} md={8} lg={3} className="mb-3 boxes ">
          <div className="text-center">
            <img src={login} alt="" />
            <h3 className="mt-2">Login</h3>
            <p>
            Log in safely to manage and monitor your digital assets with confidence, using our robust and secure authentication system</p>
            <a href="#FindanATM ">Find an ATM <span className='mx-2'><FaArrowRight /></span></a>
          </div>
        </Col>

        {/* Column 3 */}
        <Col xs={12} sm={10} md={8} lg={3} className="mb-3 boxes">
          <div className="text-center">
            <img src={manage} alt="" />
            <h3 className="mt-2">Manage</h3>
            <p>
            Take control of your digital assets with powerful management tools that simplify tracking, organizing, and optimizing your investments
              </p>
            <a href="#Download">Download the App <span className='mx-2'><FaArrowRight /></span></a>
          </div>
        </Col>
      </Row>
      <img src={star} alt="" className='starimg' />
    </div>
  );
};

export default AuthenticationManager;
