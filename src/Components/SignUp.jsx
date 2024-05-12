import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SigningUp } from '../api/teacher';


function SignUp() {
  const [username, setUsername] = useState('');
  const [teacherid, setTeacherid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [schoolname, setSchoolname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [userType, setUserType] = useState('teacher'); 
  const [message, setMessage] = useState({
    type: '',
    content: ''
  });
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    schoolname: '',
    phonenumber: '',
    teacherid:'',
  });
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    schoolname: '',
    phonenumber: '',
    teacherid:'',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setError({ ...error, username: '' });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: '' });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: '' });
  };

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    setError({ ...error, firstname: '' });
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
    setError({ ...error, lastname: '' });
  };

  const handleSchoolname = (e) => {
    setSchoolname(e.target.value);
    setError({ ...error, schoolname: '' });
  };

  const handlePhonenumber = (e) => {
    setPhonenumber(e.target.value);
    setError({ ...error, phonenumber: '' });
  };

 
  const handleteacherid = (e) => {
    setTeacherid(e.target.value);
    setError({...error, teacherid:''});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    

    const signupData = {
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      schoolname: '',
      phonenumber: '',
      teacherid:'',
    };

    let newErrors = {};
    if (!username.trim()) {
      newErrors = { ...newErrors, username: 'Enter username' };
    }
    if (!email.trim() || !email.includes('@gmail.com')) {
      newErrors = { ...newErrors, email: 'Email must have name@gmail.com' };
    }
    if (password.length !== 8) {
      newErrors = { ...newErrors, password: 'Password must be 8 characters long' };
    }
    if (!password.trim()) {
      newErrors = { ...newErrors, password: 'Enter password' };
    }
    if (!firstname.trim()) {
      newErrors = { ...newErrors, firstname: 'Enter firstname' };
    }
    if (!lastname.trim()) {
      newErrors = { ...newErrors, lastname: 'Enter lastname' };
    }
    if (!schoolname.trim()) {
      newErrors = { ...newErrors, schoolname: 'Enter schoolname' };
    }
    if (!phonenumber.trim()) {
      newErrors = { ...newErrors, phonenumber: 'Enter phonenumber' };
    }
    setError(newErrors);

    if (Object.values(newErrors).every((val) => val === '')) {
      console.log('Logged in successfully');
      try {
        const response = await SigningUp(signupData); // Assuming SigningUp returns a promise
        setMessage({
          type: 'success',
          content: response.data, // Assuming response contains data field
        });
        
      } catch (error) {
        setMessage({
          type: 'error',
          content: 'An error occurred while signing up', // Customize error message as needed
        });
      }
    } 
  }
  return (
    <>
      <div className='mx-auto items-center justify-center flex flex-row bg-gray-100 h-[130vh]'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <div className=''>
            <div className='relative flex flex-col items-center h-[105vh] border-2 p-12 mt-24 bg-white'>
              <div>
                <h1 className='p-10 text-2xl text-black font-bold'>SIGN UP HERE</h1>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-row gap-3'>
                  <div className='mb-5'>
                    <label htmlFor='username' className='block text-sm text-black'>
                      Enter Your Username
                    </label>
                    <input
                      type='text'
                      id='username'
                      value={signupData.username}
                      onChange={handleUsername} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.username && (
                      <p className='text-red-500 italic text-xs'>{error.username}</p>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='firstname' className='block text-sm text-black'>
                      Enter Your Firstname
                    </label>
                    <input
                      type='text'
                      id='firstname'
                      value={signupData.firstname}
                      onChange={handleFirstname} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.firstname && (
                      <p className='text-red-500 italic text-xs'>{error.firstname}</p>
                    )}
                  </div>
                  </div>
                  <div className='flex flex-row gap-3'>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Lastname
                    </label>
                    <input
                      type='text'
                      id='lastname'
                      value={signupData.lastname} 
                      onChange={handleLastname} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.lastname && (
                      <p className='text-red-500 italic text-xs'>{error.lastname}</p>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Schoolname
                    </label>
                    <input
                      type='text'
                      id='schoolname'
                      value={signupData.schoolname}
                      onChange={handleSchoolname} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.schoolname && (
                      <p className='text-red-500 italic text-xs'>{error.schoolname}</p>
                    )}
                  </div>
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Email Address
                    </label>
                    <input
                      type='text'
                      id='email'
                      value={signupData.email}
                      onChange={handleEmail} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.email && (
                      <p className='text-red-500 italic text-xs'>{error.email}</p>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Password
                    </label>
                    <input
                      type='number'
                      id='password'
                      value={signupData.password}
                      onChange={handlePassword} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.password && (
                      <p className='text-red-500 italic text-xs'>{error.password}</p>
                    )}
                  </div>
                  
                 
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your ID
                    </label>
                    <input
                      type='text'
                      id='teacherid'
                      value={signupData.teacherid}
                      onChange={handleteacherid} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.teacherid && (
                      <p className='text-red-500 italic text-xs'>{error.teacherid}</p>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Phonenumber
                    </label>
                    <input
                      type='number'
                      id='phonenumber'
                      value={signupData.phonenumber}
                      onChange={handlePhonenumber} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.phonenumber && (
                      <p className='text-red-500 italic text-xs'>{error.phonenumber}</p>
                    )}
                  </div>
                  {/* Similar to the username and email inputs */}
                  <button
                    type='submit'
                    className='bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5' onClick={handleSubmit}
                  >
                    Sign In
                  </button>
                  <div className='flex gap-2 mt-5 mb-3 text-black'>
                    <p>Don't have an account ? </p>
                    <Link to='/auth/signin' className='text-red-700'>
                      Log in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
    )
  }
export default SignUp;
