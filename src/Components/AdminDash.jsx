import { FaRegCalendarMinus } from 'react-icons/fa'; // Correct import statement for react-icons
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Leftnav from '../Components/Leftnav'
import Table from '../Components/Table'

// import Piechart from './Piechart';


function AdminDash() {
  const data = [
    { name: 'year 1', uv: 400, pv: 2400,  },
    { name: 'year 2', uv: 500, pv: 4567,  },
    { name: 'year 3', uv: 600, pv: 1398, },
    { name: 'year 4', uv: 700, pv: 2400,  },
    { name: 'year 5', uv: 800, pv: 4567,  },
    { name: 'year 6', uv: 900, pv: 1398, },
    { name: 'year 7', uv: 1000, pv: 2400,  },
    { name: 'year 8', uv: 100, pv: 4567,  },
    { name: 'year 9', uv: 200, pv: 1398, },
  ];

  const renderBarChart = (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" stroke="gray" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: 'black' }} />
      <Legend wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid pink', borderRadius: 3, lineHeight: '40px' }} />
      <Bar dataKey="uv" fill="pink" barSize={30} />
    </BarChart>
  );
  

  return (
    <div className='flex basis-[30px] border bg-white shadow-md cursor-pointer rounded-4px]'>
      <Leftnav/>
      <Table/>
      
    <div className="pt-[25px] px-[25px] bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="font-normal cursor-pointer text-[28px] leading-[14px]">Dashboard</h1>
      </div>
      <div className="flex grid-cols gap-6 mt-6 pb-4  ">
        {/* Example component with data */}
        <div className="h-20 rounded-lg bg-white border-l-4 border-red-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-110 duration-300 ease">
          <div>
            <h2>LEARNING (MONTHLY)</h2>
            <h1>40,000 RWF</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="pink" />
        </div>
        <div className="h-20 rounded-lg bg-white border-l-4 border-red-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-110 duration-300 ease">
          <div>
            <h2>LEARNING (MONTHLY)</h2>
            <h1>40,000 RWF</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="pink" />
        </div>

        <div className="h-20 rounded-lg bg-white border-l-4 border-red-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-110 duration-300 ease">
          <div>
            <h2>LEARNING (MONTHLY)</h2>
            <h1>40,000 RWF</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="pink" />
        </div>

        <div className="h-20 rounded-lg bg-white border-l-4 border-red-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-110 duration-300 ease">
          <div>
            <h2>LEARNING (MONTHLY)</h2>
            <h1>40,000 RWF</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="pink" />
        </div>

        <div className="h-20 rounded-lg bg-white border-l-4 border-red-400 flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-110 duration-300 ease">
          <div>
            <h2>LEARNING (MONTHLY)</h2>
            <h1>40,000 RWF</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="pink" />
        </div>

        {/* More components like the above can be added here */}
      </div>

      {/* Render the bar chart */}
      {renderBarChart}
    </div>
    </div>
  );
}

export default AdminDash;
