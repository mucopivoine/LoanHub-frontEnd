// import React from 'react';
import PieChart from '../Components/Graphs/PieChart';
import Graph from '../Components/Graphs/Graph';
import 'chart.js/auto';

const LoanManagement = () => {
  // Sample data for the pie chart and graph
  const pieChartData = {
    labels: ['Approved Loans', 'Pending Loans', 'Rejected Loans'],
    datasets: [
      {
        label: 'Loan Status',
        data: [30, 20, 10], // Sample data percentages
        backgroundColor: ['#BB67FF', '#FC929D', 'rgb(248, 213, 155)'],
      },
    ],
  };

  const graphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Loan Applications',
        data: [10, 20, 15, 25, 30, 20], // Sample data for loan applications over months
        fill: false,
        borderColor: '#BB67FF',
      },
    ],
  };

  return (
    <div className='mx-auto  h-[50vh] flex flex-row mb-32 w-full'>
      <div className=' ml-[20%] w-[40%]'>
        <h3 className='text-center mt-[50px] text-2xl font-semibold'>Loan Applications Trend</h3>
        <Graph data={graphData} />
      </div>
      {/* <h2>Loan Management Dashboard</h2> */}
      <div className='ml-[70px]'>
        <h3 className='text-center mt-[50px] text-2xl font-semibold'>Loan Status</h3>
        <PieChart data={pieChartData} />
      </div>
      
    </div>
  );
};

export default LoanManagement;
