import css from './diaryOnMain.module.css';
import { Link } from 'react-router-dom';
import breakfastImage from '../../images/illustration/breakfast-image.svg';
import lunchImage from '../../images/illustration/lunch-image.svg';
import dinnerImage from '../../images/illustration/dinner-image.svg';
import snackImage from '../../images/illustration/snack-image.svg';
import React, { useState } from 'react';
import MealModal from './MealModal';

 import { useSelector } from 'react-redux';
import { selectGoals } from 'redux/usersGoal/selectors';


const DiaryOnMain = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');

  const { items } = useSelector(selectGoals);
  if (Object.keys(items).length === 0) {
    return;
  }
  
const breakfastCalories = items.breakfast.calories;
const breakfastCarbohydrates = items.breakfast.carbohydrates;
const breakfastProtein = items.breakfast.protein;
const breakfastFat = items.breakfast.fat;

 const lunchCalories = items.lunch.calories;
 const lunchCarbohydrates = items.lunch.carbohydrates;
 const lunchProtein = items.lunch.protein;
 const lunchFat = items.lunch.fat;

 const dinnerCalories = items.dinner.calories;
 const dinnerCarbohydrates = items.dinner.carbohydrates;
 const dinnerProtein = items.dinner.protein;
 const dinnerFat = items.dinner.fat;

 const snackCalories = items.snack.calories;
 const snackCarbohydrates = items.snack.carbohydrates;
 const snackProtein = items.snack.protein;
 const snackFat = items.snack.fat;

 const openModal = (mealName) => {
    setSelectedMeal(mealName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMeal('');
    setModalOpen(false);
  };

  return (
    <div className={css.containerDiary}>
      <div className={css.link}>
        <h2 className={css.diary}>Diary</h2>
        <Link to="/diary" className={css.seeMore}>
          See More
        </Link>
      </div>


      <div className={css.divBreakfast}>
      <div className={css.diaryMobile}>
        <img
          className={css.breakfastImage}
          src={breakfastImage}
          alt="Breakfast"
        />
        <h2 className={css.diaryBreakfast}>Breakfast</h2>
        </div>
        <span>
          {breakfastCalories > 0 ? (
            <p>
              Carbonohidrates:{breakfastCarbohydrates} Protein:
              {breakfastProtein} Fat:{breakfastFat}
            </p>
          ) : (
            <button
              className={css.openModal}
              onClick={() => openModal('breakfast')}
            >
              {' '}
              + Record your meal
            </button>
          )}
        </span>
      </div>
      <MealModal isOpen={isModalOpen} onClose={closeModal} mealName={selectedMeal} />

      <div className={css.divBreakfast}>
      <div className={css.diaryMobile}>
        <img className={css.breakfastImage} src={lunchImage} alt="Lunch" />
        <h2 className={css.diaryBreakfast}>Lunch</h2>
        </div>
        <span>
          {lunchCalories > 0 ? (
            <p>
              Carbonohidrates:{lunchCarbohydrates} Protein:
              {lunchProtein} Fat:{lunchFat}
            </p>
          ) : (
            <button
              className={css.openModal}
              onClick={() => openModal('lunch')}
            >
              {' '}
              + Record your meal
            </button>
          )}
        </span>
      </div>

      <div className={css.divBreakfast}>
      <div className={css.diaryMobile}>
        <img className={css.breakfastImage} src={dinnerImage} alt="Dinner" />
        <h2 className={css.diaryBreakfast}>Dinner</h2>
        </div>
        <span>
          {dinnerCalories > 0 ? (
            <p>
              Carbonohidrates:{dinnerCarbohydrates} Protein:
              {dinnerProtein} Fat:{dinnerFat}
            </p>
          ) : (
            <button
              className={css.openModal}
              onClick={() => openModal('dinner')}
            >
              {' '}
              + Record your meal
            </button>
          )}
        </span>
      </div>

      <div className={css.divBreakfast}>
      <div className={css.diaryMobile}>
        <img className={css.breakfastImage} src={snackImage} alt="Snack" />
        <h2 className={css.diaryBreakfast}>Snack</h2>
        </div>
        <span>
          {snackCalories > 0 ? (
            <p>
              Carbonohidrates:{snackCarbohydrates} Protein:
              {snackProtein} Fat:{snackFat}
            </p>
          ) : (
            <button
              className={css.openModal}
              onClick={() => openModal('snack')}
            >
              {' '}
              + Record your meal
            </button>
          )}
        </span>
      </div>
    </div>
  );
};

export default DiaryOnMain;
