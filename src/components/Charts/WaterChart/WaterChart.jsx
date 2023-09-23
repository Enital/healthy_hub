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

import css from './waterChart.module.css';

const _ = require('lodash');

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const WaterChart = () => {
  const { graph } = useSelector(selectCharts);
  const labels = graph.days;
  // const data = graph.water;
  let caption = 'K';
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
    randomScaling(),
  ];

  const datasets = [
    {
      label: 'Water',
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
          footer: () => 'milliliters',
        },
      },
    },
  };

  const average = Math.round(_.mean(data));

  return (
    <div className={css.waterChart}>
      <ul>
        <div className={css.dashboardTitle}>
          <p className={css.chartTitle}>Water</p>
          <p className={css.chartSubtitle}>Average value: {average} ml</p>
        </div>
        <div className={css.chart}>
          <Line options={options} data={dataOne} />
        </div>
      </ul>
    </div>
  );
};

export default WaterChart;
