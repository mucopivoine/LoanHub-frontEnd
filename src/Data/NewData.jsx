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
  { name: 'Month 1', ml: 1000000, r: 0.01, amt: 2400 },
  { name: 'Month 2', ml: 700000, r: 0.02, amt: 2210 },
  { name: 'Month 3', ml: 500000, r: 0.03, amt: 2290 },
  { name: 'Month 4', ml: 250000, r: 0.04, amt: 2000 },
  { name: 'Month 5', ml: 100000, r: 0.05, amt: 2181 },
  { name: 'Month 6', ml: 70000, r: 0.06, amt: 2500 },
  { name: 'Month 7', ml: 50000, r: 0.07, amt: 2100 },
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
                    return [`${value * 100}%`, 'Interest Rate'];
                  }
                  return [value, name];
                }} />
              <Legend />
              <Bar yAxisId="left" dataKey="ml" fill="#f2cc8f" />
              <Bar yAxisId="right" dataKey="r" fill="#335c67" />
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