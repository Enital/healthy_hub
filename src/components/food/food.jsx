import React from 'react';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

  const percentСarbohydrates = Math.round(
    (usedСarbohydrates / goalСarbohydrates) * 100
  );
  const percentProtein = Math.round((usedProtein / goalProtein) * 100);
  const percentFat = Math.round((usedFat / goalFat) * 100);

  function leftNutrient(goal, used) {
    return goal - used;
  }

  return (
    <div>
      <h3>Food</h3>

      <div>
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
              {usedCalories}
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
        <div>
          <div>
            <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentСarbohydrates}
                text={`${percentСarbohydrates}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#FFC4F7',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div>
            <div>
              <h3>Carbonohidrates</h3>
              <div>
                <p>Goal:{goalСarbohydrates}</p>
                <p>
                  left: {leftNutrient(goalСarbohydrates, usedСarbohydrates)}
                </p>
              </div>
            </div>
            <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentProtein}
                text={`${percentProtein}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#FFF3B7',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div>
            <div>
              <h3>Protein</h3>
              <div>
                <p>Goal: {goalProtein}</p>
                <p>left: {leftNutrient(goalProtein, usedProtein)}</p>
              </div>
            </div>
            <div style={{ width: '48px', height: '48px' }}>
              <CircularProgressbar
                strokeWidth={10}
                value={percentFat}
                text={`${percentFat}%`}
                styles={buildStyles({
                  textColor: '#B6B6B6',
                  pathColor: '#45FFBC',
                  trailColor: '#292928',
                  textSize: '32px',
                })}
              />
            </div>
            <div>
              <h3>Fat</h3>
              <div>
                <p>Goal: {goalFat}</p>
                <p>left: {leftNutrient(goalFat, usedFat)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
