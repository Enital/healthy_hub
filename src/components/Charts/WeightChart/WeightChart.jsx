import React, { useEffect, useState } from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import BuildWeightChart from './BuildWeightChart';
import BuildWeightChartYear from './BuildWeightChartYear';
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';

import css from './weightChart.module.css';
import 'simplebar-react/dist/simplebar.min.css';

const _ = require('lodash');

export default function WeightChart({ showMonth }) {
  const { graph } = useSelector(selectCharts);

  const data = graph.weight;

  const processedData = data.filter(item => {
    return item > 0;
  });
  // console.log(processedData);
  const average = _.mean(processedData).toFixed(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
      return () => {
        windowWidth.onresize = false;
      };
    };
  }, [windowWidth]);
  if (windowWidth > 834) {
    return (
      <div className={css.weightChart}>
        <div className={css.weightTitle}>
          <p className={css.chartTitle}>Weight</p>
          <p className={css.chartSubtitle}>
            Average value: <span className={css.average}>{average} kg</span>
          </p>
        </div>
        <SimpleBar style={{ maxWidth: 310 }}>
          <div className={css.chart}>
            {showMonth ? <BuildWeightChart /> : <BuildWeightChartYear />}
          </div>
        </SimpleBar>
      </div>
    );
  } else {
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
}
