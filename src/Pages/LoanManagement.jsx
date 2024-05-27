import Pie from '../Pages/Pie';
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
    <div className="mx-auto ml-[120px] lg:w-[85%] flex flex-col lg:flex-row gap-5">
      <div className="lg:w-[70%] lg:ml-[150px] sm:w-[70%] sm:ml-[140px]"> {/* Adjust margin-left to accommodate your sidebar width */}
        <Graph data={graphData} />
      </div>
      <div className=" lg:mt-20 "> {/* Adjust margin-left to accommodate your sidebar width */}
        <h3 className="font-bold text-center lg:text-left">LOAN STATUS</h3>
        <Pie data={pieChartData} />
      </div>

    </div>
  );
};

export default LoanManagement;
