
import { Line } from 'react-chartjs-2';

const Graph = ({ data }) => {
  return (
    <div className='mt-24 h-[230%]'>
      <Line data={data} />
    </div>
  );
};

export default Graph;
