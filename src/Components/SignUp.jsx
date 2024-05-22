import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { SigningUp } from '../api/teacher';
import axios from 'axios';
function SignUp() {
  const [username, setUsername] = useState('');
  const [usernameError, setUserNameError] = useState('')
  const [teacherid, setTeacherid] = useState('');
  const [teacheridErr, setTeacheridErr] = useState('');
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
  const [userType, setUserType] = useState('');
  const [userTypeErr, setUserTypeErr] = useState('');
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValid = () => {
    let valid = true
    if (!username.trim()) {
      setUserNameError('username is required');
      valid = false
    } else {
      setUserNameError('');
    }
    if (!teacherid.trim()) {
      setTeacheridErr('teacher id is required');
      valid = false
    } else {
      setTeacheridErr(" ")
    }
    if (!firstname.trim()) {
      setFirstnameErr('firstname is required');
      valid = false
    } else {
      setFirstnameErr(" ");
    }
    if (!lastname.trim()) {
      setLastnameErr('last name is required')
      valid = false
    }
    else {
      setLastnameErr('')
    }
    if (!schoolname.trim()) {
      setSchoolnameErr('School name is required')
      valid = false
    } else {
      setSchoolnameErr('')
    } if (!phonenumber.trim()) {
      setPhonenumberErr('Phone number is required')
      valid = false
    } else {
      setPhonenumberErr('')
    }
    if (!password.trim()) {
      setPasswordErr('password is required')
      valid = false
    } else {
      setPasswordErr('')
    }
    if (!email.trim()) {
      setEmailErr('Email is required')
      valid = false
    } else if (!isValidEmail(email)) {
      setEmailErr('Email is invalid')
      valid = false
    } else {
      setEmailErr('')
    }
    return valid
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isValid() == true) {
      try {
        console.log({
          username: username,
          email: email,
          password: password,
          firstName: firstname,
          lastName: lastname,
          schoolName: schoolname,
          phoneNumber: phonenumber,
          teacherId: teacherid,
        })
        axios.post('https://umwarimu-loan-hub-api.onrender.com/api/teacher/signup', {
          username: username,
          email: email,
          password: password,
          firstName: firstname,
          lastName: lastname,
          schoolName: schoolname,
          phoneNumber: phonenumber,
          teacherId: teacherid,
        }, {
          headers: {
            "Content-Type": 'application/json',
          },
        })
          .then((response) => {
            console.log(response.data);// Store the token in localStorage

            setTimeout(() => {
              setIsLoading(false);
              navigate('/auth/otpinput');
            }, 3000)
          }).catch((error) => {
            setIsLoading(false);
            console.log(error);
          })
      } catch (error) {
      }
    }
  }
  return (
    <>
      {isLoading && (
        <div className='absolute border-2 top-28 w-64 right-4 p-4 text-sm text-green-500 border-green-500 bg-white rounded-md'>
          Loading...
        </div>
      )}
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
                <form >
                  <div className='flex flex-row gap-3'>
                    <div className='mb-5'>
                      <label htmlFor='username' className='block text-sm text-black'>
                        Enter Your Username
                      </label>
                      <input
                        type='text'
                        id='userName'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {usernameError ? (<p className='text-red-500 italic text-xs'>{usernameError}</p>) : null}
                    </div>
                    <div className='mb-5'>
                      <label htmlFor='firstname' className='block text-sm text-black'>
                        Enter Your Firstname
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {firstnameErr ? (<p className='text-red-500 italic text-xs'>{firstnameErr}</p>) : null}
                    </div>
                  </div>
                  <div className='flex flex-row gap-3'>
                    <div className='mb-5'>
                      <label htmlFor='lastname' className='block text-sm text-black'>
                        Enter Your Lastname
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)} required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {lastnameErr ? (<p className='text-red-500 italic text-xs'>{lastnameErr}</p>) : null}

                    </div>
                    <div className='mb-5'>
                      <label htmlFor='lastname' className='block text-sm text-black'>
                        Enter Schoolname
                      </label>
                      <input
                        type='text'
                        id='schoolname'
                        value={schoolname}
                        onChange={(e) => setSchoolname(e.target.value)} required
                        className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                      />
                      {/* {formSubmitted && error.schoolname && (
                      <p className='text-red-500 italic text-xs'>{error.schoolname}</p>
                    )} */}
                      {schoolnameErr ? (<p className='text-red-500 italic text-xs'>{schoolnameErr}</p>) : null}
                    </div>
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Email Address
                    </label>
                    <input
                      type='text'
                      id='email'
                      value={email}
                      onChange={(p) => setEmail(p.target.value)} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {/* {formSubmitted && error.email && (
                      <p className='text-red-500 italic text-xs'>{error.email}</p>
                    )} */}
                    {emailErr ? (<p className='text-red-500 italic text-xs'>{emailErr}</p>) : null}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      value={password}
                      onChange={(text) => setPassword(text.target.value)} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {passwordErr ? (<p className='text-red-500 italic text-xs'>{passwordErr}</p>) : null}

                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your ID
                    </label>
                    <input
                      type='text'
                      id='teacher_ID'
                      value={teacherid}
                      onChange={(n) => setTeacherid(n.target.value)} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {teacheridErr ? (<p className='text-red-500 italic text-xs'>{teacheridErr}</p>) : null}

                  </div>
                  <div className='mb-5'>
                    <label htmlFor='lastname' className='block text-sm text-black'>
                      Enter Your Phonenumber
                    </label>
                    <input
                      type='number'
                      id='phoneNumber'
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)} required
                      className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                    />
                    {phonenumberErr ? (<p className='text-red-500 italic text-xs'>{phonenumberErr}</p>) : null}
                  </div>
                  <button
                    type='submit'
                    onClick={handleSignUp}
                    className='bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5'
                  >
                    Sign Up
                  </button>
                  <div className='flex gap-2 mt-5 mb-3 text-black'>
                    <p>Don t have an account ? </p>
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









