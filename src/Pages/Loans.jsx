import { useState, useEffect } from 'react';
import axios from 'axios';
import Barnav from "../Components/Barnav";
import Search from "./Search";

const cookie = document.cookie.split('jwt=')[1];

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

const Table = ({ columns, data, searchTerm }) => {
  const filteredData = data.filter((row) =>
    row.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mt-5 ">Loans statuses</h1>
      <table className="min-w-full divide-y mt-[50px]">
        <thead className="bg-white divide-y divide-gray-200">
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
                <td key={`cell-${column.accessor}-${row.id}`} className="px-6 py-4 whitespace-nowrap">
                  {column.accessor === "status" ? (
                    <span
                      className={`px-2 py-1 font-semibold leading-tight text-white cursor-pointer ${
                        row[column.accessor] === "Pending"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    >
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
  );
};

const Loans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanResponses = async () => {
      try {
        const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/response', {
          headers: {
            'Authorization': `Bearer ${cookie}`
          },
          withCredentials: true
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching loan responses:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanResponses();
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  if (loading) {
    return <div className="mt-32 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="mt-32 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Search setSearchTerm={handleSearch} />
      <Barnav />
      <div className="flex flex-col lg:flex-row gap-6 mt-20 mx-auto w-[90%]">
        <div className="flex flex-col w-full lg:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">Manage Loans</h2>
          <Table columns={columns} data={data} searchTerm={searchTerm} />
        </div>
        {/* Sidebar or additional content can go here */}
      </div>
    </div>
  );
};

export default Loans;
