


// import PieChart from '../Components/Graphs/PieChart';


import Pie from '../Pages/Pie'

import Graph from '../Components/Graphs/Graph';
import 'chart.js/auto';

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
  

  
    <div className="mx-auto w-full h-[60vh] flex flex-col lg:flex-row gap-5 ">
      <div className="lg:w-[80%] ml-72 ">
        <h3 className="font-bold text-center lg:text-left">LOAN APPLICATION TREND</h3>
        <Graph data={graphData} />
      </div>
      <div className="w-full lg:w-[70%] lg:mt-32 ">
        <h3 className="font-bold text-center lg:text-left">LOAN STATUS</h3>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

export default LoanManagement;
