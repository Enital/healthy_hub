import React from 'react';
import { DoughnutChart } from '../Charts/DoughnutChart/DoughnutChart';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';

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

  function leftNutrient(goal, used) {
    return goal - used;
  }

  return (
    <div>
      <h3>Food</h3>

      <div>
        <div style={{ width: '168px', height: '168px' }}>
          {DoughnutChart(usedCalories, totalCalories)}
        </div>
        <div>
          <div>
            <div style={{ width: '48px', height: '48px' }}>
              {DoughnutChart(usedСarbohydrates, goalСarbohydrates)}
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
              {DoughnutChart(usedProtein, goalProtein)}
            </div>
            <div>
              <h3>Protein</h3>
              <div>
                <p>Goal: {goalProtein}</p>
                <p>left: {leftNutrient(goalProtein, usedProtein)}</p>
              </div>
            </div>
            <div style={{ width: '48px', height: '48px' }}>
              {DoughnutChart(usedFat, goalFat)}
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
