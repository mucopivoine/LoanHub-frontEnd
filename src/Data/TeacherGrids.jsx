import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHandHoldingUsd } from 'react-icons/fa';

const getTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  const jwtCookie = cookies.find(cookie => cookie.trim().startsWith('jwt='));
  if (jwtCookie) {
    return jwtCookie.split('=')[1];
  } else {
    return null;
  }
};

function TeacherGrids() {
  const [totalLoans, setTotalLoans] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalManagers, setTotalManagers] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const calculateTotals = async () => {
      try {
        const token = getTokenFromCookie();
        if (!token) {
          setError('No token found');
          return;
        }
        console.log('Token:', token);

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        const [loansResponse, teachersResponse, managersResponse] = await Promise.all([
          axios.get('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getAll', { headers, withCredentials: true }),
          axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacher/all', { headers, withCredentials: true }),
          axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/getall', { headers, withCredentials: true }),
        ]);

        console.log('Loans Response:', loansResponse.data);
        console.log('Teachers Response:', teachersResponse.data);
        console.log('Managers Response:', managersResponse.data);

      
        setTotalLoans(loansResponse.data.loans.length);
        setTotalTeachers(teachersResponse.data.users.length);
        setTotalManagers(managersResponse.data.teachers.length);
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        setError(error.response ? error.response.data.error : 'Error fetching data');
      }
    };

    calculateTotals();
  }, []);

  const statsData = [
    {
      label: 'Total Loans',
      value: totalLoans,
      iconBgColor: 'bg-red-400',
    },
    {
      label: 'Total Teachers',
      value: totalTeachers,
      iconBgColor: 'bg-blue-500',
    },
    {
      label: 'Sacco Users',
      value: totalManagers,
      iconBgColor: 'bg-yellow-500',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {statsData.map((stat, index) => (
        <BoxWrapper key={index}>
          <div className={`rounded-full h-16 w-16 flex items-center justify-center ${stat.iconBgColor}`}>
            <FaHandHoldingUsd className="text-3xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">{stat.label}</span>
            <div className="flex items-center">
              <strong className="text-2xl text-gray-700 font-semibold">{error ? 'Error' : stat.value}</strong>
            </div>
          </div>
        </BoxWrapper>
      ))}
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg flex items-center transform transition-transform duration-150 ease-in-out hover:scale-105 cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      {children}
    </div>
  );
}

export default TeacherGrids;
