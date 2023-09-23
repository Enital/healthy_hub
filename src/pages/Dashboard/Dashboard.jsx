import React from 'react';
import CaloriesChart from 'components/Charts/CaloriesChart/CaloriesChart';
import WaterChart from 'components/Charts/WaterChart/WaterChart';
import WeightChart from 'components/Charts/WeightChart/WeightChart';
import Modal from 'components/DashboardModal/DashboardModal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchGraph } from 'redux/dashboard/operations';

import leftArrow from '../../images/icons/arrow-left.svg';
import arrowDownSvg from '../../images/icons/arrow-down.svg';

import css from './dashboard.module.css';

// const data = new Date();
// const month = data.getMonth();

// function getMonth() {
//   let monthDate = '';
//   switch (month) {
//     case 0:
//       monthDate = 'Jaunary';
//       break;
//     case 1:
//       monthDate = 'February';
//       break;
//     case 2:
//       monthDate = 'March';
//       break;
//     case 3:
//       monthDate = 'April';
//       break;
//     case 4:
//       monthDate = 'May';
//       break;
//     case 5:
//       monthDate = 'June';
//       break;
//     case 6:
//       monthDate = 'July';
//       break;
//     case 7:
//       monthDate = 'August';
//       break;
//     case 8:
//       monthDate = 'September';
//       break;
//     case 9:
//       monthDate = 'October';
//       break;
//     case 10:
//       monthDate = 'November';
//       break;
//     case 11:
//       monthDate = 'December';
//       break;
//     default:
//       console.log('Sorry');
//   }
//   return monthDate;
// }

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMonth, setShowMonth] = useState(true);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchGraph());
  // }, [dispatch]);

  const [timeToggleBtn, setTimeToggleBtn] = useState(false);

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  const toggleModal = () => {
    setTimeToggleBtn(timeToggleBtn => !timeToggleBtn);
    setShowModal(!showModal);
  };

  const handleOnClick = () => {
    setShowMonth(!showMonth);
    closeModal();
  };

  return (
    <div className={css.container}>
      <div className={css.dashboardContainer}>
        <div className={css.dashboardTitle}>
          <ul className={css.dashboardTitleUl}>
            <Link className={css.btnToMain} to={'/'}>
              <img src={leftArrow} alt="arrow" />
            </Link>
            <p className={css.dashboardTitleP}>Last month</p>
            <button
              type="button"
              className={css.toggleBtn}
              onClick={toggleModal}
            >
              <img
                src={arrowDownSvg}
                alt="down arrow"
                // className={css.arrowDownSvg}
                style={{
                  transform: timeToggleBtn ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            {showModal && (
              <Modal onClose={closeModal}>
                <button
                  type="button"
                  className={css.lastButton}
                  onClick={handleOnClick}
                >
                  {showMonth ? 'Last year' : 'Last month'}
                </button>
              </Modal>
            )}
          </ul>
          <p className={css.month}>September</p>
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
