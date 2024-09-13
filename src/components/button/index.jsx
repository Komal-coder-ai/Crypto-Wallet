import React from 'react';

const ButtonCom = ({ name, bgcolor, border }) => {
  const gradientStyle = {
    background: bgcolor,
    border: border,
    borderRadius: '10px',
    color: '#fff',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    fontWeight: '600',
marginRight:"5px"
  };

  const handleClick = () => {
    if (name === 'Get Started') {
      window.open('https://www.bitpaisaa.com/');
    }
  };

  return (
    <div>
      <button style={gradientStyle} onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export default ButtonCom;
