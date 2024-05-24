import  { useState, useEffect } from "react";
import axios from "axios";
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
const Table = ( columns, data, searchTerm, setSearchTerm ) => {
  const filteredData = data.filter((row) =>
    row.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Barnav />
      <div>
        <div>
          <input
            type="text"
            placeholder="Search by Teacher Name"
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
                        <span
                          className={`px-2 py-1 font-semibold leading-tight text-white cursor-pointer ${
                            row[column.accessor] === "Pending"
                              ? 'bg-red-500'
                              : 'bg-green-500'
                          } rounded-full`}
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
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const cookie = document.cookie.split('jwt=')[1];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/getall', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`,
          },  withCredentials: true,
        });
        if (response.data && Array.isArray(response.data.teachers)) {
          setData(response.data.teachers);
        } else {
          console.error('Expected an array but received:', response.data);
          setError('Unexpected data format received from server');
        }
      } catch (error) {
        console.error('Error fetching teacher data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          setError(error.response.data.error || 'Failed to fetch teacher data');
        } else {
          setError('Failed to fetch teacher data');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="p-6 w-[80%] ml-[20%]">
      <h2 className="text-2xl font-semibold mb-4">Manage Loans</h2>
      <Table columns={columns} data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};
export default Teachers;