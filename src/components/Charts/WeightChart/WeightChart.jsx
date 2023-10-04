import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import BuildWeightChart from './BuildWeightChart';
import BuildWeightChartYear from './BuildWeightChartYear';
import { useSelector } from 'react-redux';

import css from './weightChart.module.css';
import zeroUpdate from 'components/Functions/zeroUpdate';

export default function WeightChart({ showMonth }) {
  const { graph } = useSelector(selectCharts);
  const data = graph.weight;
  return (
    <div className={css.weightChart}>
      <div className={css.weightTitle}>
        <p className={css.chartTitle}>Weight</p>
        <p className={css.chartSubtitle}>
          Average value:
          <span className={css.average}>{zeroUpdate(data)} kg</span>
        </p>
      </div>
      <div className={css.chart}>
        {showMonth ? <BuildWeightChart /> : <BuildWeightChartYear />}
      </div>
    </div>
  );
}
