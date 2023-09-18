import React from 'react';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';

export default function Water() {
  const { items } = useSelector(selectGoals);

  if (Object.keys(items).length === 0) {
    return;
  }
  const waterGoal = items.total.water.goal;
  const waterUsed = items.total.water.used;
  return (
    <div>
      <h2>Water</h2>
      <div>
        <div>graphic</div>
        <div>
          <h3>Water consumption</h3>
          <div>
            <p>{waterGoal}ml</p>
            <p>left: {waterGoal - waterUsed}ml</p>
          </div>
          <button>Add water intake</button>
        </div>
      </div>
    </div>
  );
}
