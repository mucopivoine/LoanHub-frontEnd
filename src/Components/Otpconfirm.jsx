import React, { useState } from 'react';
import OtpInput from './OtpInput';
import Home from './Home';
import { motion } from 'framer-motion'; 

const Otpconfirm = () => {
  const [email, setEmail] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      alert('Email must be in the format name@gmail.com');
      return;
    }

    // Call backend API to send OTP to the email
    setShowOtpInput(true);
  };
  const handleOtpSubmit = (otp) => {
    console.log('OTP submitted:', otp);
    // Handle OTP verification logic here, such as making an API call to verify the OTP
  };

  return (
    <>
     
      <div className='mx-auto items-center justify-center flex flex-col h-[90vh]'>
      <motion.div // Animate the form container
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 0.5 }} // Animation duration
          className=''
        >
        <div className='relative flex flex-col items-center border-2 mb-3 bg-white'>
          <div className='mb-5'>
            <h1 className='mb-5 text-xl font-bold'>Please Enter Email for Verification</h1>
          </div>
          <div>
            {!showOtpInput ? (
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder='Enter Email Address'
                  className='p-3 mr-3 items-center flex border-2 border-gray-500 w-full'
                />
                <div>
                <button
                  type="submit"
                  className='bg-red-500 text-white w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5'
                >
                  Send OTP
                </button>
                </div>
              </form>
            ) : (
              <div>
                <p className='text-gray-300 mb-5'>Enter OTP sent to {email}</p>
                <OtpInput length={6} onOtpSubmit={handleOtpSubmit} />
              </div>
            )}
          </div>
        </div>
        </motion.div>
      </div>
    </>
  );
};

export default Otpconfirm;
