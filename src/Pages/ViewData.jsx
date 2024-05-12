import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Sidemenu from '../Components/Sidemenu';

const ViewDataForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    maritalStatus: '',
    numberOfDependencies: 0,
    position: '',
    monthlyIncome: 0,
    loanAmount: 0,
    repaymentPeriod: '',
    bankAccountNumber: '',
    otherLoans: false,
    employmentLetter: '', // Path or URL to upload
    nationalIdCopy: '', // Path or URL to upload
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to the server
    console.log('Form data:', formData);
  };

  return (
    <>
    <Sidemenu/>
    
    <div className='mx-auto items-center justify-center flex flex-row  bg-gray-100 h-[130vh]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=''
      >
        <div className=''>
          <div className='relative flex flex-col items-center h-[120vh] border-2 w-[40vw] p-12 mt-24  bg-white'>
            <div>
              <h1 className='text-2xl text-black font-bold'>VIEW DATA FORM</h1>
            </div>
            <div className='gap-5  p-10'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-row gap-5'>
                <div className='mb-5 '>
                  <label htmlFor='fullName' className='block text-sm text-black'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='dateOfBirth' className='block text-sm text-black'>
                    Date of Birth
                  </label>
                  <input
                    type='date'
                    id='dateOfBirth'
                    name='dateOfBirth'
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                </div>
                <div className='flex  flex-row gap-5'>
                <div className='mb-5'>
                  <label htmlFor='maritalStatus' className='block text-sm text-black'>
                    Marital Status
                  </label>
                  <select
                    id='maritalStatus'
                    name='maritalStatus'
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  >
                    <option value='single'>Single</option>
                    <option value='married'>Married</option>
                    <option value='divorced'>Divorced</option>
                  </select>
                </div>
                <div className='mb-5'>
                  <label htmlFor='numberOfDependencies' className='block text-sm text-black'>
                    Number of Dependencies
                  </label>
                  <input
                    type='number'
                    id='numberOfDependencies'
                    name='numberOfDependencies'
                    value={formData.numberOfDependencies}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                </div>
                <div className='flex  flex-row gap-5'>
                <div className='mb-5'>
                  <label htmlFor='position' className='block text-sm text-black'>
                    Position
                  </label>
                  <input
                    type='text'
                    id='position'
                    name='position'
                    value={formData.position}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='monthlyIncome' className='block text-sm text-black'>
                    Monthly Income
                  </label>
                  <input
                    type='number'
                    id='monthlyIncome'
                    name='monthlyIncome'
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                </div>
                <div className='flex  flex-row gap-5'>
                <div className='mb-5'>
                  <label htmlFor='loanAmount' className='block text-sm text-black'>
                    Loan Amount
                  </label>
                  <input
                    type='number'
                    id='loanAmount'
                    name='loanAmount'
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='repaymentPeriod' className='block text-sm text-black'>
                    Repayment Period
                  </label>
                  <input
                    type='text'
                    id='repaymentPeriod'
                    name='repaymentPeriod'
                    value={formData.repaymentPeriod}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                </div>
                <div className='flex  flex-row gap-5'>
                <div className='mb-5'>
                  <label htmlFor='bankAccountNumber' className='block text-sm text-black'>
                    Bank Account Number
                  </label>
                  <input
                    type='text'
                    id='bankAccountNumber'
                    name='bankAccountNumber'
                    value={formData.bankAccountNumber}
                    onChange={handleChange}
                    className='mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='otherLoans' className='block text-sm text-black'>
                    Other Loans
                  </label>
                  <input
                    type='checkbox'
                    id='otherLoans'
                    name='otherLoans'
                    checked={formData.otherLoans}
                    onChange={handleChange}
                    className='mt-1 w-4 h-4 text-red-600'
                  />
                </div>
                </div>
                <div>
                <div className='mb-5'>
                  <label htmlFor='employmentLetter' className='block text-sm text-black'>
                    Employment Letter (Upload)
                  </label>
                  <input
                    type='file'
                    id='employmentLetter'
                    name='employmentLetter'
                    onChange={handleChange}
                    className='mt-1 w-full bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='nationalIdCopy' className='block text-sm text-black'>
                    National ID Copy (Upload)
                  </label>
                  <input
                    type='file'
                    id='nationalIdCopy'
                    name='nationalIdCopy'
                    onChange={handleChange}
                    className='mt-1 w-full bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300'
                  />
                </div>
                </div>
                <button
                  type='submit'
                  className='bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5'
                >
                  Submit
                </button>
                <div className='flex gap-2 mt-5 mb-3 text-black'>
                  <p>Go back to </p>
                  <Link to='/dashboard' className='text-red-700'>
                    Dashboard
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
};

export default ViewDataForm;

