import { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "./Sidebar";
import Table from './Table';


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

const ManageLoans = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacher, ] = useState(null);

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
    <>
      <Sidebar />
      <div className="p-6 w-[80%] ml-[20%]">
        <h2 className="text-2xl font-semibold mb-4">Manage Loans</h2>
        {/* Ensure that Table component is defined or imported */}
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
    </>
  );
};

export default ManageLoans;
