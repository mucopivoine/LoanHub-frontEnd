
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'


import { motion } from 'framer-motion';
import axios from 'axios';




function Reset() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/reset`);
                console.log('Reset API Response:', response.data);
                // Handle the response as needed
            } catch (error) {
                console.log('Error fetching reset data:', error);
                // Handle errors, e.g., set an error state or display a message to the user
            }
        };

        fetchData(); // Call the fetch function when the component mounts
    }, []); // The empty dependency array ensures this effect runs only once on mount

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

    const handleSubmit = async (e) => {
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
           
            try {
                const response = await axios.post(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/reset`, {
                    email: email,
                    password: password,
                    
                });
                console.log('Reset API Response:', response.data);
                console.log('Reseting password was successful')
            } catch (error) {
                console.log('Error resetting password:', error);
                console.log('Error occured while resettitng data')
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
                    <form onSubmit={handleSubmit}>


                        <div className='mb-5'>
                            <label htmlFor='email' className='block text-sm text-black' > Enter Your Email</label>
                            <input type="email" id="Email" className="mt-1 w-full rounded-md bg-white text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300" onChange={handleEmail} />
                            {formSubmitted && error.email && <p className='text-red-500 italic text-xs'>{error.email}</p>}
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='password' className='block text-sm text-black'> Enter New Password</label>
                            <input type="password" id="password" className="mt-1 w-full rounded-md bg-white flex-start text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300" onChange={handlePassword} />
                            {formSubmitted && error.password && <p className='text-red-500 italic text-xs'>{error.password}</p>}
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='Confirm Password' className='block text-sm text-black'>Confirm Your Password</label>
                            <input type="password" id="passwordcofirmation" className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300" onChange={handleConfirm} />
                            {formSubmitted && error.confirmPassword && (
                                <p className='text-red-500 italic text-xs'>{error.confirmPassword}</p>
                            )}
                        </div>
                        <div className='flex flex-col'>
                            <Link to="/"><button type='submit' className='bg-red-500 w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5 text-white' onClick={handleSubmit}>Reset </button></Link>

                            <Link to="/auth/signup" className='text-md text-red-700 pt-5 text-right'>Go back</Link>
                        </div>
                    </form>

        </div>
      </motion.div >
    </div >
  );
}

export default Reset;
