import React from 'react';

function MostRequestedLoans() {
  const loansData = [
    { type: "Personal Loan", count: 120 },
    { type: "Home Loan", count: 98 },
    { type: "Car Loan", count: 85 },
    { type: "Education Loan", count: 72 },
  ];

  return (
    <div className="bg-gradient-to-r from-navy-green to-navy-blue rounded-lg p-8 shadow-xl w-full sm:w-3/5 md:w-2/5 lg:w-1/3 mt-10">
      <h3 className="text-3xl font-semibold text-white mb-8">Most Requested Loans</h3>
      <ul>
        {loansData.map((loan, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-4 px-6 mb-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50"
          >
            <span className="text-xl text-navy-green font-bold">{loan.type}</span>
            <span className="text-2xl text-navy-blue font-bold">{loan.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MostRequestedLoans;
