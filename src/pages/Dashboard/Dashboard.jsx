import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

import css from './dashboard.module.css';

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
const data = [
  1330, 1325, 1335, 1351, 1354, 1376, 1400, 1500, 1550, 1600, 1500, 1530,
];

const datasets = [
  {
    label: 'Water',
    data,
    fill: false,
    strokeColor: 'rgba(195, 240, 196, 1)',
    borderColor: '#E3FFA8',
    borderWidth: 1,
    tension: 0.4,
    radius: 0,
  },
];

const dataOne = {
  labels,
  datasets,
};
const dataTwo = {
  labels,
  datasets,
};
const dataThree = {
  labels,
  datasets,
};
// #292928;

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
    scales: {
      y: {
        min: 0,
        max: 3000,
      },
    },
  },
};

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.caloriesChart}>
        <h3>Calories</h3>
        <p>Average value: 1700 kcal</p>
        <div className={css.chart}>
          <Line options={options} data={dataOne} />
        </div>
      </div>

      <div className={css.waterChart}>
        <h3>Water</h3>
        <p>Average value: 1700 ml</p>
        <div className={css.chart}>
          <Line data={dataTwo} />
        </div>
      </div>
      <div className={css.weightChart}>
        <h3>Weight</h3>
        <p>Average value: 70 kg</p>
        <Line data={dataThree} />
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
