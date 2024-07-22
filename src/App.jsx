  import React from "react";

  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import "bootstrap/dist/css/bootstrap.min.css";

  // import DisableRightClick from "./components/DisableRightClick";
  import Navbar from "./components/header/Index";
  import ButtonCom from "./components/button";
  import Home from "./Pages/home/Index";
import FooterCom from "./components/footer/Index";
// import fullbg from 'D:\Crypto Wallet\src\assets\ss\fullbg.png'
import fullbg from './assets/ss/Full_bg.svg'
  const App = () => {
    return (
      <div>
        <Router>

<div className=""
 style={{
  backgroundImage: `url(${fullbg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}
>

          <Navbar></Navbar>
</div>
          <Routes>
            {/* <Route path="/" element={<Home></Home>}> </Route> */}
          </Routes>
      <FooterCom></FooterCom>
        </Router>
      </div>
    );
  };

  export default App;


