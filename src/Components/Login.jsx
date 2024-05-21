import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: '' });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: '' });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setError({ ...error, email: 'Email is required in the format of name@gmail.com' });
      setFormSubmitted(true);
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setError({ ...error, password: 'Password must be at least 8 characters long' });
      setFormSubmitted(true);
      return;
    }

    try {
      const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/teacher/login', {
        email,
        password,
      }, {
        headers: {
          "Content-Type": 'application/json',
        }
      });

      if (response.data && response.data.user && response.data.user.role) {
        console.log(response.data);
        console.log('Logged in successfully');
        setTimeout(() => {
          if (response.data.user.role === 'teacher') {
            navigate('/layout/teacher');
          } else if (response.data.user.role === 'manager') {
            navigate('/layout/manager');
          }
        }, 3000);
      }
    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  return (
    <div className='mx-auto flex items-center justify-center bg-gray-100 h-screen'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-col items-center border-2 p-12 bg-white rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-black mb-10'>LOG IN HERE</h1>
          <form onSubmit={handleLogin}>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-sm text-black'>Enter Your Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleEmail}
                className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border border-gray-300'
                required
              />
              {formSubmitted && error.email && (
                <p className='text-red-500 italic text-xs'>{error.email}</p>
              )}
            </div>
            <div className='mb-2'>
              <label htmlFor='password' className='block text-sm text-black'>Enter Your Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePassword}
                className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border border-gray-300'
                required
              />
              {formSubmitted && error.password && (
                <p className='text-red-500 italic text-xs'>{error.password}</p>
              )}
            </div>
            <Link to='/auth/forgot' className='text-red-700'>Forgot Password?</Link>
            <button
              type='submit'
              className='bg-red-500 text-white w-full py-2 rounded-md mt-5'
            >
              Sign In
            </button>
            <div className='flex justify-center gap-2 mt-5 text-black'>
              <p>Dont have an account?</p>
              <Link to='/auth/signup' className='text-red-700'>Sign Up</Link>
            </div>
            <Link to='/auth/reset' className='text-red-700'>Reset password</Link>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
