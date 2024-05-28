import { useState } from "react";
import Barnav from "../Components/Barnav";
import Search from "./Search";

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

const data = [
  {
    id: 1,
    teacherName: "John Doe",
    loanType: "Short Term",
    amount: "$5000",
    status: "Pending",
  },
  {
    id: 2,
    teacherName: "Jane Smith",
    loanType: "Long Term",
    amount: "$10000",
    status: "Completed",
  },
  {
    id: 3,
    teacherName: "Bob Johnson",
    loanType: "Development",
    amount: "$7500",
    status: "Pending",
  },
  {
    id: 4,
    teacherName: "Mary Williams",
    loanType: "Emergency",
    amount: "$8000",
    status: "Completed",
  },
];

const Table = ({ columns, data, searchTerm }) => {
  const filteredData = data.filter((row) =>
    row.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
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
        <tbody className="bg-whitem divide-y divide-gray-200">
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Search setSearchTerm={setSearchTerm} />
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
