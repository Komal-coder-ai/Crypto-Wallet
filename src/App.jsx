// import React from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// // import DisableRightClick from "./components/DisableRightClick";
// import Navbar from "./components/header/Index";
// import ButtonCom from "./components/button";
// import Home from "./Pages/home/Index";
// import FooterCom from "./components/footer/Index";
// // import fullbg from 'D:\Crypto Wallet\src\assets\ss\fullbg.png'
// import fullbg from './assets/ss/Full_bg.svg'
// const App = () => {
//   return (
//     <div 
    
//     style={{
//       backgroundImage: `url(${fullbg})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       backgroundColor:"black", 
//     }}
    
//     >  
//       <Router>

//         <div className=""
//             style={{
//               backgroundImage: `url(${fullbg})`,
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//         >

//           <Navbar></Navbar>
//           <FooterCom></FooterCom>
//         </div>
//         <Routes>
//           {/* <Route path="/" element={<Home></Home>}> </Route> */}
//         </Routes>

//       </Router>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/header/Index";
import FooterCom from "./components/footer/Index";
import fullbg from "./assets/ss/Full_bg.svg";
import { Spinner } from 'react-bootstrap';

const App = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = fullbg;
    img.onload = () => {
      setImageLoaded(true); // Set the state to true once the image is loaded
    };
  }, []);

  return (
    <div >
      {!imageLoaded ? (
      
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
          {/* <h2 style={{ color: "white" }}>Loading...</h2> */}
          {/* <img src={fullbg} /> */}
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
       
        <div
          style={{
            backgroundImage: `url(${fullbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundColor: "black",
            minHeight: "100vh",
          }}
        >
          <Router>
            <div
              style={{
                backgroundImage: `url(${fullbg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
             
              }}

        
            >
              <Navbar />
              <FooterCom />
            </div>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;

