import React from 'react';

import css from './buildWeightChart.module.css';

export default function BuildWeightChart() {
  const labels = [
    'Sep',
    'Aug',
    'Jul',
    'Jun',
    'May',
    'Apr',
    'Mar',
    'Feb',
    'Jan',
    'Dec',
    'Nov',
    'Oct',
  ];
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 88, 89, 90, 91];

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
