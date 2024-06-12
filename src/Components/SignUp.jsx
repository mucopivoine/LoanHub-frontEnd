import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserPlus } from 'react-icons/fa';

function SignUp() {
  const [username, setUsername] = useState('');
  const [usernameError, setUserNameError] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountNumberErr, setAccountNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [firstname, setFirstname] = useState('');
  const [firstnameErr, setFirstnameErr] = useState('');
  const [lastname, setLastname] = useState('');
  const [lastnameErr, setLastnameErr] = useState('');
  const [schoolname, setSchoolname] = useState('');
  const [schoolnameErr, setSchoolnameErr] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [phonenumberErr, setPhonenumberErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid = () => {
    let valid = true;

    if (!username.trim()) {
      setUserNameError('Username is required');
      valid = false;
    } else {
      setUserNameError('');
    }

    if (!accountNumber.trim()) {
      setAccountNumberError('Account Number is required');
      valid = false;
    } else {
      setAccountNumberError('');
    }

    if (!firstname.trim()) {
      setFirstnameErr('First name is required');
      valid = false;
    } else {
      setFirstnameErr('');
    }

    if (!lastname.trim()) {
      setLastnameErr('Last name is required');
      valid = false;
    } else {
      setLastnameErr('');
    }

    if (!schoolname.trim()) {
      setSchoolnameErr('School name is required');
      valid = false;
    } else {
      setSchoolnameErr('');
    }

    if (!phonenumber.trim()) {
      setPhonenumberErr('Phone number is required');
      valid = false;
    } else {
      setPhonenumberErr('');
    }

    if (!password.trim()) {
      setPasswordErr('Password is required');
      valid = false;
    } else {
      setPasswordErr('');
    }

    if (!email.trim()) {
      setEmailErr('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailErr('Email is invalid');
      valid = false;
    } else {
      setEmailErr('');
    }

    return valid;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isValid()) {
      try {
        const data = {
          username: username,
          email: email,
          password: password,
          firstName: firstname,
          lastName: lastname,
          schoolName: schoolname,
          phoneNumber: phonenumber,
          accountNumber: accountNumber,
        };

        const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/teacher/signup', data, {
          headers: {
            "Content-Type": 'application/json',
          },
          withCredentials: true,
        });

        console.log(response.data);
        toast.success('Signed up successfully!');
        setTimeout(() => {
          setIsLoading(false);
          navigate('/auth/otpinput');
        }, 3000);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        toast.error('Signing up failed. Please try again.');
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='flex justify-center items-center h-screen bg-gray-100'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg'
        >
          <div className='flex justify-center'>
            <FaUserPlus size={50} className='text-red-500' />
          </div>
          <div>
            <h1 className='text-2xl font-bold text-center'>Create an account</h1>
          </div>
          <form onSubmit={handleSignUp} className='space-y-6'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label htmlFor='username' className='text-sm text-gray-600'>Username</label>
                <input
                  type='text'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {usernameError && <p className='text-red-500 text-xs italic'>{usernameError}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='firstname' className='text-sm text-gray-600'>First Name</label>
                <input
                  type='text'
                  id='firstname'
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {firstnameErr && <p className='text-red-500 text-xs italic'>{firstnameErr}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='lastname' className='text-sm text-gray-600'>Last Name</label>
                <input
                  type='text'
                  id='lastname'
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {lastnameErr && <p className='text-red-500 text-xs italic'>{lastnameErr}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='schoolname' className='text-sm text-gray-600'>School Name</label>
                <input
                  type='text'
                  id='schoolname'
                  value={schoolname}
                  onChange={(e) => setSchoolname(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {schoolnameErr && <p className='text-red-500 text-xs italic'>{schoolnameErr}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-sm text-gray-600'>Email</label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {emailErr && <p className='text-red-500 text-xs italic'>{emailErr}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='password' className='text-sm text-gray-600'>Password</label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {passwordErr && <p className='text-red-500 text-xs italic'>{passwordErr}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='accountNumber' className='text-sm text-gray-600'>Account Number</label>
                <input
                  type='text'
                  id='accountNumber'
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {accountNumberErr && <p className='text-red-500 text-xs italic'>{accountNumberErr}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor='phonenumber' className='text-sm text-gray-600'>Phone Number</label>
                <input
                  type='text'
                  id='phonenumber'
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  required
                  className='mt-1 w-full rounded-lg bg-white p-2 border-gray-300'
                />
                {phonenumberErr && <p className='text-red-500 text-xs italic'>{phonenumberErr}</p>}
              </div>
            </div>
            <button
              type='submit'
              disabled={isLoading}
              className='w-full mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700'
            >
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
          <div className='text-center'>
            <p className='text-sm'>
              Already have an account? <Link to='/auth/login' className='text-blue-500 hover:underline'>Log In</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default SignUp;
