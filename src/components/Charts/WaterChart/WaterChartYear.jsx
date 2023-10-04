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
import yearData from 'components/Functions/yearData';
import yearUpdate from 'components/Functions/yearUpdate';

const _ = require('lodash');

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export default function WaterChart() {
  const { graph } = useSelector(selectCharts);
  const waterData = yearData(graph.days, graph.water);
  const data = waterData;
  let caption = 'L';

  const labelsYear = yearUpdate();
  const labels = labelsYear;
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

  const processedData = data.filter(item => {
    return item > 0;
  });

  const average = Math.round(_.mean(processedData));

  return (
    <div className={css.waterChart}>
      <div className={css.waterTitle}>
        <p className={css.chartTitle}>Water</p>
        <p className={css.chartSubtitle}>
          Average value: <span className={css.average}>{average} ml</span>
        </p>
      </div>
      <div className={css.chart}>
        <Line options={options} data={dataOne} />
      </div>
    </div>
  );
}
