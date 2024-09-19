/* eslint-disable no-debugger */
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
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import linebarchart from '../../assets/icon/Chart.svg';
import './index.css'; // Import the CSS file
import { getAPIcall, homeExchangeAPI } from '../../api/apibase';
import { SvgIcon } from '@mui/material';
import ButtonCom from './../../components/button/index';
// import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import { FaArrowDownLong } from 'react-icons/fa6';

const Buyandsell = () => {
  const [data, setData] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleItems, setVisibleItems] = useState(7);
  const fetchHomeExchangeData = async () => {
    try {
      const result = await getAPIcall(homeExchangeAPI);
      const inrPairs = result?.trade?.filter(item => item.pair_name.endsWith('/INR'));
      console.log(inrPairs, "inrPairs")

      const dataObj = result?.wallet
        ?.map((item) => {
          const matchedWallet = inrPairs?.find((value) => value.from_symbol === item.currency);

          if (matchedWallet) {
            return {
              ...matchedWallet,
              ...item,
            };
          }
          return null;
        })
        ?.filter(item => item !== null);

      console.log(dataObj, "dataObj")



      setWallet(dataObj || []);



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

  // const options = {
  //   chart: {
  //     id: 'line-chart',
  //   },

  //   stroke: {
  //     curve: 'smooth',
  //   },
  //   toolbar: {
  //     show: false,
  //   },
  //   zoom: {
  //     enabled: false,
  //   },
  // };


  // const options = {
  //   chart: {
  //     id: 'line-chart',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //   },
  //   toolbar: {
  //     show: false,
  //   },
  //   zoom: {
  //     enabled: false,
  //   },
  //   xaxis: {
  //     labels: {
  //       show: false, // Hide X axis labels
  //     },
  //     axisBorder: {
  //       show: false, // Hide X axis border
  //     },
  //     axisTicks: {
  //       show: false, // Hide X axis ticks
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       show: false, // Hide Y axis labels
  //     },
  //     axisBorder: {
  //       show: false, // Hide Y axis border
  //     },
  //     axisTicks: {
  //       show: false, // Hide Y axis ticks
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false, // Hide data labels
  //   },
  // };


  // const options = {
  //   chart: {
  //     id: 'line-chart',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //   },
  //   toolbar: {
  //     show: false,
  //   },
  //   zoom: {
  //     enabled: false,
  //   },
  //   xaxis: {
  //     labels: {
  //       show: false, // Hide X axis labels
  //     },
  //     axisBorder: {
  //       show: false, // Hide X axis border
  //     },
  //     axisTicks: {
  //       show: false, // Hide X axis ticks
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       show: false, // Hide Y axis labels
  //     },
  //     axisBorder: {
  //       show: false, // Hide Y axis border
  //     },
  //     axisTicks: {
  //       show: false, // Hide Y axis ticks
  //     },
  //   },
  //   grid: {
  //     show: false, // Hide grid lines
  //   },
  //   dataLabels: {
  //     enabled: false, // Hide data labels
  //   },
  // };


  // const options = {
  //   chart: {
  //     id: 'line-chart',
  //     toolbar: {
  //       show: false, // Hides the entire toolbar including toolbox items
  //     },
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //   },
  //   zoom: {
  //     enabled: false, // Disable zoom functionality
  //   },
  //   xaxis: {
  //     labels: {
  //       show: false, // Hide X axis labels
  //     },
  //     axisBorder: {
  //       show: false, // Hide X axis border
  //     },
  //     axisTicks: {
  //       show: false, // Hide X axis ticks
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       show: false, // Hide Y axis labels
  //     },
  //     axisBorder: {
  //       show: false, // Hide Y axis border
  //     },
  //     axisTicks: {
  //       show: false, // Hide Y axis ticks
  //     },
  //   },
  //   grid: {
  //     show: false, // Hide grid lines
  //   },
  //   dataLabels: {
  //     enabled: false, // Hide data labels
  //   },

  // };

  const options = {
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0, // Hides markers
          hover: {
            size: 0, // Hides hover effect on markers
          },
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis border line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: false, // Hide y-axis border line
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    colors: ['#DC8DF8'], // Fallback color
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical', // Or 'horizontal' depending on your design
        gradientToColors: ['#18C8FF'], // Ending color of the gradient
        stops: [0, 100], // Define how the colors transition
      },
    },
  };


  // const options = {
  //   chart: {
  //     id: 'line-chart',
  //     toolbar: {
  //       show: false,
  //     },
  //     zoom: {
  //       enabled: false,
  //     },
  //   },

  //   stroke: {
  //     curve: 'smooth',
  //   },
  //   xaxis: {
  //     labels: {
  //       show: false,
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       show: false,
  //     },
  //   },
  //   grid: {
  //     show: false,
  //   },
  //   tooltip: {
  //     enabled: false, // Disable tooltips
  //   },
  //   dataLabels: {
  //     enabled: false, // Disable data labels
  //   },
  // };

  const showMoreItems = () => {
    setVisibleItems((prevVisible) => prevVisible + 7);
  };
  return (
    <div className='BuyAndsellContainer' style={{ marginTop: "-100px" }}>
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
                  {/* {/ {wallet.slice(0, visibleItems).map((item, index) => ( /} */}
                  {wallet?.slice(0, visibleItems)?.map((item, index) => (
                    <tr key={index} className="TableRow" style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "60px",
                      overflow: "hidden",
                    }}>
                      <td style={{ background: "none", borderBottom: "none" }}
                   
                      >
                        <img
                          src={item?.image}
                          alt=""
                          width={25}
                          style={{ borderRadius: "50%" }}
                        />
                      </td>
                      <td className="table_data firstcol"
                         style={{ width: "50px"}}
                      >{item?.currency}</td>
                      <td className="table_data col_3"
                        style={{ width: "150px", textAlign: "left !important" }}
                      >{item?.last_price}</td>
                      {/* <td className="table_data col_4">
                        {item?.change >= 0 ? `+${item?.change}%` : `${item?.change}%`}
                      </td> */}
                      <td className="table_data col_4"
                        style={{
                          textAlign: "left !important",

                        }}
                      >
                        {item.change >= 0 ? (
                          <span style={{ color: "green" }}>
                            <FaArrowUp /> {item.change}%
                          </span>
                        ) : (
                          <span style={{ color: "red" }}>
                            <FaArrowDownLong />{item.change.toString().replace("-", "")}%
                          </span>
                        )}
                      </td>
                      <td className="table_data ForMobile">
                        {/* {/ <img src={linebarchart} alt="Chart" /> /} */}
                        <ReactApexChart
                          options={options}
                          series={
                            [
                              {
                                name: 'Sales',
                                data: [item?.low, item?.high, item?.base_volume, item?.change],
                              },
                            ]
                          }
                          type="line"
                          height={80}
                          width={100}
                        />
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
        {visibleItems < wallet.length && (
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










