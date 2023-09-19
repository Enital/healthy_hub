import React from 'react';

import css from './buildWeightChart.module.css';
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

function BuildWeightChart() {
  return (
    <>
      <div className={css.weightTable}>
        {data.map((item, index) => (
          <div className={css.tableBlock} key={index}>
            <p className={css.tableUpRow}>
              <span>{item}</span>
            </p>
            <p className={css.tableDownRow}>
              <span>{index + 1}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BuildWeightChart;
