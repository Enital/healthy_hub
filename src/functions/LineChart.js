// import React from 'react';

// import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       label: 'First dataset',
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: 'rgba(75,192,192,0.2)',
//       borderColor: 'rgba(75,192,192,1)',
//     },
//     {
//       label: 'Second dataset',
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: '#742774',
//     },
//   ],
// };

// export default function LineChart() {
//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// }

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
