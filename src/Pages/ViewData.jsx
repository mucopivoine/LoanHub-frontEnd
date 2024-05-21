import React, { useState } from 'react';
import Sidemenu from '../Components/Sidemenu';

function ViewData() {
  const [fullName, setFullName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [banknumber, setBankNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [repaymentPeriod, setRepaymentPeriod] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [documents, setDocuments] = useState(null);

  const handleFileUpload = (e) => {
    setDocuments(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to the server
    console.log('Loan Application Submitted', {
      fullName,
      schoolName,
      email,
      phoneNumber,
      teacherId,
      banknumber,
      maritalStatus,
      amountRequested,
      purpose,
      repaymentPeriod,
      monthlySalary,
      documents
    });
  };

  return (
    <>
      <Sidemenu />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-6">Teacher Account Details</h1>
          <h2 className="text-xl font-bold mb-4">Loan Application Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">School Name</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
            </div> 
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Teacher Id</label>
                <input
                  type="teacherId"
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Bank Account Number</label>
                <input
                  type="banknumber"
                  value={banknumber}
                  onChange={(e) => setBankNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Loan Amount Requested</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Repayment Period</label>
                <input
                  type="text"
                  value={repaymentPeriod}
                  onChange={(e) => setRepaymentPeriod(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Purpose of the Loan</label>
              <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Monthly Income</label>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Proof of employment</label>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Copy of national Id</label>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />

            </div>
            
            <button
              type="submit"
              className="w-full p-2 bg-red-500 text-white rounded"
            >
              Submit Loan Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ViewData;
