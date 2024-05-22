import React from 'react';
import PieChart from '../Components/Graphs/PieChart';
import Graph from '../Components/Graphs/Graph';
import 'chart.js/auto';
import LoansProfilePieChart from '../Data/LoansProfilePieChart';

const LoanManagement = () => {
  const graphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Loan Applications',
        data: [10, 20, 15, 25, 30, 20], // Sample data for loan applications over months
        fill: false,
        borderColor: 'blue',
      },
    ],
  };
  return (
    <div className='flex'>
      <div className='w-[50%] ml-[20%]'>
        <h3 className='text-lg font-semibold'>Loan Applications Trend</h3>
        <Graph data={graphData} />
      </div>
      <div className='mt-[90px]'>
        <h3 className='text-lg font-semibold'>Loan Status</h3>
        <LoansProfilePieChart />
      </div>
    </div>
  );
};

export default LoanManagement;
