import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reset() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid = () => {
    const errors = {};
    let valid = true;

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      valid = false;
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm entered password';
      valid = false;
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = async (e) => {
    e.preventDefault();
    if (isValid()) {
      try {
        
        const token = searchParams.get('token');
                 console.log("Token:", token); 
        const response = await axios.post(
          `https://umwarimu-loan-hub-api.onrender.com/api/user/resetpassword/${token}`,
          {
            email: formData.email,
            newPassword: formData.password,
            confirm: formData.confirmPassword,
          },
          {
            headers: {
              "Content-Type": 'application/json',
            },
          }
        );
        console.log('OTP Verification Response:', response.data); 
        toast.success('Password reset was successful. Redirecting...');
        setTimeout(() => {
          navigate('/auth/signin');
        }, 3000);
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.response?.data?.message || 'An error occurred during password reset.');
      }
    }
  };

  return (
    <div className='mx-auto items-center justify-center flex flex-col bg-gray-100 h-[110vh]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='relative flex flex-col items-center h-[80vh] border-2 mt-24 p-12 bg-white rounded-lg'>
          <h1 className='p-10 text-2xl text-black font-bold'>Reset Password</h1>
          <form onSubmit={handleReset}>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-sm text-black'>Enter Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md bg-white text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300"
              />
              {formErrors.email && (<p className='text-red-500 italic text-xs'>{formErrors.email}</p>)}
            </div>
            <div className='mb-5'>
              <label htmlFor='password' className='block text-sm text-black'>Enter New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300"
              />
              {formErrors.password && (<p className='text-red-500 italic text-xs'>{formErrors.password}</p>)}
            </div>
            <div className='mb-5'>
              <label htmlFor='confirmPassword' className='block text-sm text-black'>Confirm Your Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300"
              />
              {formErrors.confirmPassword && (<p className='text-red-500 italic text-xs'>{formErrors.confirmPassword}</p>)}
            </div>
            <div className='flex flex-col'>
              <button type='submit' className='bg-red-500 w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5 text-white'>Reset</button>
              <Link to="/auth/signup" className='text-md text-red-700 pt-5 text-right'>Go Back</Link>
            </div>
          </form>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
}

export default Reset;
