import  { useState, useEffect } from "react";
import Barnav from "../Components/Barnav";

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

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loanRequests, setLoanRequests] = useState([]);

  useEffect(() => {
    fetchLoanRequests();
  }, []);

  const fetchLoanRequests = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "http://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getAll";
    try {
      const response = await fetch(proxyUrl + apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setLoanRequests(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredData = loanRequests.filter((row) =>
    row.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Barnav />
      <div className="p-6 w-[80%] ml-[20%]">
        <h2 className="text-2xl font-semibold mb-4">Manage Loans</h2>
        <div>
          <input
            type="text"
            placeholder="Search by Teacher Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[300] px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
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
                        <span
                          className={`px-2 py-1 font-semibold leading-tight text-white cursor-pointer ${
                            row[column.accessor] === "Pending" ? "#BB67FF" : "#FC929D"
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
      </div>
    </>
  );
};

export default Teachers;
