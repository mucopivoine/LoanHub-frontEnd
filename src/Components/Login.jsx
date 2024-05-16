
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fetchError, setFetchError] = useState(null);
  const [userType, setUserType] = useState('teacher'); 
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: '' });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: '' });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
   


  const handleSubmit = async (e) => {

  const [error, setError] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {

    e.preventDefault();

    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setError({ ...error, email: 'Email is required in the format of name@gmail.com' });
      return;
    } else {
      setError({ ...error, email: '' });
    }

    // Validate password length
    if (password.length < 8) {
      setError({ ...error, password: 'Password must be at least 8 characters long' });
      return;
    } else {
      setError({ ...error, password: '' });
    }


    if (Object.values(newErrors).every((val) => val === '')) {
      try {
        const response = await axios.post(
          `https://umwarimu-loan-hub.onrender.com/api/teacher/login`,
          { email, password }
        );
        console.log(response.data)
        console.log('Logged in successfully')
      
        if (response.data.user.role === 'teacher'){
          Navigate('/layout/teacher')
        } else if(response.data.user.role === 'manager'){
          Navigate('./layout/manager');
        } 
      }
        catch (error) {
          setFetchError('An error occurred while fetching data');
          console.log('Error occurred during login:', error);
        }
     

    try {
      const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/teacher/login', {
        email: email,
        password: password,
      });

      if (response.data.success) {
        alert('Logged in successfully');
        // Redirect to dashboard or another page upon successful login
      } else {
        setError({ ...error, password: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred, login failed');

    }
  };

  return (
    <>

      <div className='mx-auto items-center justify-center flex flex-row  bg-gray-100 h-[110vh]'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <div className=''>
            <div className='relative flex flex-col items-center h-[80vh] border-2  p-12 mt-24 bg-white'>
              <div>
                <h1 className='p-10 text-2xl text-black font-bold'>LOG IN HERE</h1>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className='mb-5'>
                    <label htmlFor='email' className='block text-sm text-black'>
                      Enter Your Email
                    </label>
                    <input
                      type='email'
                      id='Email'
                      value={email}
                      onChange={handleEmail}
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.email && (
                      <p className='text-red-500 italic text-xs'>{error.email}</p>
                    )}
                  </div>
                  <div className='mb-2'>
                    <label htmlFor='password' className='block text-sm text-black'>
                      Enter Your Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      value={password}
                      onChange={handlePassword}
                      className='mt-1 w-full rounded-lg bg-white flex-start text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300'
                    />
                    {formSubmitted && error.password && (
                      <p className='text-red-500 italic text-xs'>{error.password}</p>
                    )}
                  </div>
                  <div className='mb-2'>
                    <label htmlFor='userType' className='block text-sm text-black'>
                      Select User Type
                    </label>
                    <select
                      id='userType'
                      value={userType}
                      onChange={handleUserTypeChange}
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    >
                      <option value='teacher'>Teacher</option>
                      <option value='manager'>Manager</option>
                      <option value='admin'>Admin</option>
                    </select>
                  </div>
                  <Link to='/auth/forgot' className='text-red-700'>
                    Forgot Password?
                  </Link>
                  <button
                    type='submit'
                    className='bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5'
                  >
                    Sign In
                  </button>
                  <div className='flex gap-2 mt-5 mb-5 text-black'>
                    <p>Don't have an account ? </p>
                    <Link to='/auth/signup' className='text-red-700'>
                      Sign Up
                    </Link>
                  </div>
                  <Link to='/auth/reset' className='text-red-700'>
                    Reset password
                  </Link>
                </form>
              </div>

      <div className='mx-auto items-center justify-center flex flex-row bg-gray-100 h-[110vh]'>
        <div className='relative flex flex-col items-center w-[40] border-2 p-12 mt-24 bg-white'>
          <h1 className='p-10 text-2xl text-black font-bold'>LOG IN HERE</h1>
          <form onSubmit={handleLogin}>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-sm text-black'>
                Enter Your Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
              />
              {error.email && <p className='text-red-500 italic text-xs'>{error.email}</p>}
            </div>
            <div className='mb-2'>
              <label htmlFor='password' className='block text-sm text-black'>
                Enter Your Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 w-full rounded-lg bg-white flex-start text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300'
              />
              {error.password && <p className='text-red-500 italic text-xs'>{error.password}</p>}
            </div>
            <button
              type='submit'
              className='bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5' onClick={handleLogin}
            >
              Sign In
            </button>
            <div className='flex gap-2 mt-5 mb-5 text-black'>
              <p>Don't have an account?</p>
              <Link to='/auth/signup' className='text-red-700'>
                Sign Up
              </Link>

            </div>
            <Link to='/auth/forgot' className='text-red-700'>
              Forgot Password?
            </Link>
            <Link to='/auth/reset' className='text-red-700'>
              Reset password
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
