import React ,{ useState} from 'react'
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Sidemenu from '../Components/Sidemenu';
import { Bar, Line } from 'react-chartjs-2';

function Manager() {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expenses',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [45, 39, 60, 61, 36, 35, 20],
      },
    ],
  };
  // const options = {
  //   maintainAspectRatio: false,
  //   scales: {
  //     y: {
  //       type: 'linear',
  //       beginAtZero: true,
  //     },
  //   },
  // }
  // In your Bar and Line components, add the options prop with the configured scales


  return (
    <>
    <Sidemenu/>
    <div className="container">
      <h1>Welcome, Bank Manager!</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Revenue Overview</h2>
          <Bar
            data={barChartData}
            width={100}
            height={50}
            // options={options}
          />
        </div>
        <div className="col-md-6">
          <h2>Expenses Overview</h2>
          <Line
            data={lineChartData}
            width={100}
            height={50}
            // options={options}
             
          />
        </div>
      </div>
      {/* Other dashboard components and functionalities */}
    </div>
    </>
  )
}

export default Manager