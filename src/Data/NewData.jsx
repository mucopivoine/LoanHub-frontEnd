import  { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Month 1', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Month 2', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Month 3', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Month 4', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Month 5', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Month 6', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Month 7', uv: 3490, pv: 4300, amt: 2100 },
];
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-72d7y5';
  render() {
    return (
        <div className="lg:mt-[60px] lg:ml-[270px]">
            
      <ResponsiveContainer width="80%" height={500} >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#3B82F6" />
          <Bar dataKey="uv" fill="#EF4444" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      
    );
  }
}

