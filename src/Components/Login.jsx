import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hacker from '../assets/hacker.webp'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    let newErrors = {};
    if (!email.trim() || !email.includes('@gmail.com')) {
      newErrors = { ...newErrors, email: 'Email must have name@gmail.com' };
    }
    if (password.length !== 8) {
      newErrors = { ...newErrors, password: 'Password must be 8 characters long' };
    }
    if (!password.trim()) {
      newErrors = { ...newErrors, password: 'Enter password' };
    }
    setError(newErrors);

    if (Object.values(newErrors).every((val) => val === '')) {
      console.log('Logged in successfully');
      
    }
  };

  return (
    <div className='mx-auto items-center justify-center flex flex-row bg-gray-100 h-[100vh]'>
        {/* <div>
            <img src={hacker} className=''></img>
        </div> */}
      <div className=''>
     
        <div className='relative flex flex-col items-center h-[70vh] border-2 mb-3 p-12 bg-white'>
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
            <Link to="/forgot" className="text-red-700">Forgot Password?</Link>
            <button
              type='submit'
              className='bg-red-500  text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5'
            >
              Sign In
            </button>
            <div className='flex gap-2 mt-5 mb-5 text-black'>
              <p>Don't have an account ? </p>
              <Link to='/signup' className='text-red-700'>
                Sign Up
              </Link>
            </div>
           
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
