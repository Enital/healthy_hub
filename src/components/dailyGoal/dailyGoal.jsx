import React from 'react';
import bubble from './../../images/icons/bubble.svg';
import milk from './../../images/icons/milk.svg';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';

export default function DailyGoal() {
  const { items } = useSelector(selectGoals);

  if (Object.keys(items).length === 0) {
    return;
  }
  const waterGoal = items.total.water.goal;
  const caloriesGoal = items.total.calories.goal;
  return (
    <div>
      <h3>Daily goal</h3>

      <div>
        <div>
          <img src={bubble} alt="illustration" />
          <div>
            <h3>Calories</h3>
            <p>{caloriesGoal}</p>
          </div>
        </div>
        <div>
          <img src={milk} alt="illustration" />
          <div>
            <h3>Water</h3>
            <p>{waterGoal} ml</p>
          </div>
        </div>
      </div>
    </div>
  );
}
