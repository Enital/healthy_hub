import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DailyGoal from 'components/dailyGoal/dailyGoal';
import Water from 'components/water/water';
import Food from 'components/food/food';
import arrow from '../../images/icons/arrow-right.svg';
import { fetchGoals } from 'redux/usersGoal/operations';
import { fetchGraph } from 'redux/dashboard/operations';
import css from './today.module.css';

const Today = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
    dispatch(fetchGraph());
  }, [dispatch]);

  return (
    <div>
      <div className={css.mainHead}>
        <h1 className={css.todayHead}>Today</h1>

        <div className={css.linkWrapper}>
          <Link className={css.todayLink} to="/dashboard">
            On the way to the goal
            <img className={css.imgToday} src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className={css.componentWrapper}>
        <div className={css.dailyGoal}>
          <DailyGoal />
        </div>
        <div className={css.waterGoal}>
          <Water />
        </div>
        <div className={css.foodGoal}>
          <Food />
        </div>
      </div>
    </div>
  );
};

export default Today;
