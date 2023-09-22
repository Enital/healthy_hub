import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import { useSelector } from 'react-redux';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

import css from './caloriesChart.module.css';

const _ = require('lodash');

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

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
    (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 500 + 1250)
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
    label: 'Calories',
    data: data,
    fill: false,
    showLine: true,
    // strokeColor: 'rgba(255, 240, 196, 1)',
    borderColor: '#E3FFA8',
    borderWidth: 1,
    tension: 0.4,
    pointRadius: 0,
    pointBorderColor: '#E3FFA8',
    pointHoverRadius: 3,
    pointHitRadius: 12,
    pointBackgroundColor: '#E3FFA8',
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
      min: 0,
      max: 3000,
      grid: {
        color: '#292928',
      },
      gridLines: {
        display: false,
        color: '#B6B6B6',
      },
      ticks: {
        stepSize: 1000,
        color: '#B6B6B6',
      },
    },
    x: {
      grid: {
        color: '#292928',
      },
      ticks: {
        // stepSize: 1,
        color: '#B6B6B6',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      cornerRadius: 8,
      caretSize: 0,
      padding: 10,
      borderColor: 'rgba(227, 255, 168, 0.1)',
      borderWidth: 3,
      backgroundColor: '#0f0f0f',
      titleFont: {
        weight: 'bold',
        size: 32,
        color: 'white',
      },
      displayColors: false,
      yAlign: 'bottom',
      xAlign: 'auto',
      bodyFont: {
        size: 32,
      },
      footerFont: {
        size: 16,
      },
      footerAlign: 'center',
      labelAlign: 'center',
      callbacks: {
        title: () => null,
        label: context => context.raw,
        footer: () => 'calories',
      },
    },
  },
};

const average = Math.round(_.mean(data));

export default function CaloriesChart() {
  const { graph } = useSelector(selectCharts);
  console.log(graph);

  return (
    <div className={css.caloriesChart}>
      <ul>
        <div className={css.dashboardTitle}>
          <p className={css.chartTitle}>Calories</p>
          <p className={css.chartSubtitle}>Average value: {average} cal</p>
        </div>
        <div className={css.chart}>
          <Line options={options} data={dataOne} />
        </div>
      </ul>
    </div>
  );
}
