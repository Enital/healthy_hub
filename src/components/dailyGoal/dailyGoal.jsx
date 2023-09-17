import React from 'react';
import { useEffect, useState } from 'react';
import bubble from './../../images/icons/bubble.svg';
import milk from './../../images/icons/milk.svg';
import axios from 'axios';

const getGoal = async () => {
  const options = {
    method: 'GET',
    url: 'https://goit-healthy-hub.onrender.com/api/user/statistics',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDMxOTExZjE3ZmJhMDY4NzNiMjk1ZiIsImlhdCI6MTY5NDgwMTg5MywiZXhwIjoxNjk3MzkzODkzfQ.OJg9pFwAOeVcYExefy7zABOlOceUW8nwLBaTGnlUokI',
    },
  };
  const { data } = await axios.request(options);
  return data;
};

export default function DailyGoal() {
  const [water, setWater] = useState({});
  const [calories, setCalories] = useState({});
  useEffect(() => {
    (async function getDailyGoal() {
      try {
        const loadedGoal = await getGoal();
        console.log(loadedGoal.total);
        setWater(loadedGoal.total.water);
        setCalories(loadedGoal.total.calories);
      } catch (error) {}
    })();
  }, []);

  const waterGoal = water.goal;
  const caloriesGoal = calories.goal;

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
