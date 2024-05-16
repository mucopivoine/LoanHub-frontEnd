import React from 'react';
import { Line } from 'react-chartjs-2';

const LoanPaymentChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Loan Rate',
        data: [1000, 1500, 2000, 2500, 3000, 3500], // Sample loan rates
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Payment Rate',
        data: [500, 800, 1200, 1500, 1800, 2000], // Sample payment rates
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1,
      },
      {
        label: 'Interest Rate',
        data: [300, 400, 500, 600, 700, 800], // Sample interest rates
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Loan, Payment, and Interest Rates</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LoanPaymentChart;
