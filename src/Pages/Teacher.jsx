import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Pie } from 'react-chartjs-2';
import '..//App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Sidemenu from '../Components/Sidemenu';

import Search from './Search';
function Teacher() {

  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState('');
  const [chartData, setChartData] = useState(null);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTenure) * 12;
    const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    setEmi(emiValue.toFixed(2));

   
    const interest = emiValue * time - principal;
    const data = {
      labels: ['Principal', 'Interest'],
      datasets: [
        {
          label: 'EMI Breakdown',
          data: [principal, interest],
          backgroundColor: [, ],
          hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    };
    setChartData(data);
  };
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [num3,setNum3] = useState(0);
  const [Add,setAdd] = useState("");

  const calcSum = (e) => {
    e.preventDefault();
    console.log(e);

    if(num1 === 0 || num2 === 0 || num3 === 0) {
      alert("Please enter data with a valid amount and rate");
    } else {
      let Add = parseInt(num1) * parseInt(num2) * parseInt(num3) / 100;
      console.log(typeof(Add));
      setAdd(parseInt(Add));
    }
  };

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
  };

  return (
    
    <>
   <Search/>
    <Sidemenu/>
    </>
  );
}

export default Teacher;
