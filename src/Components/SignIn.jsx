import React , { useState } from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
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
        if (!email.trim()) {
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
        }
  return (
    <div className='container items-center justify-center flex flex-col '>
      <h1 className='p-10 text-2xl text-blue-500'>SIGN UP HERE</h1>
      <div className=''>
        <div className='relative flex items-center h-[50vh] border-2 mb-3 p-12 '>
          <form onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-sm text-blue-500'>
                Enter Your Email
              </label>
              <input
                type='email'
                id='Email'
                value={email}
                onChange={handleEmail}
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2'
              />
              {formSubmitted && error.email && (
                <p className='text-red-500'>{error.email}</p>
              )}
            </div>
            <div className='mb-2'>
              <label htmlFor='password' className='block text-sm text-blue-500'>
                Enter Your Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePassword}
                className='mt-1 w-full rounded-md border-gray-200 bg-white flex-start text-sm text-gray-700 shadow-sm p-2'
              />
              {formSubmitted && error.password && (
                <p className='text-red-500'>{error.password}</p>
              )}
            </div>
             <button
                type='submit'
                className='bg-blue-300 w-50 border-2 border-blue-400 rounded-md px-[100px] mx-auto mt-5'
                onClick={handleSubmit}
              >
                Sign In
              </button>
            <p>Don't have an account ? </p>
            <Link to='/signup' className='underline text-xl text-blue-500'>
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
   
  )
}

export default SignIn