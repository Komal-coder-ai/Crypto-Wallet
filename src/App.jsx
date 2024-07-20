  import React from "react";

  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import "bootstrap/dist/css/bootstrap.min.css";

  // import DisableRightClick from "./components/DisableRightClick";
  import Navbar from "./components/header/Index";
  import ButtonCom from "./components/button";
  import Home from "./Pages/home/Index";
import FooterCom from "./components/footer/Index";
  const App = () => {
    return (
      <div>
        <Router>


          <Navbar></Navbar>
          <Routes>
            {/* <Route path="/" element={<Home></Home>}> </Route> */}
          </Routes>
      <FooterCom></FooterCom>
        </Router>
      </div>
    );
  };

  export default App;


