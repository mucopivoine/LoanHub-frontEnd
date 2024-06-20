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
  { name: 'January', ml: 15000000, mp: 0.001},
  { name: 'February', ml: 30000000, mp: 0.0026},
  { name: 'March', ml: 20000000, mp: 0.0013 },
  { name: 'April', ml: 25000000, mp: 0.0013 },
  { name: 'May', ml: 15000000, mp: 0.0015 },
  { name: 'June', ml: 18000000, mp: 0.005},
  { name: 'July', ml: 20000000, mp: 0.0018},
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className='flex justify-between pl-30 gap-12'>
        <div className="mt-20 w-[60rem] ">
          <ResponsiveContainer width="110%" height={400}>
            <BarChart
              width={800}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(tick) => `${tick * 100}%`} />
              <Tooltip formatter={(value, name) => {
                  if (name === 'r') {
                    return [`${value * 100}%`, 'Monthly payment'];
                  }
                  return [value, name];
                }} />
              <Legend />
              <Bar yAxisId="left" dataKey="ml" fill="#f2cc8f" />
              <Bar yAxisId="right" dataKey="mp" fill="#335c67" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='mr-10 '>
          {/* Other content */}
        </div>
      </div>
    );
  }
}