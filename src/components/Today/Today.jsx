import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DailyGoal from 'components/dailyGoal/dailyGoal';
import Water from 'components/water/water';
import Food from 'components/food/food';
import arrow from '../../images/icons/arrow-right.svg';
import { fetchGoals } from 'redux/usersGoal/operations';
import css from './today.module.css';

const Today = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div>
      <div className={css.mainHead}>
        <h1 className={css.todayHead}>Today</h1>

        <div className={css.linkWrapper}>
          <Link className={css.todayLink} to="">
            On the way to the goal
          </Link>
          <img className={css.imgToday} src={arrow} alt="arrow" />
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
