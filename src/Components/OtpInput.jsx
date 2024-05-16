import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 


const OtpInput = ({ length = 7, onOtpSubmit = () => {}, email }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    // if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
      onOtpVerify(combinedOtp);
    }

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };
  const onOtpVerify = async (otp) => {
    try {
      const response = await axios.post('https://umwarimu-loan-hub.onrender.com/api/teacher/verifyotp', {
        email: email, 
        otp: otp,
      });
      console.log('OTP Verification Response:', response.data);
       console.log('otp verified')
    } catch (error) {
      console.error('Error verifying OTP:', error);
      console.log('error occured on otp')
    }
  };

  return (
    <div className='mx-auto items-center flex-col justify-center flex  bg-gray-100 h-[60vh]' >
      <motion.div // Animate the form container
        initial={{ opacity: 0, y: 50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 0.5 }} // Animation duration
        className=''
      ><div className=' relative flex flex-col items-center border-2 mt-24 p-12 bg-white '>
        <div className=''>
        <h1 className='mb-5 text-xl font-bold'>Enter OTP sent to {email}</h1>
        </div>
        <div>
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(input) => (inputRefs.current[index] = input)}
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className='w-[50px] h-[50px] m-[5px] text-center text-xl border-2'
            />
          ))}
        </div>
        <div>
          <Link to="/auth/signin">
            <button type="button" className='border-2 text-white w-50 bg-red-500 px-[100px] mx-auto mt-5 p-2 rounded-xl' onClick={() => onOtpSubmit(otp.join(""))}>Submit OTP</button>
          </Link>
        </div>
        </div>
      </motion.div>
      
    </div>
  );
};
export default OtpInput