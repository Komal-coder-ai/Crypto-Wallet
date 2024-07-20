import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Importing Row and Col from react-bootstrap
import './index.css'
import create from '../../assets/icon/create.svg'
import { FaArrowRight } from "react-icons/fa";
import bgimg from "../../assets/bgimage.svg"
import manage from "../../assets/icon/manage.svg"
import login from "../../assets/icon/login.svg"
import star from '../../assets/start/starAuth.svg'
const AuthenticationManager = () => {
  return (
    <div className=""

      style={{
        background: `linear-gradient(to bottom right, rgba(11, 11, 15, 0.9), rgba(18, 59, 82, 0.8)), url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // minHeight: '100vh',
        position: 'relative',
      }}>
      <Row className=" justify-content-evenly">
        {/* Column 1 */}
        <Col xs={12} md={3} className="mb-3 boxes"

        >
          <div className="text-center">

            <img src={create} alt="" />

            <h3 className="mt-2">Create</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
              Lorem ipsum dolor</p>
            <a href="#learn-more">Get Started
              <span className='mx-2'><FaArrowRight /></span>
            </a>

          </div>
        </Col>

        {/* Column 2 */}
        <Col xs={12} md={3} className="mb-3 boxes"

        >
          <div className="text-center">

            <img src={login} alt="" />

            <h3 className="mt-2">Login</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
              Lorem ipsum dolor</p>
            <a href="#learn-more">Find an ATM
              <span className='mx-2'><FaArrowRight /></span>
            </a>

          </div>
        </Col>

        {/* Column 3 */}
        <Col xs={12} md={3} className="mb-3 boxes"

        >
          <div className="text-center">

            <img src={manage} alt="" />
            <h3 className="mt-2">Manage</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
              Lorem ipsum dolor</p>
            <a href="#learn-more">Download the App
              <span className='mx-2'><FaArrowRight /></span>
            </a>

          </div>
        </Col>
      </Row>
      {/* <img src={star} alt="" className='starimg' /> */}
    </div>
  );
};

export default AuthenticationManager;
