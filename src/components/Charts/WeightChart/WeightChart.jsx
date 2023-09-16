// // import React from 'react';

// // import { Line } from 'react-chartjs-2';

// // const data = {
// //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
// //   datasets: [
// //     {
// //       label: 'First dataset',
// //       data: [33, 53, 85, 41, 44, 65],
// //       fill: true,
// //       backgroundColor: 'rgba(75,192,192,0.2)',
// //       borderColor: 'rgba(75,192,192,1)',
// //     },
// //     {
// //       label: 'Second dataset',
// //       data: [33, 25, 35, 51, 54, 76],
// //       fill: false,
// //       borderColor: '#742774',
// //     },
// //   ],
// // };

// // export default function LineChart() {
// //   return (
// //     <div>
// //       <Line data={data} />
// //     </div>
// //   );
// // }

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function Chart() {
//   return <Line options={options} data={data} />;
// }

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

import css from './weightChart.module.css';

const _ = require('lodash');

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const labels = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
];

const randomScaling = function () {
  return (
    (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 10 + 60)
  );
};

const data = [
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
];

const datasets = [
  {
    label: 'Water',
    data: data,
    fill: false,
    showLine: true,
    borderColor: '#E3FFA8',
    borderWidth: 1,
    tension: 0.4,
    pointRadius: 0,
  },
];
const dataOne = {
  labels,
  datasets,
};

// #292928;

export const options = {
  responsive: true,
  scales: {
    y: {
      min: 50,
      max: 80,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const average = Math.round(_.mean(data));

const WeightChart = () => {
  return (
    <div className={css.caloriesChart}>
      <div className={css.dashboardTitle}>
        <p className={css.chartTitle}>Weight</p>
        <p className={css.chartSubtitle}>Average value: {average} kg</p>
      </div>
      <div className={css.chart}>
        <Line options={options} data={dataOne} />
      </div>
    </div>
  );
};

export default WeightChart;
