

// import PieChart from '../Components/Graphs/PieChart';


import Pie from '../Pages/Pie'

import Graph from '../Components/Graphs/Graph';
import 'chart.js/auto';
import LoansProfilePieChart from '../Data/LoansProfilePieChart';

const LoanManagement = () => {
  const pieChartData = {
    labels: ['Approved Loans', 'Pending Loans', 'Rejected Loans'],
    datasets: [
      {
        label: 'Loan Status',
        data: [30, 20, 10], 
        backgroundColor: ['#BB67FF', '#FC929D', 'rgb(248, 213, 155)'],
      },
    ],
  };

  const graphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Loan Applications',
        data: [10, 20, 15, 25, 30, 20], 
        fill: false,
        borderColor: 'blue',
      },
    ],
  };
  return (

    

    <div className='mx-auto w-full h-[50vh] flex flex-row mb-56 gap-6  '>
      <div className=' ml-[20%] w-[200%] '>
        <h3 className='mb-28 font-bold'>LOAN APPLICATION TREND</h3>
        <Graph data={graphData} />
      </div>
      
      <div className='w-[100%] mt-36 '>
        <h3 className='font-bold'>LOAN STATUS</h3>
        <Pie data={pieChartData} />

      </div>
    </div>
  );
};

export default LoanManagement;
