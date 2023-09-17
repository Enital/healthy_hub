import React from 'react';

import { DoughnutChart } from 'functions/DoughnutChart';

export default function Food() {
  const d = 70;
  const w = 100;
  return (
    <div>
      <h3>Food</h3>
      <div style={{ width: '300px', height: '300px' }}>
        {DoughnutChart(d, w)}
      </div>
    </div>
  );
}
