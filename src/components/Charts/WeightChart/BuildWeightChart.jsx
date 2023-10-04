import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import { useSelector } from 'react-redux';

import css from './buildWeightChart.module.css';
import monthData from 'components/Functions/monthData';

export default function BuildWeightChart() {
  const { graph } = useSelector(selectCharts);
  // const labels = graph.days;
  // const data = graph.weight;
  const weightData = monthData(graph.days, graph.weight);
  // console.log(caloriesData);
  const labels = weightData.days;
  // console.log(labels);
  const data = weightData.data;
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
