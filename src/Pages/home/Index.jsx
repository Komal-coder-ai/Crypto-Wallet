import React from 'react';
import homebg from '../../assets/ss/homebg.png'
import './index.css'

const Home = () => {
    return (
        <div className=""
        >
            
            <div

                className='HomeContainer'
                style={{
                    backgroundImage:`url(${homebg})`,
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                    minHeight: '100vh',
                    position: 'relative',
                }}
            >
                <h1
                    className='h1 '
                >We make crypto clear and simple</h1>


            </div>
           
           
        </div>
    );
};

export default Home;
