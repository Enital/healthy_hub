import React from 'react';
import CaloriesChart from 'components/Charts/CaloriesChart/CaloriesChart';
import WaterChart from 'components/Charts/WaterChart/WaterChart';
import WeightChart from 'components/Charts/WeightChart/WeightChart';
import { Link } from 'react-router-dom';
// import { BsArrowLeft } from 'react-icons/bs';

import css from './dashboard.module.css';

const data = new Date();
const month = data.getMonth();
// console.log(month);
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
  return (
    <div className={css.dashboardContainer}>
      <div className={css.dashboardTitle}>
        {/* <Link className={css.btnDiary} to={'/'}> */}
        {/* <BsArrowLeft size="1.5rem" /> */}
        {/* </Link> */}
        <p>Last month</p>
        <p>{getMonth()}</p>
      </div>
      <div className={css.chartContainer}>
        <CaloriesChart />
        <WaterChart />
      </div>
      <WeightChart />
    </div>
  );
};

export default Dashboard;
