import React from 'react';
import bubble from './../../images/icons/bubble.svg';

import milk from './../../images/icons/milk.svg';

export default function DailyGoal() {
  return (
    <div>
      <h3>Daily goal</h3>
      <div>
        <div>
          <img src={bubble} alt="illustration-summer-hiking" />
          <div>
            <h3>Calories</h3>
            <p>1700</p>
          </div>
        </div>
        <div>
          <img src={milk} alt="illustration-summer-hiking" />
          <div>
            <h3>Water</h3>
            <p>1500 ml</p>
          </div>
        </div>
      </div>
    </div>
  );
}
