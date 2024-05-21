import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "./Sidebar";

// Define the columns for the table
const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Teacher Name",
    accessor: "teacherName",
  },
  {
    Header: "Loan Type",
    accessor: "loanType",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

// Table component to display the data
const Table = ({ columns, data, searchTerm, setSearchTerm }) => {
  // Filter data based on the search term
  const filteredData = data.filter((row) =>
    row.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-[70%] lg:mt-[50px]">
        <div>
          <input
            type="text"
            placeholder="Search by Loan Type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[300px] px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.Header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((row) => (
                <tr key={row.id}>
                  {columns.map((column) => (
                    <td key={`cell-${column.accessor}-${row.id}`} className="px-6 py-4">
                      {column.accessor === "status" ? (
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              row[column.accessor] === "Pending" ? "bg-red-500" : "bg-green-500"
                            }`}
                          ></span>
                          {row[column.accessor]}
                        </span>
                      ) : (
                        row[column.accessor]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const ManageLoans = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://umwarimu-loan-hub-api.onrender.com/api/teacher/all');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="p-6 w-[80%] ml-[20%]">
      <h2 className="text-2xl font-semibold mb-4">Manage Loans</h2>
      <Table
        columns={columns}
        data={data}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {selectedTeacher && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Teacher Details</h3>
          <p>ID: {selectedTeacher.id}</p>
          <p>Name: {selectedTeacher.teacherName}</p>
          <p>Loan Type: {selectedTeacher.loanType}</p>
          <p>Amount: {selectedTeacher.amount}</p>
          <p>Status: {selectedTeacher.status}</p>
        </div>
      )}
    </div>
  );
};

export default ManageLoans;
