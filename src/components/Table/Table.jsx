import React, { useState } from 'react';
import s from './Table.module.css';
import css from './Table.module.css';
import breakfastImage from '../../images/illustration/breakfast-image.svg';
import lunchImage from '../../images/illustration/lunch-image.svg';
import dinnerImage from '../../images/illustration/dinner-image.svg';
import snackImage from '../../images/illustration/snack-image.svg';
import Icons from '../../images/icons/symbol-defs.svg';
// import { useMediaQuery } from 'react-responsive';
// import * as mob from '../../images/illustration';
// import { nanoid } from 'nanoid';
import MealModal from '../DiaryOnMain/MealModal';
import { useSelector } from 'react-redux';
import { selectGoals } from 'redux/usersGoal/selectors';

const DiaryTable = ({
  mealType,
  mealData,
  onUpdateMealButtonClick,
  setFoodName,
}) => {
  // const mealTypes = [
  //   { type: 'breakfast', data: [] },
  //   { type: 'dinner', data: [] },
  //   { type: 'lunch', data: [] },
  //   { type: 'snack', data: [] },
  // ];
  // const isMobile = useMediaQuery({ maxWidth: 833 });

  // function calculateSum(meal) {
  //   return meal.reduce(
  //     (acc, mealItem) => {
  //       acc.carbonohidratesSum += Number(mealItem.carbonohidrates);
  //       acc.proteinSum += Number(mealItem.protein);
  //       acc.fatSum += Number(mealItem.fat);
  //       return acc;
  //     },
  //     { carbonohidratesSum: 0, proteinSum: 0, fatSum: 0 }
  //   );
  // }

  // const sum = calculateSum(mealData);

  // function makeNewMealsArray(mealsArray) {
  //   const newArray =
  //     mealsArray.length <= 3
  //       ? [
  //           ...mealsArray,
  //           ...Array(1).fill({
  //             showButton: true,
  //           }),
  //           ...Array(3 - mealsArray.length).fill({
  //             foodName: '',
  //             carbonohidrates: '',
  //             fat: '',
  //             protein: '',
  //           }),
  //         ]
  //       : [
  //           ...mealsArray,
  //           ...Array(1).fill({
  //             showButton: true,
  //           }),
  //         ];
  //   return newArray;
  // }

  // const onEditButtonClick = name => {
  //   document.body.style.overflow = 'hidden';

  //   setFoodName(name);
  //   onUpdateMealButtonClick(mealType);
  // };
  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedMeal, setSelectedMeal] = useState('');
  // const [selectedFoodName, setSelectedFoodName] = useState('');
  // const [mealModalOpen, setMealModalOpen] = useState(false);

  const openModal = mealName => {
    setSelectedMeal(mealName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMeal('');
    setModalOpen(false);
  };

  const handleOnClose = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  window.addEventListener('keydown', handleOnClose);

  const { items } = useSelector(selectGoals);
  if (Object.keys(items).length === 0) {
    return;
  }

  const breakfastCarbohydrates = items.breakfast.carbohydrates;
  const breakfastProtein = items.breakfast.protein;
  const breakfastFat = items.breakfast.fat;

  const lunchCarbohydrates = items.lunch.carbohydrates;
  const lunchProtein = items.lunch.protein;
  const lunchFat = items.lunch.fat;

  const dinnerCarbohydrates = items.dinner.carbohydrates;
  const dinnerProtein = items.dinner.protein;
  const dinnerFat = items.dinner.fat;

  const snackCarbohydrates = items.snack.carbohydrates;
  const snackProtein = items.snack.protein;
  const snackFat = items.snack.fat;

  const breakfastDish = items.breakfastDishes;
  const lunchDish = items.lunchDishes;
  const dinnerDish = items.dinnerDishes;
  const snackDish = items.snackDishes;

  console.log(breakfastDish);
  console.log(lunchDish);
  console.log(dinnerDish);
  console.log(snackDish);

  // const onRecordMealButtonClick = evt => {
  //   setSelectedFoodName(evt.target.name);
  //   document.body.style.overflow = 'hidden';
  //   setMealModalOpen(true);
  // };
  return (
    <section className={css.sectionDiary}>
      <div className={css.wrapper}>
        <div className={css.wrapper_dishes}>
          <div className={css.dairy_dish_wrapper}>
            <div className={css.dairy_wrapper}>
              <div className={css.dairy_wrapper_title}>
                <div className={css.dairy_title_breakfast}>
                  <img
                    src={breakfastImage}
                    alt="breakfast"
                    className={css.icon_dish}
                  />
                  <h3>Breakfast</h3>
                </div>
              </div>

              <ul className={css.dairy_breakfast_list}>
                <li className={css.dairy_breakfast_item}>
                  Carbonohidrates:
                  <span className={css.dairy_breakfast_span}>
                    {breakfastCarbohydrates}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Protein:
                  <span className={css.dairy_breakfast_span}>
                    {breakfastProtein}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>
                    {breakfastFat}
                  </span>
                </li>
              </ul>
            </div>

            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                <p className={css.number}>1</p>
                <p className={css.number}>2</p>
                <p className={css.number}>3</p>
                <p className={css.number}>4</p>
              </div>

              <div className={css.dairy_dish_list}>
                {breakfastDish.length > 0 &&
                  breakfastDish.map(record => {
                    return (
                      <div className={css.record} key={record._id}>
                        <div className={css.dairy_elem_list}>
                          <div className={css.dairy_add_dish_item}>
                            <p className={css.dairy_dish_p}>{record.name}</p>
                            {/* <button
                              onClick={() => onEditButtonClick(el.foodName)}
                              className={s.btnEdit}
                            >
                              <svg
                                width="16px"
                                height="16px"
                                className={s.recordMealIcon}
                              >
                                <use xlinkHref={`${Icons}#pencil`} />
                              </svg>
                              Edit
                            </button> */}
                          </div>

                          <div className={css.dairy_elem_breakfast}>
                            <ul className={css.dairy_elem_breakfast_list}>
                              <li className={css.dairy_elem_breakfast_item}>
                                <span className={css.dairy_elem_span}>
                                  Carb.
                                </span>
                                <span className={css.dairy_elem_breakfast_span}>
                                  {record.carbohydrates}
                                </span>
                              </li>
                              <li className={css.dairy_elem_breakfast_item}>
                                <span className={css.dairy_elem_span}>
                                  Prot.
                                </span>
                                <span className={css.dairy_elem_breakfast_span}>
                                  {record.protein}
                                </span>
                              </li>
                              <li className={css.dairy_elem_breakfast_item}>
                                <span className={css.dairy_elem_span}>
                                  Fat.
                                </span>
                                <span className={css.dairy_elem_breakfast_span}>
                                  {record.fat}
                                </span>
                              </li>
                              <div className={css.dairy_icons_edit}>
                                {/* <button
                                  onClick={() => onEditButtonClick(el.foodName)}
                                  className={s.btnEdit}
                                >
                                  <svg
                                    width="16px"
                                    height="16px"
                                    className={s.recordMealIcon}
                                  >
                                    <use xlinkHref={`${Icons}#pencil`} />
                                  </svg>
                                  Edit
                                </button> */}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <button
                  // name={mealType}
                  onClick={() => openModal('breakfast')}
                  className={s.recordMealButton}
                >
                  <svg width="16px" height="16px" className={s.recordMealIcon}>
                    <use xlinkHref={`${Icons}#add`} />
                  </svg>
                  Record your meal
                </button>
                <MealModal
                  closeModal={closeModal}
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  mealName={selectedMeal}
                />
              </div>
            </div>
          </div>

          <div className={css.dairy_wrapper}>
            <div className={css.dairy_title_lunch}>
              <img src={lunchImage} alt="lunch" className={css.icon_dish} />
              <h3>Lunch</h3>
            </div>

            <ul className={css.dairy_breakfast_list}>
              <li className={css.dairy_breakfast_item}>
                Carbonohidrates:
                <span className={css.dairy_breakfast_span}>
                  {lunchCarbohydrates}
                </span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Protein:
                <span className={css.dairy_breakfast_span}>{lunchProtein}</span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Fat:
                <span className={css.dairy_breakfast_span}>{lunchFat}</span>
              </li>
            </ul>
          </div>

          <div className={css.wrapper_dishes_block}>
            <div className={css.numbers}>
              <p className={css.number}>1</p>
              <p className={css.number}>2</p>
              <p className={css.number}>3</p>
              <p className={css.number}>4</p>
            </div>

            <div className={css.dairy_dish_list}>
              {lunchDish.length > 0 &&
                lunchDish.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          {/* <button
                            onClick={() => onEditButtonClick(el.foodName)}
                            className={s.btnEdit}
                          >
                            <svg
                              width="16px"
                              height="16px"
                              className={s.recordMealIcon}
                            >
                              <use xlinkHref={`${Icons}#pencil`} />
                            </svg>
                            Edit
                          </button> */}
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbohydrates}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Prot.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.protein}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Fat.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.fat}
                              </span>
                            </li>
                            <div className={css.dairy_icons_edit}>
                              {/* <button
                                onClick={() => onEditButtonClick(el.foodName)}
                                className={s.btnEdit}
                              >
                                <svg
                                  width="16px"
                                  height="16px"
                                  className={s.recordMealIcon}
                                >
                                  <use xlinkHref={`${Icons}#pencil`} />
                                </svg>
                                Edit
                              </button> */}
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <button
                // name={mealType}
                onClick={() => openModal('lunch')}
                className={s.recordMealButton}
              >
                <svg width="16px" height="16px" className={s.recordMealIcon}>
                  <use xlinkHref={`${Icons}#add`} />
                </svg>
                Record your meal
              </button>
              <MealModal
                closeModal={closeModal}
                isOpen={isModalOpen}
                onClose={closeModal}
                mealName={selectedMeal}
              />
            </div>
          </div>
        </div>

        <div className={css.wrapper_dishes}>
          <div className={css.dairy_dish_wrapper}>
            <div className={css.dairy_wrapper}>
              <div className={css.dairy_wrapper_title}>
                <div className={css.dairy_title_dinner}>
                  <img
                    src={dinnerImage}
                    alt="dinner"
                    className={css.icon_dish}
                  />
                  <h3>Dinner</h3>
                </div>
              </div>

              <ul className={css.dairy_breakfast_list}>
                <li className={css.dairy_breakfast_item}>
                  Carbonohidrates:
                  <span className={css.dairy_breakfast_span}>
                    {dinnerCarbohydrates}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Protein:
                  <span className={css.dairy_breakfast_span}>
                    {dinnerProtein}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>{dinnerFat}</span>
                </li>
              </ul>
            </div>

            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                <p className={css.number}>1</p>
                <p className={css.number}>2</p>
                <p className={css.number}>3</p>
                <p className={css.number}>4</p>
              </div>

              <div className={css.dairy_dish_list}>
                {dinnerDish.length > 0 &&
                  dinnerDish.map(record => {
                    return (
                      <div className={css.record} key={record._id}>
                        <div className={css.dairy_elem_list}>
                          <div className={css.dairy_add_dish_item}>
                            <p className={css.dairy_dish_p}>{record.name}</p>
                            {/* <button
                              onClick={() => onEditButtonClick(el.foodName)}
                              className={s.btnEdit}
                            >
                              <svg
                                width="16px"
                                height="16px"
                                className={s.recordMealIcon}
                              >
                                <use xlinkHref={`${Icons}#pencil`} />
                              </svg>
                              Edit
                            </button> */}
                          </div>

                          <div className={css.dairy_elem_breakfast}>
                            <ul className={css.dairy_elem_breakfast_list}>
                              <li className={css.dairy_elem_breakfast_item}>
                                <span className={css.dairy_elem_span}>
                                  Carb.
                                </span>
                                <span className={css.dairy_elem_breakfast_span}>
                                  {record.carbohydrates}
                                </span>
                              </li>
                              <li className={css.dairy_elem_breakfast_item}>
                                <span className={css.dairy_elem_span}>
                                  Prot.
                                </span>
                                <span className={css.dairy_elem_breakfast_span}>
                                  {record.protein}
                                </span>
                              </li>
                              <li className={css.dairy_elem_breakfast_item}>
                                <span className={css.dairy_elem_span}>
                                  Fat.
                                </span>
                                <span className={css.dairy_elem_breakfast_span}>
                                  {record.fat}
                                </span>
                              </li>
                              <div className={css.dairy_icons_edit}>
                                {/* <button
                                  onClick={() => onEditButtonClick(el.foodName)}
                                  className={s.btnEdit}
                                >
                                  <svg
                                    width="16px"
                                    height="16px"
                                    className={s.recordMealIcon}
                                  >
                                    <use xlinkHref={`${Icons}#pencil`} />
                                  </svg>
                                  Edit
                                </button> */}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <button
                  // name={mealType}
                  onClick={() => openModal('dinner')}
                  className={s.recordMealButton}
                >
                  <svg width="16px" height="16px" className={s.recordMealIcon}>
                    <use xlinkHref={`${Icons}#add`} />
                  </svg>
                  Record your meal
                </button>
                <MealModal
                  closeModal={closeModal}
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  mealName={selectedMeal}
                />
              </div>
            </div>
          </div>

          <div className={css.dairy_wrapper}>
            <div className={css.dairy_wrapper_title}>
              <div className={css.dairy_title_snack}>
                <img src={snackImage} alt="snack" className={css.icon_dish} />
                <h3>Snack</h3>
              </div>
            </div>

            <ul className={css.dairy_breakfast_list}>
              <li className={css.dairy_breakfast_item}>
                Carbonohidrates:
                <span className={css.dairy_breakfast_span}>
                  {snackCarbohydrates}
                </span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Protein:
                <span className={css.dairy_breakfast_span}>{snackProtein}</span>
              </li>
              <li className={css.dairy_breakfast_item}>
                Fat:
                <span className={css.dairy_breakfast_span}>{snackFat}</span>
              </li>
            </ul>
          </div>

          <div className={css.wrapper_dishes_block}>
            <div className={css.numbers}>
              <p className={css.number}>1</p>
              <p className={css.number}>2</p>
              <p className={css.number}>3</p>
              <p className={css.number}>4</p>
            </div>

            <div className={css.dairy_dish_list}>
              {snackDish.length > 0 &&
                snackDish.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          {/* <button
                            onClick={() => onEditButtonClick(el.foodName)}
                            className={s.btnEdit}
                          >
                            <svg
                              width="16px"
                              height="16px"
                              className={s.recordMealIcon}
                            >
                              <use xlinkHref={`${Icons}#pencil`} />
                            </svg>
                            Edit
                          </button> */}
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbohydrates}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Prot.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.protein}
                              </span>
                            </li>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Fat.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.fat}
                              </span>
                            </li>
                            <div className={css.dairy_icons_edit}>
                              {/* <button
                                onClick={() => onEditButtonClick(el.foodName)}
                                className={s.btnEdit}
                              >
                                <svg
                                  width="16px"
                                  height="16px"
                                  className={s.recordMealIcon}
                                >
                                  <use xlinkHref={`${Icons}#pencil`} />
                                </svg>
                                Edit
                              </button> */}
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}

              <button
                // name={mealType}
                onClick={() => openModal('snack')}
                className={s.recordMealButton}
              >
                <svg width="16px" height="16px" className={s.recordMealIcon}>
                  <use xlinkHref={`${Icons}#add`} />
                </svg>
                Record your meal
              </button>
              <MealModal
                closeModal={closeModal}
                isOpen={isModalOpen}
                onClose={closeModal}
                mealName={selectedMeal}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaryTable;
