import React from 'react';
import CaloriesChart from 'components/Charts/CaloriesChart/CaloriesChart';
import WaterChart from 'components/Charts/WaterChart/WaterChart';
import WeightChart from 'components/Charts/WeightChart/WeightChart';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGraph } from 'redux/dashboard/operations';

import leftArrow from '../../images/icons/arrow-left.svg';

import css from './dashboard.module.css';

const data = new Date();
const month = data.getMonth();

function getMonth() {
  let monthDate = '';
  switch (month) {
    case 0:
      monthDate = 'Jaunary';
      break;
    case 1:
      monthDate = 'February';
      break;
    case 2:
      monthDate = 'March';
      break;
    case 3:
      monthDate = 'April';
      break;
    case 4:
      monthDate = 'May';
      break;
    case 5:
      monthDate = 'June';
      break;
    case 6:
      monthDate = 'July';
      break;
    case 7:
      monthDate = 'August';
      break;
    case 8:
      monthDate = 'September';
      break;
    case 9:
      monthDate = 'October';
      break;
    case 10:
      monthDate = 'November';
      break;
    case 11:
      monthDate = 'December';
      break;
    default:
      console.log('Sorry');
  }
  return monthDate;
}

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGraph());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.dashboardContainer}>
        <div className={css.dashboardTitle}>
          <ul className={css.dashboardTitleUl}>
            <Link className={css.btnToMain} to={'/'}>
              <img src={leftArrow} alt="arrow" />
            </Link>
            <p className={css.dashboardTitleP}>Last month</p>
          </ul>
          <p className={css.month}>{getMonth()}</p>
        </div>
        <div className={css.chartContainer}>
          <CaloriesChart />
          <WaterChart />
        </div>
        <WeightChart />
      </div>
    </div>
  );
};

export default Dashboard;
