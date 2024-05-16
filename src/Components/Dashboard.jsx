import React from "react";

import Chart from "./Chart";


import Sidemenu from "./Sidemenu";

function Dashboard() {
  return (
    <>
    <div className="flex flex-row">
    <div className="w-[20vw]">
    <Sidemenu />
    </div>
    <div className="">
        <h1 className="text-2xl font-bold ml-9 p-3">Admin Data</h1>
        <p className="ml-9 p-3">This is the admin content it goes here</p>
    <div className="flex flex-col md:px-10 overflow-y-auto w-full">
      <h2 className="lg:text-3xl md:text-2xl text-xl">Dashboard</h2>

      <div className="md:flex md:space-x-8 py-6">
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center">
          <h2>Teacher Expenses</h2>
          <p className="text-gray-500 mt-3">Your Expenses: Rs10000</p>
        </div>
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center md:mt-0 mt-4">
          <h2>Teacher Savings</h2>
          <p className="text-gray-500 mt-3">Your Savings: Rs100000</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center">
          Expenses Graph
          <Chart />
        </div>
      </div>
      <div className="md:flex md:space-x-8 py-6">
        <div className="flex flex-col rounded-md border  md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center">
          <h2>Your Activity</h2>
          <li className="text-gray-500 mt-3">Sent Rs 10000 to my children at school</li>
        </div>
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center md:mt-0 mt-4">
          <h2>Pending Bills</h2>
          <li className="text-gray-500 mt-3">Broadband bill: Rs 1000</li>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Dashboard;