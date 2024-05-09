import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Forgot() {
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
    <div>
         <div className='mx-auto items-center justify-center flex flex-col bg-gray-100 h-[100vh]'>
        <h1 className='p-10 text-2xl text-black font-bold'>Create Password</h1>
        <div className=''>
    <div className='relative flex items-center h-[70vh] border-2 mb-3 p-12 bg-white'>
        <form onSubmit={handleSubmit}>
          
            <div className='mb-5'>
                <label htmlFor='email' className='block text-sm text-black' > Enter Your Email</label>
                <input type="email" id="Email"  className="mt-1 w-full rounded-md bg-white text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300" onChange={handleEmail}/>
                {formSubmitted && error.email && <p className='text-red-500 italic text-xs'>{error.email}</p>}
            </div>
            <p>Shortly you will get an email to reset password.</p>
            <div className='flex flex-col'>
            <button type='submit' className='bg-red-500 text-white w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5'>Create account</button> 
            
            <Link to="/signup" className='text-xl text-red-700 pt-5 text-center'>Go back</Link>
            </div>
        </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Forgot