import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Sidebar from '../Sidebar';

const cookie = document.cookie.split('jwt=')[1];

const LoanResponse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loanResponse, setLoanResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    reply: '',
    approvedAmount: '',
    interestRate: '',
    repaymentPeriod: '',
    monthlyRepaymentAmount: '',
    loanStatus: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'loanStatus' ? value.toLowerCase() : value
    });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          `https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/response/${id}`,
          formData, 
          {
            headers: {
              'Authorization': `Bearer ${cookie}`
            },
            withCredentials: true
          }
        );
        console.log('Cookie:', cookie);
        console.log('Response data:', response.data);
          toast.success("Response sent successfully!");

          setTimeout(() => {
            setIsLoading(false); 
            navigate(`/admin/allLoans`);
          }, 3000); 
      
      } catch (error) {
        toast.error("Failed to send response.");
        setIsLoading(false); 
        console.log(error);
       
      }
    };

  
  return (
    <>
     
      <Sidebar/>
      <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Loan Reply</h2>
        {formSubmitted ? (
          <p className="text-green-500 text-center mb-4">Response sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Reply Message</label>
              <input
                type="text"
                name="reply"
                value={formData.reply}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Loan Amount Approved</label>
              <input
                type="text"
                name="approvedAmount"
                value={formData.approvedAmount}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Interest Rate</label>
              <input
                type="text"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Repayment Period</label>
              <input
                type="text"
                name="repaymentPeriod"
                value={formData.repaymentPeriod}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Monthly Payment</label>
              <input
                type="text"
                name="monthlyRepaymentAmount"
                value={formData.monthlyRepaymentAmount }
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Loan Status</label>
              <select 
                name="loanStatus"
                value={formData.loanStatus}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="" disabled>Select Loan Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="denied">Denied</option>
              </select>
            </div>
            <button
              type="Send"
              className="mt-4 w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800"
            >
              Send
            </button>
          </form>
        )}
      </div>
      <ToastContainer/>
      </>
  );
};

export default LoanResponse;
