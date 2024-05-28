import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgotps = () => {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [fetchError, setFetchError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid = () => {
    let valid = true;
    if (!email.trim()) {
      setEmailErr('Email must be in the format name@gmail.com');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailErr('Email is invalid');
      valid = false;
    } else {
      setEmailErr('');
    }
    return valid;
  };

  const forgotEndpoints = [
    'https://umwarimu-loan-hub-api.onrender.com/api/user/forgot',
    'https://umwarimu-loan-hub-api.onrender.com/api/teacher/forgot',
    'https://umwarimu-loan-hub-api.onrender.com/api/manager/forgot',
  ];

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      let anySuccess = false;
      let errorMessages = [];

      for (const endpoint of forgotEndpoints) {
        try {
          console.log(`Submitting email to endpoint: ${endpoint}`);
          const response = await axios.post(endpoint, { email }, {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          });
          console.log(`Response from ${endpoint}:`, response.data);
          anySuccess = true;
          break; // Stop after the first successful request
        } catch (error) {
          if (error.response) {
            console.log(`Error response from ${endpoint}:`, error.response.data);
            if (error.response.status === 404) {
              errorMessages.push('Email not registered.');
            } else if (error.response.status === 500) {
              errorMessages.push('Server error. Please try again later.');
            } else {
              errorMessages.push('An unexpected error occurred. Please try again.');
            }
          } else if (error.request) {
            console.log(`Error request from ${endpoint}:`, error.request);
            errorMessages.push('No response from server. Please check your network connection.');
          } else {
            console.log(`Error from ${endpoint}:`, error.message);
            errorMessages.push('An unexpected error occurred. Please try again.');
          }
        }
      }

      if (anySuccess) {
        toast.success('Email sent successfully! Please check your email for the reset link.');
      } else {
        setFetchError(errorMessages.join(' '));
        toast.error(errorMessages.join(' ') || 'Failed to send email. Please try again.');
      }
    }
  };

  return (
    <>
      <div className='mx-auto items-center justify-center flex flex-col h-[80vh] bg-gray-100'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <div className='relative flex flex-col items-center border-2 mb-3 p-12 bg-white '>
            <div className='mb-5'>
              <h1 className='mb-5 text-xl font-bold'>Enter your email</h1>
            </div>
            <div>
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter Email Address'
                  className='p-3 mr-3 items-center flex border-2 border-gray-300 w-full'
                />
                {emailErr && (<p className='text-red-500 italic text-xs'>{emailErr}</p>)}
                {fetchError && (<p className='text-red-500 italic text-xs'>{fetchError}</p>)}
                <div>
                  <button
                    type="submit"
                    className='bg-red-500 text-white w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5'
                  >
                    Send email
                  </button>
                </div>
              </form>
              <div></div>
            </div>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Forgotps;
