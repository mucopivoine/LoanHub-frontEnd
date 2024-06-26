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

function DashboardStatsGrid() {
  const [totalLoans, setTotalLoans] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalDetails, setTotalDetails] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getTokenFromCookie();
        if (!token) {
          setError('No token found');
          return;
        }

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        const [loansResponse, teachersResponse, detailsResponse] = await Promise.all([
          axios.get('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getAll', { headers }),
          axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacher/all', { headers }),
          axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/getall', { headers })
        ]);

        setTotalLoans(loansResponse.data.loans.length);
        setTotalTeachers(teachersResponse.data.users.length);
        setTotalDetails(detailsResponse.data.teachers.length);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
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
      label: 'Total Sacco Users',
      value: totalDetails,
      iconBgColor: 'bg-yellow-500',
    },
  ];

  return (
    <div className="flex">
      <div className=" bg-gray-200"> {/* Sidebar */}
       
      </div>
      <div className="w-3/4">
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-8 mt-5">
            {statsData.map((stat, index) => (
              <BoxWrapper key={index}>
                <div className={`rounded-full h-50 flex items-center justify-center ${stat.iconBgColor}`}>
                  <FaHandHoldingUsd className="text-5xl text-white" />
                </div>
                <div className="pl-4">
                  <span className="text-base text-gray-500 font-light">{stat.label}</span>
                  <div className="flex items-center">
                    <strong className="text-4xl text-gray-700 font-semibold">{error ? 'Error' : stat.value}</strong>
                  </div>
                </div>
              </BoxWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg flex items-center transform transition-transform duration-150 ease-in-out hover:scale-105 cursor-pointer w-64">
      {children}
    </div>
  );
}

export default DashboardStatsGrid;
