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
    <div className={css.diaryMain}>
      <div className={css.link}>
        <h2 className={css.diary}>Diary</h2>
        <Link to="/see-more" className={css.seeMore}>See More</Link>
      </div>

      <div className={css.divBreakfast}>
        <img className={css.breakfastImage} src={breakfastImage} alt="Breakfast" />
        <h2 className={css.diaryBreakfast}>Breakfast</h2>
        <button className={css.openModal} onClick={openModal}> + Record your meal</button>
        </div>
        <MealModal isOpen={isModalOpen} onClose={closeModal} />
      
      <div>
        <img src={lunchImage} alt="Lunch" />
        <h2>Lunch</h2>
        <button className={css.openModal} onClick={openModal}> + Record your meal</button>
      </div>

      <div>
        <img src={dinnerImage} alt="Dinner" />
        <h2>Dinner</h2>
        <button className={css.openModal} onClick={openModal}> + Record your meal</button>
      </div>

      <div>
        <img src={snackImage} alt="Snack" />
        <h2>Snack</h2>
        <button className={css.openModal} onClick={openModal}> + Record your meal</button>
      </div>
    </div>
  );
};

export default DiaryOnMain;
