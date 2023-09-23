import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import BuildWeightChart from './BuildWeightChart';
import { useSelector } from 'react-redux';

import css from './weightChart.module.css';

const _ = require('lodash');

export default function WeightChart() {
  const { graph } = useSelector(selectCharts);

  const data = graph.weight;

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
