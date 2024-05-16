import React from 'react';
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
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
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
        borderColor: '#4CAF50',
      },
    ],
  };

  return (
    <div className='mx-auto  h-[50vh] flex flex-row'>
      <div className=' ml-[20%] w-[70%]'>
        <h3>Loan Applications Trend</h3>
        <Graph data={graphData} />
      </div>
      <h2>Loan Management Dashboard</h2>
      <div className=' w-full ml-[]'>
        <h3>Loan Status</h3>
        <PieChart data={pieChartData}  />
      </div>
      
    </div>
  );
};

export default LoanManagement;
