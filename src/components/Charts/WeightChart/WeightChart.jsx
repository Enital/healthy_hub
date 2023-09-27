import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import BuildWeightChart from './BuildWeightChart';
import BuildWeightChartYear from './BuildWeightChartYear';
import { useSelector } from 'react-redux';

import css from './weightChart.module.css';

const _ = require('lodash');

export default function WeightChart({ showMonth }) {
  const { graph } = useSelector(selectCharts);

  const data = graph.weight;
  const processedData = data.filter(item => {
    return item > 0;
  });
  const average = _.mean(processedData).toFixed(1);

  return (
    <div className={css.weightChart}>
      <div className={css.weightTitle}>
        <p className={css.chartTitle}>Weight</p>
        <p className={css.chartSubtitle}>
          Average value: <span className={css.average}>{average} kg</span>
        </p>
      </div>
      <div className={css.chart}>
        {showMonth ? <BuildWeightChart /> : <BuildWeightChartYear />}
      </div>
    </div>
  );
}
