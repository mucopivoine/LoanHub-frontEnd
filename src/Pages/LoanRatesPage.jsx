import React from 'react';
import BarChart from './Barchart';

const LoanRatesPage = () => {
  // Sample data for loan rates, payment rates, and interest rates
  const loanRates = [1000, 2000, 1500, 1800, 2500];
  const paymentRates = [500, 800, 600, 700, 900];
  const interestRates = [200, 300, 250, 280, 350];

  return (
    <div>
      <h2>Loan Rates Overview</h2>
      <BarChart
        loanRates={loanRates}
        paymentRates={paymentRates}
        interestRates={interestRates}
      />
    </div>
  );
};

export default LoanRatesPage;
