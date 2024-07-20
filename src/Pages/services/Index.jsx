import React from 'react'
import './index.css'
import servicelogo from '../../assets/icon/servicelogo.svg'
import ButtonCom from '../../components/button'
import coinbg from '../../assets/ss/coinbg.png'

const Service = () => {
  return (
    <>

      <div
        className='row d-flex justify-content-center align-content-center '
        style={{
          background: `url(${coinbg})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}

      ><div className="row">
          <div className="col d-flex ">
            <img src={servicelogo} alt="" />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="">24/7 access to full service customer support</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ButtonCom name="Get Started" bgcolor="none" border="1px solid" />

            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Service
