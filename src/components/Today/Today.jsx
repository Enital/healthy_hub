import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DailyGoal from 'components/dailyGoal/dailyGoal';
import Water from 'components/water/water';
import Food from 'components/food/food';
import arrow from '../../images/icons/arrow-right.svg';
import { fetchGoals } from 'redux/usersGoal/operations';

const Today = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="today">
      <div>
        <h2>Today</h2>

        <div>
          <Link to="">On the way to the goal</Link>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div>
        <DailyGoal />
        <Water />
        <Food />
      </div>
    </div>
  );
};

export default Today;
