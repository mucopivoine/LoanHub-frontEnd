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
      setEmailErr('Email must be in format name@gmail.com');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailErr('Email is invalid');
      valid = false;
    } else {
      setEmailErr('');
    }
    return valid;
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      try {
        let endpoint = '';
        if (localStorage.getItem('user') === '"teacher"') {
          endpoint = 'https://umwarimu-loan-hub-api.onrender.com/api/teacher/forgot';
        } else if (localStorage.getItem('user') === '"manager"') {
          endpoint = 'https://umwarimu-loan-hub-api.onrender.com/api/manager/forgot';
        } else if (localStorage.getItem('user') === '"admin"') {
          endpoint = 'https://umwarimu-loan-hub-api.onrender.com/api/user/forgot';
        } else {
          // Default to teacher endpoint if role is not specified
          endpoint = 'https://umwarimu-loan-hub-api.onrender.com/api/teacher/forgot';
        }
    
        const response = await axios.post(endpoint,
          { email: email },
          {
            headers: {
              'Content-Type': 'application/json',
            },  withCredentials: true,
          }
        );
        console.log(response.data);
        toast.success('Email sent successfully! Please check your email for the reset link.');
        // setTimeout(() => {
        //   navigate('/auth/reset-password');
        // }, 3000);
      } catch (error) {
        if (error.response) {
          console.log('Error response:', error.response.data);
          setFetchError('Failed to send email. Please try again.');
        } else if (error.request) {
          console.log('Error request:', error.request);
          setFetchError('Network error. Please check your internet connection.');
        } else {
          console.log('Error', error.message);
          setFetchError('An unexpected error occurred. Please try again.');
        }
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
