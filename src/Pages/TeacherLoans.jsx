import React, { useState } from 'react';
import Sidemenu from '../Components/Sidemenu';
import TeacherProfile from '../Components/TeacherProfile';
import { Link } from 'react-router-dom';

const loanTypes = [
  {
    type: 'Short Term Loan',
    description: 'Loans that need to be repaid within a year.',
    rate: '5%',
    duration: 'Up to 1 year'
  },
  {
    type: 'Long Term Loan',
    description: 'Loans with repayment periods longer than one year.',
    rate: '10%',
    duration: '1 to 10 years'
  },
  {
    type: 'Emergency Loan',
    description: 'Loans for urgent and unexpected expenses.',
    rate: '7%',
    duration: 'Up to 6 months'
  },
  {
    type: 'Development Loan',
    description: 'Loans for projects aimed at development and growth.',
    rate: '8%',
    duration: '5 to 15 years'
  }
];

function TeacherLoans() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const handleRequestLoan = () => {
    // Handle loan request logic here
    console.log('Loan requested');
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidemenu className="lg:w-1/5" />
      <div className="flex-grow flex flex-col lg:flex-row justify-center items-center lg:items-start min-h-screen p-5 lg:ml-[20%]">
        <div className="w-full p-7">
          <h1 className="text-2xl font-bold mb-4 text-center lg:text-left">Available Loans</h1>
          <div className="grid grid-cols-1 mx-auto  lg:grid-cols-2 gap-10">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className={`relative bg-white p-10 lg:p-20 rounded shadow-md transition duration-300 cursor-pointer ${clickedIndex === index ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleClick(index)}
              >
                <h2 className="text-xl lg:text-2xl font-bold mb-2">{loan.type}</h2>
                <p className="text-gray-700 mb-2">{loan.description}</p>
                <p className="text-gray-700"><strong>Rate:</strong> {loan.rate}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {loan.duration}</p>
                {clickedIndex === index && (
                  <div className="absolute inset-0 bg-white flex flex-col justify-center items-center transition duration-300">
                    <p className="mb-4 text-lg font-semibold text-black">Click below to request this loan</p>
                    <Link to="/layout/viewdata"><button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Request Loan
                    </button></Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5 p-4">
          <TeacherProfile />
        </div>
      </div>
    </div>
  );
}
export default TeacherLoans;
