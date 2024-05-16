import Sidebar from '../Components/Sidebar';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { IoIosPersonAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
const ViewTeacher = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 4, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 5, name: 'Mike Brown', email: 'ike@example.com' },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com' },
  ]);
  const handleAddPerson = () => {
    const newPerson = { id: data.length + 1, name: '', email: '' };
    setData([...data, newPerson]);
  };
  const handleDeletePerson = (id) => {
    setData(data.filter((person) => person.id!== id));
  };
//   const handleAdd = (id) =>{
//     setData(data.fil)
//   }
  return (
    <>
    <div>
    <Sidebar/>
    </div>
    <div>
    <div className="flex flex-col w-[70%] ml-[20%] lg:mt-[50px] ">
      <div className=''>
      
    <Link to="/admin/contactus"><button
        className="bg-red-500 hover:bg-red-400 lg:ml-[80%] w-[20%] items-end text-white font-bold py-2 px-4 rounded"
        onClick={handleAddPerson}
      >
        
        Add Person
      </button></Link>
      
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Modify
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((person) => (
                  <tr key={person.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium gap-4">
                       <div className='flex gap-5'>
                      <button
                        className=" -  gap-5 "
                        onClick={() => handleDeletePerson(person.id)}
                      >
                         <MdDelete className=''/>
                      </button>
                      
                    
                      <button
                        className=" p-2 "
                        onClick={() => handleAddPerson(person.id)}
                      >
                       <FaEdit/>
                      </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
    </div>
    </div>
    </>
  );
};
export default ViewTeacher;