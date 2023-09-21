import React from 'react';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import css from './food.module.css';

export default function Food() {
  const { items } = useSelector(selectGoals);

  if (Object.keys(items).length === 0) {
    return;
  }
  const totalCalories = items.total.calories.goal;
  const usedCalories = items.total.calories.used;
  const goalСarbohydrates = items.total.carbohydrates.goal;
  const usedСarbohydrates = items.total.carbohydrates.used;
  const goalProtein = items.total.protein.goal;
  const usedProtein = items.total.protein.used;
  const goalFat = items.total.fat.goal;
  const usedFat = items.total.fat.used;

  function percentNutrition(goal, used) {
    if (used >= goal) {
      return 100;
    }
    return Math.round((used / goal) * 100);
  }

  function leftNutrient(goal, used) {
    if (used >= goal) {
      return 0;
    }
    return parseFloat((goal - used).toFixed(2));
  }

  return (
    <div className={css.foodWrapper}>
      <h2 className={css.foodHead}>Food</h2>

      <div className={css.graphWrapper}>
        <div style={{ width: '168px', height: '168px' }}>
          <CircularProgressbarWithChildren
            strokeWidth={10}
            value={usedCalories}
            maxValue={`${totalCalories}`}
            styles={buildStyles({
              pathColor: '#45FFBC',
              trailColor: '#292928',
            })}
          >
            <h3 style={{ fontSize: 42, fontWeight: 400, color: '#FFFFFF' }}>
              {usedCalories >= totalCalories ? 'DONE' : usedCalories}
            </h3>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#B6B6B6',
              }}
            >
              calories
            </p>
          </CircularProgressbarWithChildren>
        </div>

        <div className={css.totalCalorieWrapper}>
          <div className={css.carboWrapper}>
            <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentNutrition(goalСarbohydrates, usedСarbohydrates)}
                text={`${percentNutrition(
                  goalСarbohydrates,
                  usedСarbohydrates
                )}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#FFC4F7',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div>
            <div className={css.itemWrapper}>
              <h3 className={css.calorieHead}>Carbonohidrates</h3>
              <div className={css.nutritionWrapper}>
                <p className={css.goalWrapper}>
                  Goal:
                  <span className={css.carboSpan}>{goalСarbohydrates}</span>
                </p>
                <p className={css.leftWrapper}>
                  left:
                  <span className={css.carboSpan}>
                    {leftNutrient(goalСarbohydrates, usedСarbohydrates)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={css.protWrapper}>
            <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentNutrition(goalProtein, usedProtein)}
                text={`${percentNutrition(goalProtein, usedProtein)}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#FFF3B7',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div>
            <div className={css.itemWrapper}>
              <h3 className={css.calorieHead}>Protein</h3>
              <div className={css.nutritionWrapper}>
                <p className={css.goalWrapper}>
                  Goal: <span className={css.carboSpan}>{goalProtein}</span>
                </p>
                <p className={css.leftWrapper}>
                  left:{' '}
                  <span className={css.carboSpan}>
                    {leftNutrient(goalProtein, usedProtein)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={css.fatWrapper}>
            <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentNutrition(goalFat, usedFat)}
                text={`${percentNutrition(goalFat, usedFat)}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#45FFBC',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div>
            <div className={css.itemWrapper}>
              <h3 className={css.calorieHead}>Fat</h3>
              <div className={css.nutritionWrapper}>
                <p className={css.goalWrapper}>
                  Goal: <span className={css.carboSpan}>{goalFat}</span>
                </p>
                <p className={css.leftWrapper}>
                  left:{' '}
                  <span className={css.carboSpan}>
                    {leftNutrient(goalFat, usedFat)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
