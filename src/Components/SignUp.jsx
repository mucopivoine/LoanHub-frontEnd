import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const handleName = (e) => {
        setName(e.target.value);
        setError({ ...error, name: '' });
      };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setError({ ...error, email: '' });
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setError({ ...error, password: '' });
      };
      const handleConfirm = (e) => {
        setConfirmPassword(e.target.value);
        setError({ ...error, confirmPassword: '' });
      };
      
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  
    let newErrors = {};
  
    if (!name.trim()) {
      newErrors = { ...newErrors, name: 'Full name is required' };
    }
    if (!email.trim()) {
      newErrors = { ...newErrors, email: 'Email must have @gmail.com or .net' };
    }
    if (password.length < 8) {
      newErrors = {
        ...newErrors,
        password: 'Password must be at least 8 characters long',
      };
    }
    if (password !== confirmPassword) {
      newErrors = { ...newErrors, confirmPassword: 'Passwords do not match' };
    }
  
    setError(newErrors);
  
    if (Object.values(newErrors).every((val) => val === '')) {
      console.log('Form submitted successfully');
    }
  };
  return (
    <>
    <Home/>
    <div className='mx-auto items-center justify-center flex flex-col bg-gray-100 h-[100vh]'>
      
      <div className=''>

        <div className='relative flex flex-col items-center h-[95vh] border-2 mb-3 p-12 bg-white rounded-lg'>
          <div>
          <h1 className='p-10 text-2xl text-black font-bold'>SIGN UP HERE</h1>
          </div>
          <div>

          
          <form onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='name' className='block text-sm text-black '>
                Enter Your Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleName}
                className='mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300'
              />
              {formSubmitted && error.name && <p className='text-red-500 italic text-xs'>{error.name}</p>}
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-sm text-black'>
                Enter Your Email
              </label>
              <input
                type='email'
                id='Email'
                value={email}
                onChange={handleEmail}
                className='mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300'
              />
              {formSubmitted && error.email && <p className='text-red-500 italic text-xs'>{error.email}</p>}
            </div>
            <div className='mb-5'>
              <label htmlFor='password' className='block text-sm text-black'>
                Enter Your Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePassword}
                className='mt-1 w-full rounded-md bg-white flex-start text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300'
              />
              {formSubmitted && error.password && <p className='text-red-500 italic text-xs'>{error.password}</p>}
            </div>
            <div className='mb-5'>
              <label htmlFor='confirmPassword' className='block text-sm text-black'>
                Confirm Your Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                onChange={handleConfirm}
                className='mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300'
              />
              {formSubmitted && error.confirmPassword && (
                <p className='text-red-500 italic text-xs'>{error.confirmPassword}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <button
                type='submit'
                className='bg-red-500 text-white w-50 border-2 rounded-md p-2 
                px-[100px] mx-auto mt-5' onClick={handleSubmit}
              >
               Create account
              </button>
              <Link to='/auth/reset' className='text-red-700 mt-5 '>
                Reset Password?
              </Link>
            </div>
            <div className='flex gap-4 mt-2'>
            <p>Already have an account?</p>
            <Link to='/auth/signin' className=' text-red-700'>
              Log In
            </Link>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp