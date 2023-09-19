import css from './diaryOnMain.module.css';
import { Link } from 'react-router-dom';
import breakfastImage from '../../images/illustration/breakfast-image.svg';
import lunchImage from '../../images/illustration/lunch-image.svg';
import dinnerImage from '../../images/illustration/dinner-image.svg';
import snackImage from '../../images/illustration/snack-image.svg';
import React, { useState } from 'react';
import MealModal from './MealModal';

const DiaryOnMain = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='css.containerDiary'>
      <div className={css.link}>
        <h2 className={css.diary}>Diary</h2>         
        <Link to="/diary" className={css.seeMore}>
          See More
        </Link>
        <Link to="/diary" className={css.seeMore}>See More</Link>
      </div>

      <div className={css.divBreakfast}>
        <img
          className={css.breakfastImage}
          src={breakfastImage}
          alt="Breakfast"
        />
        <h2 className={css.diaryBreakfast}>Breakfast</h2>
// <<<<<<< diary-see-more
        <button className={css.openModal} onClick={openModal}>
          {' '}
          + Record your meal
        </button>
      </div>
      <MealModal isOpen={isModalOpen} onClose={closeModal} />

      <div className={css.divBreakfast}>
// =======
//         <div className={css.divBreakfastModal}>
//         <button className={css.openModal} onClick={openModal}> + Record your meal</button>
//         </div>
//         </div>
//         <MealModal isOpen={isModalOpen} onClose={closeModal} />
      
//       <div className={css.divBreakfast} >
// >>>>>>> main
        <img className={css.breakfastImage} src={lunchImage} alt="Lunch" />
        <h2 className={css.diaryBreakfast}>Lunch</h2>
        <button className={css.openModal} onClick={openModal}>
          {' '}
          + Record your meal
        </button>
      </div>

      <div className={css.divBreakfast}>
        <img className={css.breakfastImage} src={dinnerImage} alt="Dinner" />
        <h2 className={css.diaryBreakfast}>Dinner</h2>
        <button className={css.openModal} onClick={openModal}>
          {' '}
          + Record your meal
        </button>
      </div>

      <div className={css.divBreakfast}>
        <img className={css.breakfastImage} src={snackImage} alt="Snack" />
        <h2 className={css.diaryBreakfast}>Snack</h2>
        <button className={css.openModal} onClick={openModal}>
          {' '}
          + Record your meal
        </button>
      </div>
    </div>
  );
};

export default DiaryOnMain;
