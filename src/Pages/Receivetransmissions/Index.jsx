import React from 'react';
import './index.css'; // Assuming this is your CSS file for styling
import Receivetransmissions_bg from '../../assets/ss/Receivetransmissions_bg.png'
import { FaArrowRight } from 'react-icons/fa';
const ReceiveTransmission = () => {
  return (
    <div className='ReceiveTransmission'
    style={{
      // background:`url(${Receivetransmissions_bg})`,
      // backgroundSize:"cover",
      // backgroundRepeat:"no-repeat",
  }}
    >
      <h2>Receive transmissions</h2>
      <p>Unsubscribe at any time.<span
        style={{
          color: "var(--white-color)"
        }}
      > Privacy policy↗</span></p>
       <div className="input-container">
        <input
          type="email"
          placeholder="Email Address"
          className="email-input"
          style={{
            width: "100%", // Adjust width as needed
            borderRadius: "10px", // Rounded corners
            padding: "10px", // Adjust padding for better appearance
            paddingRight: "40px" // Space for the icon on the right
          }}
        />
        <FaArrowRight className="input-icon" />
      </div>
    </div>
  );
};

export default ReceiveTransmission;
