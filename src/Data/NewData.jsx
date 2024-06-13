
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import MostRequestedLoans from '../Pages/MostrequestedLoans';


const data = [
  { name: 'Month 1', my: 4000, ml: 2400, amt: 2400 },
  { name: 'Month 2', my: 3000, ml: 1398, amt: 2210 },
  { name: 'Month 3', my: 2000, ml: 800, amt: 2290 },
  { name: 'Month 4', my: 2780, ml: 3208, amt: 2000 },
  { name: 'Month 5', my: 4890, ml: 1800, amt: 2181 },
  { name: 'Month 6', my: 3390, ml: 2100, amt: 2500 },
  { name: 'Month 7', my: 4490, ml: 3200, amt: 2100 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className='flex justify-between pl-30 gap-12'>
        <div className="mt-20 w-[60rem] ml-[17%]">
          <ResponsiveContainer width="110%" height={400}>
            <BarChart
              width={800}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="my" fill="#f2cc8f" />
              <Bar dataKey="ml" fill="#335c67" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='mr-10 '>
         
        </div>
      </div>
    );
  }
}
