import React from 'react';
import './index.css'; // Assuming this is your CSS file for styling
import Receivetransmissions_bg from '../../assets/ss/Receivetransmissions_bg.png'
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
      <input type="email" placeholder="Email Address" className="email-input"
        style={{
          width: "300px",
           borderRadius:"10px"  
        }}
      />
    </div>
  );
};

export default ReceiveTransmission;
