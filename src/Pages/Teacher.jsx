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
import { Sidebar } from 'lucide-react';

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
          backgroundColor: ['#36A2EB', '#FF6384'],
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
    e.preventDefault()
    console.log(e);

    if(num1===0 || num2===0 || num3===0)
      {
        alert("Please enter data with  valid amount and rate")
      }
      
      else
      {
        let Add = parseInt(num1)*parseInt(num2)*parseInt(num3)/100;
        console.log(typeof(Add));
        setAdd(parseInt(Add))
      }

  }

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
  }


  return (
    <>
    <Sidemenu/>

      <div className="ml-64 p-10">
        <h1 className='font-bold text-2xl'>Teacher Account</h1>
        <p>This is where all main content goes.</p>

        
      
      <div className='container'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=''
      >
        <div className='heading_text'>
          <h1 className='heading_one'>Simple Calculator</h1>
          <p className='heading_two'>Calculate your simple interest Easily</p>
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>₹ {Add}</h3>
          <p className='total_amount_para'>Total simple interest</p>
          </div>
        </div>
        <form onSubmit={calcSum}>

        <div className='input_area'>
            <div className='input_field '>
            <TextField  type="number" value={num1 || ""} onChange={(e) => setNum1(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField type="number" value={num2 || ""} onChange={(e) => setNum2(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField  type="number" value={num3 || ""} onChange={(e) => setNum3(e.target.value)} id="outlined-basic" label="Time period ( Yr )" variant="outlined" />
            </div>
        </div>
        <div className='button_collection'>
          <Stack spacing={2} direction="row">       
          <Button type='submit' className='btn_one' style={{backgroundColor: '#FF8C8C'}} variant="contained">Calculate</Button>
          <Button className='btn_one'  onClick={handleClick}  variant="outlined">Reset</Button>
          </Stack>
        </div>
        </form>
        </motion.div>
        </div>
      </div>

    </>
  );
}

export default Teacher;
