import React from 'react';
import { FaHandHoldingUsd } from 'react-icons/fa';
function DashboardStatsGrid() {
  const statsData = [
    {
      label: "Approved Loans",
      value: "$3425.60",
      change: "+234",
      iconBgColor: "bg-red-500",
    },
    {
      label: "Pending Loans",
      value: "$5423.80",
      change: "+452",
      iconBgColor: "bg-blue-500",
    },
    {
      label: "  Total  Loans",
      value: "$7325.20",
      change: "+658",
      iconBgColor: "bg-yellow-500",
    },
    // {
    //     label: "Paid  Loans",
    //     value: "$7325.20",
    //     change: "+658",
    //     iconBgColor: "bg-green-500",
    //   },
  ];
  return (
    <div className="flex flex-wrap gap-7 ml-[20%] mt-34">
      {statsData.map((stat, index) => (
        <BoxWrapper key={index}>
          <div className={`rounded-full h-16 w-16 flex items-center justify-center ${stat.iconBgColor}`}>
            <FaHandHoldingUsd  className="text-3xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">{stat.label}</span>
            <div className="flex items-center">
              <strong className="text-2xl text-gray-700 font-semibold">{stat.value}</strong>
              <span className="text-sm text-green-500 pl-2">{stat.change}</span>
            </div>
          </div>
        </BoxWrapper>
      ))}
      {/* Placeholder to maintain space and push to the right */}
      <div className="flex-1 min-w-[calc((100%/3)-2rem)]"></div>
    </div>
  );
}
function BoxWrapper({ children }) {
  return (
    <div
      className="bg-white rounded-lg p-6 flex-1 shadow-lg flex items-center transform transition-transform duration-150 ease-in-out hover:scale-105 cursor-pointer mt-4"
    >
      {children}
    </div>
  );
}
export default DashboardStatsGrid;