import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const cookie = document.cookie.split('jwt=')[1];
function Loanpercentage() {
    const [loanPercentage, setLoanPercentage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchLoanPercentage = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get(`http://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getPercentage/{id}`, {
                headers: {
                    'Authorization': `Bearer ${cookie}`,
                  },
                  withCredentials: true,
            });
            console.log('Loan Percentage Response:', response.data);
            setLoanPercentage(response.data); // Assuming response.data contains the loan percentage
          } catch (error) {
            console.error('Error fetching loan percentage:', error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchLoanPercentage();
      }, []);
  return (
    <div>

    </div>
  )
}

export default Loanpercentage