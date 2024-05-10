import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hacker from '../assets/hacker.webp';
import Home from './Home';

function Login() {
  const [username, setUsername] = useState('');
  const [teacherid, setTeacherid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [schoolname, setSchoolname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [userType, setUserType] = useState('teacher'); // Default to 'teacher'
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

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
  const handleteacherid = (e) => {
    setTea
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

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
      // You can add logic here to redirect users based on userType
    }
  };

  return (
    <>
      <div className='mx-auto items-center justify-center flex flex-row bg-gray-100 h-[150vh]'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <div className=''>
            <div className='relative flex flex-col items-center h-[120vh] border-2 mb-3 p-12 bg-white'>
              <div>
                <h1 className='p-10 text-2xl text-black font-bold'>SIGN UP HERE</h1>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className='mb-5'>
                    <label htmlFor='username' className='block text-sm text-black'>
                      Enter Your Username
                    </label>
                    <input
                      type='text'
                      id='username'
                      value={username}
                      onChange={handleUsername}
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
                      value={firstname}
                      onChange={handleFirstname}
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.firstname && (
                      <p className='text-red-500 italic text-xs'>{error.firstname}</p>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Lastname
                    </label>
                    <input
                      type='text'
                      id='lastname'
                      value={lastname}
                      onChange={handleLastname}
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
                      value={schoolname}
                      onChange={handleSchoolname}
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.schoolname && (
                      <p className='text-red-500 italic text-xs'>{error.schoolname}</p>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Email Address
                    </label>
                    <input
                      type='text'
                      id='email'
                      value={email}
                      onChange={handleEmail}
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.email && (
                      <p className='text-red-500 italic text-xs'>{error.email}</p>
                    )}
                  </div>
                 
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your ID
                    </label>
                    <input
                      type='text'
                      id='number'
                      value={teacherid}
                      onChange={handleteacherid}
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
                      value={phonenumber}
                      onChange={handlePhonenumber}
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {formSubmitted && error.phonenumber && (
                      <p className='text-red-500 italic text-xs'>{error.phonenumber}</p>
                    )}
                  </div>
                  {/* Similar to the username and email inputs */}
                  <button
                    type='submit'
                    className='bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5'
                  >
                    Sign In
                  </button>
                  <div className='flex gap-2 mt-5 mb-5 text-black'>
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
  );
}

export default Login;
