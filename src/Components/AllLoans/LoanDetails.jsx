import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        console.log(cookie);
        console.log(response.data); // Log response data
        setLoanDetails(response.data);
      } catch (error) {
        console.error(error); // Log the error object
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
    <div className="py-28 px-2 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-950">
      <h2 className="text-2xl font-bold mb-4 text-gray-400">Loan Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-slate-50 border border-gray-200"key={LoanDetails._id}>
          <tbody>
            <tr>
              <th className="py-3 px-4 sm:px-6 lg:px-8 bg-white font-bold text-left">Field</th>
              <th className="py-3 px-4 sm:px-6 lg:px-11 bg-white font-bold text-left">Value</th>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Names</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">{loanDetails.fullName || "Not available"}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoanDetails;
