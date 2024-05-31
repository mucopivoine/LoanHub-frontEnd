import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const cookie = document.cookie.split('jwt=')[1];

function TeacherResponse() {
  const { id } = useParams();
  const [loanDetails, setLoanDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        console.log('Fetching loan details for ID:', id);
        const response = await axios.get(`https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getOne/${id}`, {
          headers: {
            'Authorization': `Bearer ${cookie}`
          },
          withCredentials: true
        });

        console.log('Response data:', response.data);

        if (response.data.loan) {
          setLoanDetails(response.data.loan);
        } else {
          setError('Loan details not found');
        }
      } catch (error) {
        console.error('Error fetching loan details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

 fetchLoanDetails();
   
  }, [id]);

  if (loading) {
    return <div className="mt-32 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="mt-32 text-center text-red-500">{error}</div>;
  }

  if (!loanDetails) {
    return <div className="mt-32 text-center">Loan details not found</div>;
  }

  const [modalContent, setModalContent] = useState(null);

  const openModal = (teacher) => {
    setModalContent(teacher);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div>
      <div className="container bg-white">
        <h2 className="text-4xl font-bold text-center font-serif mt-32">
          Response
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-10">
          <div className="flex flex-col justify-between h-full group transform hover:translate-y-[-10px] transition duration-300 max-w-lg">
            <div className="bg-white p-8 rounded-lg shadow-gray-500 shadow-lg transition hover:border-blue-500/50 hover:shadow-blue-500/50">
              <h3 className="text-2xl font-bold text-center mb-4 font-serif animate-pulse">
                Response
              </h3>
              <div className="text-gray-600 text-center">
                <p>Empowering educators through accessible loan services, supporting their personal and professional growth.</p>
                <p>Names</p>
                <p>Email lo</p>
              </div>
            </div>
          </div>
        </div>

        {modalContent && (
          <div className="overflow-x-auto">
            <table className="w-[80%] bg-slate-50 border border-gray-200">
              <tbody>
                <tr>
                  <th className="py-3 px-5 bg-white font-bold text-left">Field</th>
                  <th className="py-3 px-4 sm:px-6 lg:px-11 bg-white font-bold">Value</th>
                </tr>
                <tr>
                  <td className="py-3 px-5 sm:px-6 lg:px-8 font-bold">Email</td>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.email || "Not available"}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Phone Number</td>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.phoneNumber || "Not available"}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">School Name</td>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.workSchool || "Not available"}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Amount Requested</td>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.amountRequested || "Not available"}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Monthly Salary</td>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.monthlySalary || "Not available"}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Purpose of the loan</td>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.purpose || "Not available"}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Bank Account Number</td>
                  <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.bankAccountNumber || "Not available"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherResponse;
