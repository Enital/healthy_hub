import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import { useSelector } from 'react-redux';

import css from './buildWeightChartYear.module.css';

const _ = require('lodash');

export default function BuildWeightChart() {
  const { graph } = useSelector(selectCharts);

  const labels = [
    'August',
    'July',
    'June',
    'May',
    'April',
    'March',
    'February',
    'January',
    'December',
    'November',
    'October',
    'September',
  ];
  const weight = graph.weight;
  const weightProc = weight.filter(item => {
    return item > 0;
  });
  const dataYear = Math.round(_.mean(weightProc));
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, dataYear];

  return (
    <>
      <div className={css.weightTable}>
        {data.map((item, index) => (
          <div className={css.tableBlock} key={index}>
            <p className={css.tableUpRow}>
              <span>{item}</span>
            </p>
            <p className={css.tableDownRow}>
              <span>{labels[index]}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
