import React from 'react';

function MostRequestedLoans() {
  const loansData = [
    { type: "Short term loans", count: 120 },
    { type: "Emergency loans", count: 98 },
    { type: "Development loans", count: 85 },
    { type: "Long term Loans", count: 72 },
  ];

  return (
    <div className="bg-gradient-to-r from-navy-green to-navy-blue rounded-lg p-8 shadow-xl mt-10">
      <h3 className="text-3xl font-semibold text-black mb-8">Most Requested Loans</h3>
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
