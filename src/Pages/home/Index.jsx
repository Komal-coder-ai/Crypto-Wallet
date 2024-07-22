import React from 'react';
import homebg from '../../assets/ss/homebg.png'
import './index.css'
import ButtonCom from '../../components/button';
// import ButtonCom from '../../components/button/index'
const Home = () => {
    return (
        <div className=""
        >

            <div

                className='HomeContainer'
                style={{

                    minHeight: '100vh',
                    position: 'relative',
                }}
            >
                <h1
                    className='h1 '
                >We make crypto clear and simple</h1>


                <div className="GetStartedBtn"><ButtonCom name="Get Started" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none"
                    className=""
                ></ButtonCom></div>
            </div>


        </div>
    );
};

export default Home;
