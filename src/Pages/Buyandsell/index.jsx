// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { Container, Row, Col, Table } from 'react-bootstrap';
// import { FiArrowRight } from 'react-icons/fi';
// import linebarchart from '../../assets/icon/Chart.svg';
// import './index.css'; // Import the CSS file

// const Buyandsell = () => {
//   return (
//     <div className='BuyAndsellContainer'>
//       <Container>
//         <Row className='justify-content-center align-items-center'>
//           <Col xs={12} md={8} lg={7} className='text-center mb-4 ButAndselltext'>
//             <h2>Buy and sell with the lowest fees in the industry</h2>
//             <p className="mb-3 ">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <a href="#learn-more" className="TableLink"
//             style={{
//               color:"var(--link-color)"
//             }}>
//               Learn More
//               <span className='TableArrow'>
//                 <FaArrowRight />
//               </span>
//             </a>
//           </Col>
//         </Row>
//         <Row className='justify-content-center'>
//           <Col xs={12} md={10}>
//             <div className="TableContainer">
//               <Table responsive className="text-center">
//                 <tbody>
//                   <tr className="TableRow">
//                     <td className="table_data firstcol">Bitcoin</td>
//                     <td className="table_data col_2">BTC</td>
//                     <td className="table_data col_3">$56,290.30</td>
//                     <td className="table_data col_4">+1.68%</td>
//                     <td className="table_data ForMobile"><img src={linebarchart} alt="" /></td>
//                     <td className='d-flex table_data'>
//                       <a href="#trade-now" className="TableLink">
//                         Trade Now <span><FiArrowRight className="ml-1" /></span>
//                       </a>
//                     </td>
//                   </tr>
//                   <tr className="TableRow">
//                     <td className="table_data firstcol">Ethereum</td>
//                     <td className="table_data col_2">ETH</td>
//                     <td className="table_data col_3">$4,284.81</td>
//                     <td className="table_data col_4">+4.36%</td>
//                     <td className="table_data ForMobile"><img src={linebarchart} alt="" /></td>
//                     <td className='d-flex table_data'>
//                       <a href="#trade-now" className="TableLink">
//                         Trade Now <span><FiArrowRight className="ml-1" /></span>
//                       </a>
//                     </td>
//                   </tr>
//                   <tr className="TableRow">
//                     <td className="table_data firstcol">Cardano</td>
//                     <td className="table_data col_2">ADA</td>
//                     <td className="table_data col_3">$1.88</td>
//                     <td className="table_data col_4">+3.43%</td>
//                     <td className="table_data ForMobile"><img src={linebarchart} alt="" /></td>
//                     <td className='d-flex table_data'>
//                       <a href="#trade-now" className="TableLink">
//                         Trade Now <span><FiArrowRight className="ml-1" /></span>
//                       </a>
//                     </td>
//                   </tr>
//                   <tr className="TableRow">
//                     <td className="table_data firstcol">Wax</td>
//                     <td className="table_data col_2">WAXP</td>
//                     <td className="table_data col_3">$0.97</td>
//                     <td className="table_data col_4">-2.62%</td>
//                     <td className="table_data ForMobile"><img src={linebarchart} alt="" /></td>
//                     <td className='d-flex table_data'>
//                       <a href="#trade-now" className="TableLink">
//                         Trade Now <span><FiArrowRight className="ml-1" /></span>
//                       </a>
//                     </td>
//                   </tr>
//                   <tr className="TableRow">
//                     <td className="table_data firstcol">Polkadot</td>
//                     <td className="table_data col_2">DOT</td>
//                     <td className="table_data col_3">$42.22</td>
//                     <td className="table_data col_4">+7.56%</td>
//                     <td className="table_data ForMobile"><img src={linebarchart} alt="" /></td>
//                     <td className='d-flex table_data'>
//                       <a href="#trade-now" className="TableLink">
//                         Trade Now <span><FiArrowRight className="ml-1" /></span>
//                       </a>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Buyandsell;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { homeExchange } from '../../api/apibase';

const Buyandsell = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(homeExchange);
        setData(response.data);
        console.log(response.data,"data");
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Wallet Information</h1>
      <ul>
        {data.wallet.map((item, index) => (
          <li key={index}>{item.currency}</li>
        ))}
      </ul>
      <h2>Exchange Pairs</h2>
      {Object.keys(data.exchangePair).map((fromSymbol) => (
        <div key={fromSymbol}>
          <h3>From: {fromSymbol}</h3>
          <ul>
            {Object.keys(data.exchangePair[fromSymbol]).map((toSymbol) => {
              const pair = data.exchangePair[fromSymbol][toSymbol];
              return (
                <li key={toSymbol}>
                  To: {pair.to_symbol}, Last Price: {pair.last_price}, Trade Fee: {pair.trade_fee}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Buyandsell;


