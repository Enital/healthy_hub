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
import zeroUpdate from 'components/Functions/zeroUpdate';
import monthData from 'components/Functions/monthData';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export default function CaloriesChart({ showMonth }) {
  const { graph } = useSelector(selectCharts);

  const caloriesData = monthData(graph.days, graph.calories);

  const labels = caloriesData.days;
  const data = caloriesData.data;
  let caption = 'K';

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
        scales: {
          x: {
            min: 0,
            max: 10,
          },
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

  const dataOne = {
    labels,
    datasets,
  };

  return (
    <div className={css.caloriesChart}>
      <div className={css.caloriesTitle}>
        <p className={css.chartTitle}>Calories</p>
        <p className={css.chartSubtitle}>
          Average value:
          <span className={css.average}>{zeroUpdate(data)} cal</span>
        </p>
      </div>
      <div className={css.chart}>
        <Line options={options} data={dataOne} />
      </div>
    </div>
  );
}
