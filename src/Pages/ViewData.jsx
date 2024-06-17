import React, { useState } from 'react';
import Sidemenu from '../Components/Sidemenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// Import custom CSS for background obscuring


function ViewData() {
  const [fullName, setFullName] = useState('');
  const [workSchool, setSchoolName] = useState('');
  const [email, setEmail] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankAccountNumber, setBankNumber] = useState('');
  const [amountRequested, setLoanAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [monthlySalary, setMonthlyIncome] = useState('');
  const [proofOfEmployment, setProofOfEmployment] = useState(null);
  const [copyOfNationalId, setCopyOfNationalId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();
  const handleProofOfEmploymentUpload = (e) => {
    setProofOfEmployment(e.target.files[0]);
  };

  const handleCopyOfNationalIdUpload = (e) => {
    setCopyOfNationalId(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('workSchool', workSchool);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('bankAccountNumber', bankAccountNumber);
    formData.append('amountRequested', amountRequested);
    formData.append('purpose', purpose);
    formData.append('maritalStatus', maritalStatus.toLowerCase());
    formData.append('monthlySalary', monthlySalary);

    if (proofOfEmployment) {
      formData.append('proofOfEmployment', proofOfEmployment);
    }

    if (copyOfNationalId) {
      formData.append('copyOfNationalId', copyOfNationalId);
    }

    const token = document.cookie.split('jwt=')[1];

    try {
      const response = await fetch('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
        body: formData,
      });


      if (response.ok) {
        toast.success('Loan Application Submitted Successfully', {
          className: 'toast-message',
          onClose: () => {

            setFullName('');
            setSchoolName('');
            setEmail('');
            setMaritalStatus('');
            setPhoneNumber('');
            setBankNumber('');
            setLoanAmount('');
            setPurpose('');
            setMonthlyIncome('');
            setProofOfEmployment(null);
            setCopyOfNationalId(null);
          },
        });
        setTimeout(() => {
          setIsLoading(false); 
          navigate(`/layout/teacherloans`);
        }, 3000);
      } else {
        const errorData = await response.json();
        toast.error('Loan Application Submission Failed', errorData);
        console.error('Loan Application Submission Failed', errorData);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while submitting the loan application:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Sidemenu />
      <div className={`flex justify-center items-center mt-[50px] ${ToastContainer.hasToast ? 'background-blur' : ''}`}>
        <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl mt-[50px]">
          <h1 className="text-2xl font-bold text-center mr-5 mb-7">Loan Application Form</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-wrap ">
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
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Bank Account Number</label>
                <input
                  type="text"
                  value={bankAccountNumber}
                  onChange={(e) => setBankNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Marital status</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                >
                  <option value="" disabled>Select your status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full">
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
              className="w-full p-2 bg-blue-900 text-white rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit Loan Application'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ViewData;
