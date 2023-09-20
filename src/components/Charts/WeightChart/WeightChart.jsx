import React from 'react';
import BuildWeightChart from './BuildWeightChart';

import css from './weightChart.module.css';

const _ = require('lodash');

const randomScaling = function () {
  return (
    (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 10 + 60)
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
];

const average = Math.round(_.mean(data));

const WeightChart = () => {
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
};

export default WeightChart;
