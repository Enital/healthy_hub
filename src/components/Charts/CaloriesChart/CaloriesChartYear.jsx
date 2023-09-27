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

export default function CaloriesChartYear() {
  const { graph } = useSelector(selectCharts);
  // console.log(graph);
  // console.log(showMonth);
  // const labels = graph.days;
  // const DATE = new Date();
  // console.log(DATE);
  const labels = [
    'Aug',
    'Jul',
    'Jun',
    'May',
    'Apr',
    'Mar',
    'Feb',
    'Jan',
    'Dec',
    'Nov',
    'Oct',
    'Sep',
  ];
  // const data = [0, 0, 0, 0, 0, 0, 0, 0, 1700, 1680, 1720, 1600];
  let caption = 'K';
  const calories = graph.calories;
  // console.log(calories);
  const caloriesProc = calories.filter(item => {
    return item > 0;
  });
  const dataYear = Math.round(_.mean(caloriesProc));
  // console.log(dataYear);
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, dataYear];
  const datasets = [
    {
      label: 'Calories',
      data: data,
      fill: false,
      showLine: true,
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

  const options = {
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
          callback: function (value, index, ticks) {
            if (String(value).length === 1) {
              return value;
            }
            return String(value).slice(0, 1) + `${caption}`;
          },
        },
      },
      x: {
        grid: {
          color: '#292928',
        },
        ticks: {
          // stepSize: 1,
          // padding: 6,
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
        // backgroundShadowColor: 'rgba(227, 255, 168, 0.1)',
        // borderColor: 'rgba(227, 255, 168, 0.1)',
        // borderWidth: 3,
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

  const processedData = caloriesProc.filter(item => {
    return item > 0;
  });

  const average = Math.round(_.mean(processedData));

  const dataOne = {
    labels,
    datasets,
  };

  return (
    <div className={css.caloriesChart}>
      <div className={css.caloriesTitle}>
        <p className={css.chartTitle}>Calories</p>
        <p className={css.chartSubtitle}>
          Average value: <span className={css.average}>{average} cal</span>
        </p>
      </div>
      <div className={css.chart}>
        <Line options={options} data={dataOne} />
      </div>
    </div>
  );
}
