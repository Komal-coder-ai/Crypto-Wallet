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
//           <Col xs={12} md={8} lg={8} className='text-center mb-4 ButAndselltext'>
//             <h2>Enjoy the lowest fees in the market for buying and selling.</h2>
//             <p className="mb-3 ">
//             Trading made simple and affordable, with the lowest fees ensuring you keep more of what you earn.  </p>
//             {/* <a href="#learn-more" className="TableLink"
//             style={{
//               color:"var(--link-color)"
//             }}>
//               Learn More
//               <span className='TableArrow'>
//                 <FaArrowRight />
//               </span>
//             </a> */}
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


import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import linebarchart from '../../assets/icon/Chart.svg';
import './index.css'; // Import the CSS file
import { getAPIcall, homeExchangeAPI } from '../../api/apibase';
import { SvgIcon } from '@mui/material';
import ButtonCom from './../../components/button/index';

const Buyandsell = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleItems, setVisibleItems] = useState(7);
  const fetchHomeExchangeData = async () => {
    try {
      const result = await getAPIcall(homeExchangeAPI);
      console.log(result.data, "111")
      setData(result.data);
      console.log(data, "data")
    } catch (err) {
      console.error('Error fetching home exchange data:', err);
      setError(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeExchangeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  // Function to load more items in increments
  const showMoreItems = () => {
    setVisibleItems((prevVisible) => prevVisible + 7);
  };
  return (
    <div className='BuyAndsellContainer'>
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={8} lg={8} className='text-center mb-4 ButAndselltext'>
            <h2>Enjoy the lowest fees in the market for buying and selling.</h2>
            <p className="mb-3">
              Trading made simple and affordable, with the lowest fees ensuring you keep more of what you earn.
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} md={10}>
            <div className="TableContainer">
              <Table responsive className="text-center">
                <tbody>
                  {data.slice(0, visibleItems).map((item, index) => (
                    <tr key={index} className="TableRow">
                      <td style={{ background: "none" }}>
                        <img
                          src={item.image}
                          alt=""
                          width={25}
                          style={{ borderRadius: "50%" }}
                        />
                      </td>
                      <td className="table_data firstcol">{item.from_symbol}</td>
                      <td className="table_data col_3">{item.last_price}</td>
                      <td className="table_data col_4">+{item.change}%</td>
                      <td className="table_data ForMobile">
                        <img src={linebarchart} alt="Chart" />
                      </td>
                      <td className='d-flex table_data'>
                        <a href="#trade-now" className="TableLink">
                          Trade Now <span><FiArrowRight className="ml-1" /></span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        {visibleItems < data.length && (
          <Row className='justify-content-center'>
            <div className=""
              onClick={showMoreItems}
              style={{
                marginTop: '20px',
              }}
            >
              <ButtonCom name="View More" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none" />
            </div>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Buyandsell;
