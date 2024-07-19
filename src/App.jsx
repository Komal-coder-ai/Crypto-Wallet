// import React from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// // import DisableRightClick from "./components/DisableRightClick";
// import Navbar from "./components/header/Index";
// const App = () => {
//   return (
//     <div>
//       <Router>
// {/* <DisableRightClick></DisableRightClick> */}
//         <Navbar></Navbar>
//         <Routes>
//           <Route></Route>
//         </Routes>
       
//       </Router>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import bgimage from './assets/bgimage.svg'
import img2 from './assets/img2.svg'
const App = () => {
  return (
    <div>
      <img src={bgimage} alt="" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum animi unde cum sit voluptas aperiam repudiandae deserunt doloribus praesentium assumenda suscipit, eaque nulla, possimus recusandae ut similique! Unde, perferendis!
      <img src={img2} alt="" />
    </div>
  )
}

export default App
