import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';

const cookie = document.cookie.split('jwt=')[1];

const LoanResponse = () => {
  const { id } = useParams();
  const [loanResponse, setLoanResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanResponse = async () => {
      try {
        const response = await axios.post(
          `https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/response/${id}`,
          {}, 
          {
            headers: {
              'Authorization': `Bearer ${cookie}`
            },
            withCredentials: true
          }
        );
        console.log('Cookie:', cookie);
        console.log('Response data:', response.data);

        if (response.data.loan) {
          setLoanResponse(response.data.loan);
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

    fetchLoanResponse();
  }, [id]);

  if (loading) {
    return <div className="mt-32 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="mt-32 text-center text-red-500">{error}</div>;
  }

  if (!loanResponse) {
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
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Reply Message</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanResponse.reply}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Loan Amount Approved</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanResponse.approvedAmount|| "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Interest Rate</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanResponse.interestRate || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Repayment Period</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanResponse.repaymentPeriod || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Monthly Payment</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanResponse.monthlyRepaymentAmount || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Loan Status</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{loanResponse.loanStatus || "Not available"}</td>
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

export default LoanResponse;
