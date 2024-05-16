import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
