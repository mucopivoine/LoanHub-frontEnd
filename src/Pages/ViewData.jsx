import React, { useState } from 'react';
import Sidemenu from '../Components/Sidemenu';

function ViewData() {
  const [fullName, setFullName] = useState('');
  const [workSchool, setSchoolName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [teacher_ID, setTeacherId] = useState('');
  const [teacherId, setTeacherID] = useState('');
  const [bankkAccountNumber, setBankNumber] = useState('');
  const [amountRequested, setLoanAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [monthlySalary, setMonthlyIncome] = useState('');
  const [proofOfEmployment, setProofOfEmployment] = useState(null);
  const [copyOfNationalId, setCopyOfNationalId] = useState(null);

  const handleProofOfEmploymentUpload = (e) => {
    setProofOfEmployment(e.target.files[0]);
  };

  const handleCopyOfNationalIdUpload = (e) => {
    setCopyOfNationalId(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('workSchool', workSchool);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('teacher_ID', teacher_ID);
    formData.append('teacherId', teacherId);
    formData.append('bankkAccountNumber', bankkAccountNumber);
    formData.append('amountRequested', amountRequested);
    formData.append('purpose', purpose);
    formData.append('monthlySalary', monthlySalary);

    if (proofOfEmployment) {
      formData.append('proofOfEmployment', proofOfEmployment);
    }

    if (copyOfNationalId) {
      formData.append('copyOfNationalId', copyOfNationalId);
    }

    // Debug: Log FormData entries
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await fetch('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Loan Application Submitted Successfully');
        // Handle successful submission (e.g., show a success message, clear form)
      } else {
        const errorData = await response.json();
        console.error('Loan Application Submission Failed', errorData);
        // Handle failed submission (e.g., show an error message)
      }
    } catch (error) {
      console.error('An error occurred while submitting the loan application:', error);
      // Handle error during submission
    }
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
                <label className="block text-gray-700">TeacherId</label>
                <input
                  type="text"
                  value={teacherId}
                  onChange={(e) => setTeacherID(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>
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
                  value={workSchool}
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
                  type="text"
                  value={teacher_ID}
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Bank Account Number</label>
                <input
                  type="text"
                  value={bankkAccountNumber}
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
                  value={amountRequested}
                  onChange={(e) => setLoanAmount(e.target.value)}
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
                value={monthlySalary}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Proof of employment</label>
              <input
                type="file"
                onChange={handleProofOfEmploymentUpload}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Copy of national Id</label>
              <input
                type="file"
                onChange={handleCopyOfNationalIdUpload}
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
