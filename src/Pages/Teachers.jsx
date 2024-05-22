
import  {useState} from "react";
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
  {
    id: 5,
    teacherName: "Mary Anna",
    loanType: "short term",
    amount: "$6000",
    status: "pending",
  },
  
];
const Table = ({ columns, data, searchTerm, setSearchTerm }) => {
  const filteredData = data.filter((row) =>
    row.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
    <Barnav/>
    <div>
    <div>
        <input
          type="text"
          placeholder="Search by Teacher Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[300] px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none "

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
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={`cell-${column.accessor}-${row.id}`} className="px-6 py-4">
                {column.accessor === "status" ? (
                  <span
                    className={`px-2 py-1 font-semibold leading-tight text-white cursor-pointer ${
                      row[column.accessor] === "Pending"
                        ? '#BB67FF'
                        : '#FC929D'
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
const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="p-6 w-[80%] ml-[20%]">
      <h2 className="text-2xl font-semibold mb-4">Manage Loans</h2>
      <Table columns={columns} data={data}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm} />
    </div>
   
  );
};
export default Teachers;