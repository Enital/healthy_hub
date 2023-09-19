import React from 'react';
import bubble from './../../images/icons/bubble.svg';
import milk from './../../images/icons/milk.svg';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';
import css from './dailyGoal.module.css';

export default function DailyGoal() {
  const { items } = useSelector(selectGoals);

  if (Object.keys(items).length === 0) {
    return;
  }
  const waterGoal = items.total.water.goal;
  const caloriesGoal = items.total.calories.goal;

  return (
    <div className={css.dailyWindow}>
      <h3 className={css.dailyHead}>Daily goal</h3>

      <div className={css.dailyWrapper}>
        <div className={css.bubbleWrapper}>
          <img src={bubble} alt="illustration" />
          <div className={css.caloriesWrapper}>
            <h3 className={css.caloriesHead}>Calories</h3>
            <p className={css.calories}>{caloriesGoal}</p>
          </div>
        </div>
        <div className={css.milkWrapper}>
          <img src={milk} alt="illustration" />
          <div className={css.waterWrapper}>
            <h3 className={css.waterHead}>Water</h3>
            <p className={css.water}>
              {waterGoal}
              <span className={css.waterSpan}>ml</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
