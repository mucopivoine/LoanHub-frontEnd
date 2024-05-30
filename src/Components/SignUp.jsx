import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      }
    }
  return (
    <>
      <div className='mx-auto items-center justify-center flex flex-row bg-gray-100 h-[140vh]'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <div className=''>
            <div className='relative flex flex-col items-center h-[120vh] border-2 p-12 mt-24 bg-white'>
              <div>
                <h1 className='p-10 text-2xl text-black font-bold'>SIGN UP HERE</h1>
              </div>
              <div>
                <form>
                  <div className='flex flex-row gap-3'>
                    <div className='mb-5'>
                      <label htmlFor='username' className='block text-sm text-black'>
                        Enter Your Username
                      </label>
                      <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {usernameError && <p className='text-red-500 italic text-xs'>{usernameError}</p>}
                    </div>
                    <div className='mb-5'>
                      <label htmlFor='firstname' className='block text-sm text-black'>
                        Enter Your Firstname
                      </label>
                      <input
                        type='text'
                        id='firstname'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {firstnameErr && <p className='text-red-500 italic text-xs'>{firstnameErr}</p>}
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
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {lastnameErr && <p className='text-red-500 italic text-xs'>{lastnameErr}</p>}
                    </div>
                    <div className='mb-5'>
                      <label htmlFor='schoolname' className='block text-sm text-black'>
                        Enter Schoolname
                      </label>
                      <input
                        type='text'
                        id='schoolname'
                        value={schoolname}
                        onChange={(e) => setSchoolname(e.target.value)}
                        required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {schoolnameErr && <p className='text-red-500 italic text-xs'>{schoolnameErr}</p>}
                    </div>
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='email' className='block text-sm text-black'>
                      Enter Your Email Address
                    </label>
                    <input
                      type='text'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {emailErr && <p className='text-red-500 italic text-xs'>{emailErr}</p>}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='password' className='block text-sm text-black'>
                      Enter Your Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {passwordErr && <p className='text-red-500 italic text-xs'>{passwordErr}</p>}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='accountNumber' className='block text-sm text-black'>
                      Enter Your Account Number
                    </label>
                    <input
                      type='text'
                      id='accountNumber'
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {accountNumberErr && <p className='text-red-500 italic text-xs'>{accountNumberErr}</p>}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='phonenumber' className='block text-sm text-black'>
                      Enter Your Phonenumber
                    </label>
                    <input
                      type='number'
                      id='phonenumber'
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                      required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {phonenumberErr && <p className='text-red-500 italic text-xs'>{phonenumberErr}</p>}
                  </div>
                  <button
                    type='submit'
                    onClick={handleSignUp}
                    className='bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5'
                  >
                    Sign Up
                  </button>
                  <div className='flex gap-2 mt-5 mb-3 text-black'>
                    <p>Already have an account?</p>
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

export default SignUp;