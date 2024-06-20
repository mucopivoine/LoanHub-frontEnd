import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Barnav from '../Barnav';

const cookie = document.cookie.split('jwt=')[1];

const Mngdetails = () => {
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
      <Barnav />
      <div className="w-[80%] ml-auto mr-auto mt-24 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Loan Details</h2>
          <Link to="mngresponse">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Response
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-50 border border-gray-200 rounded-lg">
            <tbody>
              <tr>
                <th className="py-3 px-5 bg-white font-bold text-left">Field</th>
                <th className="py-3 px-4 sm:px-6 lg:px-11 bg-white font-bold">Value</th>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Names</td>
                <td className="py-3 px-4 sm:px-6 lg:px-8 text-center">{loanDetails.fullName}</td>
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
              <tr>
                <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Proof of Employment</td>
                <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.proofOfEmployment || "Not available"}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">National ID</td>
                <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.copyOfNationalId || "Not available"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Mngdetails;
