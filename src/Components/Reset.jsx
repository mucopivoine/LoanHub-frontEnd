
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import axios from 'axios';

function Reset() {
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordErr, setCnfirmPasswordErr] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    const isValid = () => {
        let valid = true
        if(!password.trim()){
            setPasswordErr('password is required')
            valid = false
        } else {
          setPasswordErr('')
        }
        if(!confirmPassword.trim()){
            setCnfirmPasswordErr('Confrim entered password')
            valid = false
        } else {
            setCnfirmPasswordErr('')
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
    const handleReset = async (e) => {
        e.preventDefault();
        if(isValid()== true) {
            try {
                axios.post('http://umwarimu-loan-hub-api.onrender.com/api/teacher/resetpassword', {
                    email:email,
                    newPassword:password,
                    confrim:confirmPassword,
            },{
            headers:{
                "Content-Type":'application/json',
            },    
                }).then((response) => {
                    console.log(response.data);
                    setTimeout(() => {
                      setIsLoading(false);
                      navigate('/auth/signin');
                    }, 3000)
                  }).catch((error) => {
                    setIsLoading(false);
                    console.log(error);
                  })
                }catch(error){

                }
            }
        }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //              axios.get(`http://umwarimu-loan-hub-api.onrender.com/api/teacher/resetpassword`);
    //             console.log('Reset API Response:', response.data);
    //             // Handle the response as needed
    //         } catch (error) {
    //             console.log('Error fetching reset data:', error);
    //             // Handle errors, e.g., set an error state or display a message to the user
    //         }
    //     };

    //     fetchData(); // Call the fetch function when the component mounts
    // }, []); // The empty dependency array ensures this effect runs only once on mount

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    //     setError({ ...error, email: '' });
    // };

    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    //     setError({ ...error, password: '' });
    // };

    // const handleConfirm = (e) => {
    //     setConfirmPassword(e.target.value);
    //     setError({ ...error, confirmPassword: '' });
    // };

    return (
        <div className='mx-auto items-center justify-center flex flex-col bg-gray-100 h-[110vh]'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='relative flex flex-col items-center h-[80vh] border-2 mt-24 p-12 bg-white rounded-lg'>
                    <h1 className='p-10 text-2xl text-black font-bold'>Reset Password</h1>
                    <form>


                        <div className='mb-5'>
                            <label htmlFor='email' className='block text-sm text-black' > Enter Your Email</label>
                            <input type="email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
                             className="mt-1 w-full rounded-md bg-white text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300" />
                            { emailErr ? (<p className='text-red-500 italic text-xs'>{emailErr}</p>) : null}
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='password' className='block text-sm text-black'> Enter New Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 w-full rounded-md bg-white flex-start text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300"  />
                            { passwordErr ? (<p className='text-red-500 italic text-xs'>{passwordErr}</p>) : null}
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='Confirm Password' className='block text-sm text-black'>Confirm Your Password</label>
                            <input type="password" id="confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-x-2 border-y-2 border-gray-300"/>
                            { confirmPasswordErr ? (<p className='text-red-500 italic text-xs'>{confirmPasswordErr}</p>
                            ): null}
                        </div>
                        <div className='flex flex-col'>
                            <Link to="/"><button type='submit' className='bg-red-500 w-50 border-2 rounded-md p-2 px-[100px] mx-auto mt-5 text-white' onClick={handleReset}>Reset </button></Link>

                            <Link to="/auth/signup" className='text-md text-red-700 pt-5 text-right'>Go back</Link>
                        </div>
                    </form>
        </div>
      </motion.div >
    </div >
  );
}

export default Reset;
