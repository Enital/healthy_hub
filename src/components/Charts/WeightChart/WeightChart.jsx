import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import BuildWeightChart from './BuildWeightChart';
import { useSelector } from 'react-redux';

import css from './weightChart.module.css';

const _ = require('lodash');

export default function WeightChart() {
  const { graph } = useSelector(selectCharts);

  const data = graph.weight;
  // const randomScaling = function () {
  //   return (
  //     (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 5 + 60)
  //   );
  // };

  // const data = [
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  //   randomScaling(),
  // ];

  const average = Math.round(_.mean(data));

  return (
    <div className={css.weightChart}>
      <div className={css.dashboardTitle}>
        <p className={css.chartTitle}>Weight</p>
        <p className={css.chartSubtitle}>Average value: {average} kg</p>
      </div>
      <div className={css.chart}>
        <BuildWeightChart />
      </div>
    </div>
  );
}
