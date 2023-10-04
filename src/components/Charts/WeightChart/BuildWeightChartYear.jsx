import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import { useSelector } from 'react-redux';

import css from './buildWeightChartYear.module.css';
import yearData from 'components/Functions/yearData';
import yearUpdate from 'components/Functions/yearUpdate';

export default function BuildWeightChart() {
  const { graph } = useSelector(selectCharts);

  const labelsYear = yearUpdate();
  let labels = [];
  for (let i = 0; i < 12; i += 1) {
    if (labelsYear[i] === 'Jan') {
      labels[i] = 'January';
    }
    if (labelsYear[i] === 'Feb') {
      labels[i] = 'February';
    }
    if (labelsYear[i] === 'Mar') {
      labels[i] = 'March';
    }
    if (labelsYear[i] === 'Apr') {
      labels[i] = 'April';
    }
    if (labelsYear[i] === 'May') {
      labels[i] = 'May';
    }
    if (labelsYear[i] === 'Jun') {
      labels[i] = 'June';
    }
    if (labelsYear[i] === 'Jul') {
      labels[i] = 'July';
    }
    if (labelsYear[i] === 'Aug') {
      labels[i] = 'August';
    }
    if (labelsYear[i] === 'Sep') {
      labels[i] = 'September';
    }
    if (labelsYear[i] === 'Oct') {
      labels[i] = 'October';
    }
    if (labelsYear[i] === 'Nov') {
      labels[i] = 'November';
    }
    if (labelsYear[i] === 'Dec') {
      labels[i] = 'December';
    }
  }

  const weightData = yearData(graph.days, graph.weight);
  const data = weightData;
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
