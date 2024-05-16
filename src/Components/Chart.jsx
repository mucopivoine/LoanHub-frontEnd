
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: [
        15000, 10000, 14000, 11000, 16000, 12000, 8000, 14000, 11000, 12000,
        23000, 12000,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};


  return <Line options={options} data={data} />;


 
import { FaRegSun, FaTachometerAlt, FaChevronRight, FaWrench, FaStickyNote, FaRegChartBar } from 'react-icons/fa';

function Chart() {
  return (
    <div className="bg-red-700 h-screen p-8">
      <div className="px-4 py-8 flex items-center justify-center border-gray-300 border-opacity-30 border-[1px]">
        <h1 className="text-white text-2xl leading-6 font-extrabold cursor-pointer">
          Manager Panel
        </h1>
      </div>
      
      <div className="flex items-center gap-4 py-4 border-b-[1px] border-gray-300 border-opacity-30">
        <FaTachometerAlt color="white" />
        <p className="text-lg font-bold text-white">Dashboard</p>
      </div>

      <div className="pt-4 border-b-[1px] border-gray-300 border-opacity-30">
        <p className="text-xs font-extrabold leading-6 text-white opacity-40">INTERFACE</p>
        
        <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
          <div className="flex items-center gap-4">
            <FaRegSun color="white" />
            <p className="text-lg leading-6 font-normal text-white">Pages</p>
          </div>
          <FaChevronRight color="white" />
        </div>

        <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
          <div className="flex items-center gap-4">
            <FaRegChartBar color="white" />
            <p className="text-lg leading-6 font-normal text-white">Charts</p>
          </div>
          <FaChevronRight color="white" />
        </div>

        <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
          <div className="flex items-center gap-4">
            <FaWrench color="white" />
            <p className="text-lg leading-6 font-normal text-white">Components</p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>

      <div className="pt-4 border-b-[1px] border-gray-300 border-opacity-30">
        <p className="text-xs font-extrabold leading-6 text-white opacity-40">ADDONS</p>
        
        <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
          <div className="flex items-center gap-4">
            <FaStickyNote color="white" />
            <p className="text-lg leading-6 font-normal text-white">Notes</p>
          </div>
          <FaChevronRight color="white" />
        </div>

        <div className="flex items-center justify-between gap-4 cursor-pointer py-4">
          <div className="flex items-center gap-4">
            <FaRegChartBar color="white" />
            <p className="text-lg leading-6 font-normal text-white">Utilities</p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>
    </div>
  );
}

export default Chart;

