import React, { useState } from 'react';
import axios from 'axios';
import OtpInput from './OtpInput';
import Home from './Home';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      alert('Email must be in the format name@gmail.com');
      return;
    }

    try {
      const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/teacher/forgot', { email });
      console.log('Response from API:', response.data);
      setShowOtpInput(true);
    } catch (error) {
      console.error('Error sending email:', error);
     
    }
  };

  const handleOtpSubmit = (otp) => {
    console.log('OTP submitted:', otp);
  };
  const handleOtpVerify = async (otp) => {
    try {
      const response = await axios.post ('https://umwarimu-loan-hub-api.onrender.com/api/teacher/verifyotp', {
        email: email, 
        otp: otp,
      });
      console.log('OTP Verification Response:', response.data);
    } catch(error) {
      console.log('Error verifying OTO:', error);
    }
  }

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
              <h1 className='mb-5 text-xl font-bold'>Please Enter Your Email for Verification</h1>
            </div>
            <div>
              {!showOtpInput ? (
                <form onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder='Enter Email Address'
                    className='p-3 mr-3 items-center flex border-2 border-gray-300 w-full'
                  />
                  <div>
                  <Link to="/auth/otpinput"> <button
                      type="submit"
                      className='bg-red-500 text-white w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5' onClick={handleEmailSubmit}
                    >
                      Send OTP
                    </button></Link> 
                  </div>
                </form>
              ) : (
                <div>
                  <p className='text-xl font-semibold text-gray-500 mb-5'>Enter OTP sent to {email}</p>
                  <OtpInput length={7} onOtpSubmit={handleOtpSubmit} email={email} onOtpVerify={handleOtpVerify} />

                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Forgot;
