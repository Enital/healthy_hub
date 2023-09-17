import React from 'react';

import { DoughnutChart } from '../Charts/DoughnutChart/DoughnutChart';

export default function Food() {
  const d = 70;
  const w = 100;
  return (
    <div>
      <h3>Food</h3>
      <div>graph</div>
      <div style={{ width: '168px', height: '168px' }}>
        {DoughnutChart(d, w)}
      </div>
    </div>
  );
}
