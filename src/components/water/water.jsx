import React from 'react';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';
import AddWaterModal from 'components/addWaterModal/addWaterModal';
import { useState } from 'react';
import css from './water.module.css';
import addSvg from '../../images/icons/add.svg';
import scrollLock from 'scroll-lock';

export default function Water() {
  const [openModal, setOpenModal] = useState(false);
  const { items } = useSelector(selectGoals);

  const openModalHendler = () => {
    setOpenModal(true);
    scrollLock.disablePageScroll(document.body);
  };

  const closeModalHendler = () => {
    setOpenModal(false);
    scrollLock.clearQueueScrollLocks();
    scrollLock.enablePageScroll();
  };

  if (Object.keys(items).length === 0) {
    return;
  }
  const waterGoal = items.total.water.goal;
  const waterUsed = items.total.water.used;

  function progress(used, goal) {
    if (used >= goal) {
      return 100;
    }
    return Math.round((waterUsed / waterGoal) * 100);
  }

  let walue = -20;

  switch (progress(waterUsed, waterGoal)) {
    case 91:
      walue = -18;
      break;
    case 92:
      walue = -16;
      break;
    case 93:
      walue = -15;
      break;
    case 94:
      walue = -13;
      break;
    case 95:
      walue = -12;
      break;
    case 96:
      walue = -10;
      break;
    case 97:
      walue = -8;
      break;
    case 98:
      walue = -6;
      break;
    case 99:
      walue = -5;
      break;
    case 100:
      walue = 3;
      break;
    default:
      walue = -20;
  }

  return (
    <div className={css.waterWindow}>
      <h2 className={css.head}>Water</h2>
      <div className={css.waterWrapper}>
        <div className={css.waterProgressBar}>
          <div className={css.progress}>
            <div
              className={css.progressBar}
              style={{
                height: `${progress(waterUsed, waterGoal)}%`,
              }}
            >
              <span className={css.srOnly} style={{ top: `${walue}px` }}>
                {`${progress(waterUsed, waterGoal)}%`}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className={css.consumption}>Water consumption</h3>
          <div className={css.item}>
            <p className={css.waterGoal}>
              {waterUsed}
              <span className={css.waterSpan}>ml</span>
            </p>
            <p className={css.left}>
              left:
              <span className={css.leftSpan}>
                {waterGoal <= waterUsed ? 0 : waterGoal - waterUsed}
              </span>
              <span className={css.waterSpan2}>ml</span>
            </p>
          </div>
          {openModal && (
            <AddWaterModal
              closeModal={closeModalHendler}
              waterGoal={waterGoal}
              waterUsed={waterUsed}
            />
          )}
          <button className={css.waterbutton} onClick={openModalHendler}>
            <span>
              <img className={css.waterImg} src={addSvg} alt="plus" />
            </span>
            Add water intake
          </button>
        </div>
      </div>
    </div>
  );
}
