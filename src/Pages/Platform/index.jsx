import React from 'react'
import ButtonCom from '../../components/button'
import './index.css'

import bgimg from '../../assets/bgimag/platformbg.svg'
const Platform = () => {
    return (
        <div className='PlatFormContainer'
        
        style={{
            background: `linear-gradient(to bottom right, rgba(11, 11, 15, 0.9), rgba(18, 59, 82, 0.8)), url(${bgimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom', 
            minHeight: '100vh', 
            position: 'relative',
          }}>
            <h2>A cryto mining platform that invest in you    </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor</p>
            <ButtonCom name="Get Started"></ButtonCom>
           
        </div>
    )
}

export default Platform
