import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
function Reset() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
     // Get token from URL params
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValid = () => {
        let valid = true;
        if (!password.trim()) {
            setPasswordErr('Password is required');
            valid = false;
        } else {
            setPasswordErr('');
        }
        if (!confirmPassword.trim()) {
            setConfirmPasswordErr('Confirm entered password');
            valid = false;
        } else if (confirmPassword !== password) {
            setConfirmPasswordErr('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordErr('');
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

    const handleReset = async (e) => {
        e.preventDefault();
        if (isValid()) {
            try {
                const response = await axios.post(

                    `https://umwarimu-loan-hub-api.onrender.com/api/teacher/resetpassword/${token}`, // Pass token in URL
                    {
                        email: email,
                        newPassword: password,
                        confirm: confirmPassword,
                        token: token,
                    },
                    {
                        headers: {
                            "Content-Type": 'application/json',
                        },
                        withCredentials: true,
                    }
                );
                toast.success('Password reset was successful! Redirecting...', {
                    className: 'red-line',
                });

                setTimeout(() => {
                    navigate('/auth/signin');
                }, 3000);
            } catch (error) {
                if (error.response) {
                    console.error('Error Response:', error.response.data);
                    console.error('Status Code:', error.response.status);
                } else if (error.request) {
                    console.error('Error Request:', error.request);
                } else {
                    console.error('Error Message:', error.message);
                }
                console.error('Error Config:', error.config);
                toast.error(error.response?.data?.message || 'Please try again');
            }
        }
    };

    return (
        <div className='mx-auto items-center justify-center flex flex-col bg-gray-100 h-[110vh]'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='relative flex flex-col items-center h-[80vh] border-2 mt-24 p-12 bg-white rounded-lg'>
                    <h1 className='p-10 text-2xl text-black font-bold'>Reset Password</h1>
                    <form onSubmit={handleReset}>
                        <div className='mb-5'>
                            <label htmlFor='email' className='block text-sm text-black'>Enter Your Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 w-full rounded-md bg-white text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300"
                            />
                            {emailErr && (<p className='text-red-500 italic text-xs'>{emailErr}</p>)}
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='password' className='block text-sm text-black'>Enter New Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300"
                            />
                            {passwordErr && (<p className='text-red-500 italic text-xs'>{passwordErr}</p>)}
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='confirm' className='block text-sm text-black'>Confirm Your Password</label>
                            <input
                                type="password"
                                id="confirm"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300"
                            />
                            {confirmPasswordErr && (<p className='text-red-500 italic text-xs'>{confirmPasswordErr}</p>)}
                        </div>
                        <div className='flex flex-col'>

                            <button type='submit' className='bg-red-500 w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5 text-white'>Reset</button>
                        

                            
                            <Link to="/auth/signup" className='text-md text-red-700 pt-5 text-right'>Go back</Link>

                        </div>
                    </form>
                </div>
            </motion.div>
            <ToastContainer/>
        </div>
    );
}

export default Reset;
