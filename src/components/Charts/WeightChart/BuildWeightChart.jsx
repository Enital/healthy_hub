import React from 'react';
import { selectCharts } from 'redux/dashboard/selectors';
import { useSelector } from 'react-redux';

import css from './buildWeightChart.module.css';

export default function BuildWeightChart() {
  const { graph } = useSelector(selectCharts);
  const labels = graph.days;
  const randomScaling = function () {
    return (
      (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 5 + 60)
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
    randomScaling(),
  ];

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
