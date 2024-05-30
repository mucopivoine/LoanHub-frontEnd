import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';

const cookie = document.cookie.split('jwt=')[1];

const LoanDetails = () => {
  const { id } = useParams();
  const [loanDetails, setLoanDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        const response = await axios.get(`https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getOne/${id}`, {
          headers: {
            'Authorization': `Bearer ${cookie}`
          },
          withCredentials: true
        });
        console.log('Cookie:', cookie);
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

  return (
    <>
      <div>
        <Sidebar />
        <div className='w-[60%] ml-[20%] mt-[100px]'>
          <div>
            <h2 className="text-2xl font-bold mb-4">Loan Details</h2>
            <div className="overflow-x-auto">
              <table className="w-[80%] bg-slate-50 border border-gray-200">
                <tbody>
                  <tr>
                    <th className="py-3 px-4 bg-white font-bold text-left">Field</th>
                    <th className="py-3 px-4 sm:px-6 lg:px-11 bg-white font-bold text-left">Value</th>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Names</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.fullName} </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Email</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.email || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Phone Number</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.phoneNumber || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">School Name</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.workSchool || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Amount Requested</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.amountRequested || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Monthly Salary</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.monthlySalary || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Purpose of the loan</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.purpose || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Bank Account Number</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.bankkAccountNumber || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Proof of Employment</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.proofOfEmployment || "Not available"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoanDetails;
