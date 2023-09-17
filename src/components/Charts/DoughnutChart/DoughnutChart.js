import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function data(d, w) {
  const a = d;
  const b = w - d;

  const data = {
    datasets: [
      {
        data: [a, b],
        backgroundColor: ['rgba(69, 255, 188, 1)', 'rgba(41, 41, 40, 1)'],
        borderWidth: 0,
      },
    ],
  };
  return data;
}

const options = {
  cutoutPercentage: 90,

  animation: {
    animateRotate: false,
    animateScale: true,
  },
  doughnutlabel: {
    display: true,
    labels: [
      {
        text: '550',
        font: {
          size: 20,
          weight: 'bold',
          color: 'rgba(69, 255, 188, 1)',
        },
      },
      {
        text: 'total',
      },
    ],
  },
};

export function DoughnutChart(d, w) {
  return <Doughnut options={options} data={data(d, w)} />;
}
