import React, { useEffect, useState } from 'react';
import CaloriesChart from 'components/Charts/CaloriesChart/CaloriesChart';
import CaloriesChartYear from 'components/Charts/CaloriesChart/CaloriesChartYear';
import WaterChart from 'components/Charts/WaterChart/WaterChart';
import WaterChartYear from 'components/Charts/WaterChart/WaterChartYear';
import WeightChart from 'components/Charts/WeightChart/WeightChart';
import Modal from 'components/DashboardModal/DashboardModal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/';
import { useDispatch } from 'react-redux';
import { fetchGraph } from 'redux/dashboard/operations';
import { selectCharts } from 'redux/dashboard/selectors';
import leftArrow from '../../images/icons/arrow-left.svg';
import arrowDownSvg from '../../images/icons/arrow-down.svg';

import css from './dashboard.module.css';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMonth, setShowMonth] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGraph());
  }, [dispatch]);

  const { graph } = useSelector(selectCharts);
  const today = new Date();
  const todayYear = today.getFullYear();
  const lastYear = todayYear - 1;
  const twoYear = todayYear + '-' + lastYear;

  const twoMonth = graph.labels.monthLong;

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  const toggleModal = () => {
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
            <p className={css.dashboardTitleP}>
              {showMonth ? 'Last month' : 'Last year'}
            </p>
            <button
              type="button"
              className={css.toggleBtn}
              onClick={toggleModal}
            >
              <img
                src={arrowDownSvg}
                alt="down arrow"
                style={{
                  transform: toggleModal ? 'rotate(180deg)' : 'rotate(0deg)',
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
          <p className={css.month}>{showMonth ? twoMonth : twoYear}</p>
        </div>
        <div className={css.chartContainer}>
          {showMonth ? (
            <div className={css.scrollWrapper}>
              <CaloriesChart showMonth={showMonth} />
            </div>
          ) : (
            <div className={css.scrollWrapper}>
              <CaloriesChartYear />
            </div>
          )}
          {showMonth ? (
            <div className={css.scrollWrapper}>
              <WaterChart data={showMonth} />
            </div>
          ) : (
            <div className={css.scrollWrapper}>
              <WaterChartYear />
            </div>
          )}
        </div>
        <WeightChart showMonth={showMonth} />
      </div>
    </div>
  );
};

export default Dashboard;
