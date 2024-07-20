import React from 'react';
import bgimg from '../../assets/bgimage.svg';

import './index.css'

const Home = () => {
    return (
        <div className=""
        >
            
            <div

                className='HomeContainer'
                style={{
                    background: `linear-gradient(to bottom right, rgba(11, 11, 15, 0.9), rgba(18, 59, 82, 0.8)), url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    position: 'relative',
                }}
            >
                <h1
                    className='h1 '
                >We make crypto clear and simple</h1>


            </div>
            {/* <div className="auth"
           style={{
            height:"100vh"
           }}
           >

           <AuthenticationManager></AuthenticationManager>
           </div> */}
        </div>
    );
};

export default Home;
