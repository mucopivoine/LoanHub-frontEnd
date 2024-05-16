import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  return (
    <div className='mt-10 h-[300px]'>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
