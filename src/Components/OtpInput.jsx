import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const OtpInput = ( length = 7, onOtpSubmit = () => {}, email ) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numeric values

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const onOtpVerify = async (combinedOtp) => {
    try {
      const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/teacher/verifyotp', {
        otp: combinedOtp,
      }, {
        headers: {
          "Content-Type": 'application/json',
        },  withCredentials: true,
      });

      console.log(response.data);

      setTimeout(() => {
        navigate('/auth/signin');
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    const combinedOtp = otp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
      onOtpVerify(combinedOtp);
    }
  };

  return (
    <div className='mx-auto items-center flex-col justify-center flex bg-gray-100 h-[60vh]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=''
      >
        <div className='relative flex flex-col items-center border-2 mt-24 p-12 bg-white'>
          <div className=''>
            <h1 className='mb-5 text-xl font-bold'>Enter code sent to {email}</h1>
          </div>
          <div>
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(input) => inputRefs.current[index] = input}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className='w-[50px] h-[50px] m-[5px] text-center text-xl border-2'
                maxLength="1" // Limit input length to 1 character
              />
            ))}
          </div>
          <div>
            <button
              type="button"
              className='border-2 text-white w-50 bg-red-500 px-[100px] mx-auto mt-5 p-2 rounded-xl'
              onClick={handleSubmit}
            >
              Submit OTP
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OtpInput;
