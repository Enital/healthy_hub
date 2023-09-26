import React, { useState, useEffect, useRef } from 'react';
import s from './Table.module.css';
import css from './Table.module.css';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import breakfastImage from '../../images/illustration/breakfast-image.svg';
import lunchImage from '../../images/illustration/lunch-image.svg';
import dinnerImage from '../../images/illustration/dinner-image.svg';
import snackImage from '../../images/illustration/snack-image.svg';
import Icons from '../../images/icons/symbol-defs.svg';
import MealModal from '../DiaryOnMain/MealModal';
import { useSelector } from 'react-redux';
import { selectGoals } from 'redux/usersGoal/selectors';
import UpdateMealModal from '../ModalDiary/UpdateMealModal/UpdateMealModal';

const DiaryTable = () => {
  const tableContainerRef = useRef(null);
  useEffect(() => {
    if (tableContainerRef.current) {
      OverlayScrollbars(tableContainerRef.current, {});
    }
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');

  const [mealName, setMealName] = useState('');
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);

  const [isUpdateMealModalOpen, setIsUpdateMealModalOpen] = useState(false);
  const [selectedMealDish, setSelectedMealDish] = useState('');

  const openUpdateMealModal = (
    id,
    name,
    carbohydrates,
    protein,
    fat,
    calories
  ) => {
    setMealName(name);
    setCalories(calories);
    setCarbohydrates(carbohydrates);
    setProtein(protein);
    setFat(fat);

    setSelectedMealDish(id);
    setIsUpdateMealModalOpen(true);
  };

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

  return (
    <section className={css.sectionDiary}>
      <div className={css.wrapper}>
        <div className={css.wrapper_dishes}>
          <div ref={tableContainerRef} className={css.dairy_dish_wrapper}>
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
                {breakfastDish.length < 4 ? (
                  <>
                    <p className={css.number}>1</p>
                    <p className={css.number}>2</p>
                    <p className={css.number}>3</p>
                    <p className={css.number}>4</p>
                  </>
                ) : (
                  breakfastDish.map((_, index) => (
                    <p key={index} className={css.number}>
                      {index + 1}
                    </p>
                  ))
                )}
              </div>

              <div className={css.dairy_dish_list}>
                {breakfastDish.length > 0 &&
                  breakfastDish.map((record, index) => {
                    return (
                      <div className={css.record} key={record._id}>
                        <div className={css.dairy_elem_list}>
                          <div className={css.dairy_add_dish_item}>
                            <p className={css.dairy_dish_p}>{record.name}</p>
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
                                <button
                                  onClick={() => {
                                    openUpdateMealModal(
                                      record._id,
                                      record.name,
                                      record.carbohydrates,
                                      record.protein,
                                      record.fat,
                                      record.calories
                                    );
                                  }}
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
                                </button>

                                <UpdateMealModal
                                  updateMealModalOpen={isUpdateMealModalOpen}
                                  setUpdateMealModalOpen={
                                    setIsUpdateMealModalOpen
                                  }
                                  foodId={selectedMealDish}
                                  mealName={mealName}
                                  carbohydrates={carbohydrates}
                                  protein={protein}
                                  fat={fat}
                                  calories={calories}
                                />
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <button
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
          <div ref={tableContainerRef} className={css.dairy_dish_wrapper}>
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
                  <span className={css.dairy_breakfast_span}>
                    {lunchProtein}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>{lunchFat}</span>
                </li>
              </ul>
            </div>

            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                {lunchDish.length < 4 ? (
                  <>
                    <p className={css.number}>1</p>
                    <p className={css.number}>2</p>
                    <p className={css.number}>3</p>
                    <p className={css.number}>4</p>
                  </>
                ) : (
                  lunchDish.map((_, index) => (
                    <p key={index} className={css.number}>
                      {index + 1}
                    </p>
                  ))
                )}
              </div>

              <div className={css.dairy_dish_list}>
                {lunchDish.length > 0 &&
                  lunchDish.map(record => {
                    return (
                      <div className={css.record} key={record._id}>
                        <div className={css.dairy_elem_list}>
                          <div className={css.dairy_add_dish_item}>
                            <p className={css.dairy_dish_p}>{record.name}</p>
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
                                <button
                                  onClick={() => {
                                    openUpdateMealModal(
                                      record._id,
                                      record.name,
                                      record.carbohydrates,
                                      record.protein,
                                      record.fat,
                                      record.calories
                                    );
                                  }}
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
                                </button>
                                {isUpdateMealModalOpen[record.name] && (
                                  <UpdateMealModal
                                    updateMealModalOpen={isUpdateMealModalOpen}
                                    setUpdateMealModalOpen={
                                      setIsUpdateMealModalOpen
                                    }
                                    foodId={selectedMealDish}
                                    mealName={mealName}
                                    carbohydrates={carbohydrates}
                                    protein={protein}
                                    fat={fat}
                                    calories={calories}
                                  />
                                )}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <button
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
        </div>

        <div className={css.wrapper_dishes}>
          <div ref={tableContainerRef} className={css.dairy_dish_wrapper}>
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
                {dinnerDish.length < 4 ? (
                  <>
                    <p className={css.number}>1</p>
                    <p className={css.number}>2</p>
                    <p className={css.number}>3</p>
                    <p className={css.number}>4</p>
                  </>
                ) : (
                  dinnerDish.map((_, index) => (
                    <p key={index} className={css.number}>
                      {index + 1}
                    </p>
                  ))
                )}
              </div>

              <div className={css.dairy_dish_list}>
                {dinnerDish.length > 0 &&
                  dinnerDish.map(record => {
                    return (
                      <div className={css.record} key={record._id}>
                        <div className={css.dairy_elem_list}>
                          <div className={css.dairy_add_dish_item}>
                            <p className={css.dairy_dish_p}>{record.name}</p>
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
                                <button
                                  onClick={() => {
                                    openUpdateMealModal(
                                      record._id,
                                      record.name,
                                      record.carbohydrates,
                                      record.protein,
                                      record.fat,
                                      record.calories
                                    );
                                  }}
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
                                </button>
                                {isUpdateMealModalOpen[record.name] && (
                                  <UpdateMealModal
                                    updateMealModalOpen={isUpdateMealModalOpen}
                                    setUpdateMealModalOpen={
                                      setIsUpdateMealModalOpen
                                    }
                                    foodId={selectedMealDish}
                                    mealName={mealName}
                                    carbohydrates={carbohydrates}
                                    protein={protein}
                                    fat={fat}
                                    calories={calories}
                                  />
                                )}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <button
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
          <div ref={tableContainerRef} className={css.dairy_dish_wrapper}>
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
                  <span className={css.dairy_breakfast_span}>
                    {snackProtein}
                  </span>
                </li>
                <li className={css.dairy_breakfast_item}>
                  Fat:
                  <span className={css.dairy_breakfast_span}>{snackFat}</span>
                </li>
              </ul>
            </div>

            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                {snackDish.length < 4 ? (
                  <>
                    <p className={css.number}>1</p>
                    <p className={css.number}>2</p>
                    <p className={css.number}>3</p>
                    <p className={css.number}>4</p>
                  </>
                ) : (
                  snackDish.map((_, index) => (
                    <p key={index} className={css.number}>
                      {index + 1}
                    </p>
                  ))
                )}
              </div>

              <div className={css.dairy_dish_list}>
                {snackDish.length > 0 &&
                  snackDish.map(record => {
                    return (
                      <div className={css.record} key={record._id}>
                        <div className={css.dairy_elem_list}>
                          <div className={css.dairy_add_dish_item}>
                            <p className={css.dairy_dish_p}>{record.name}</p>
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
                                <button
                                  onClick={() => {
                                    openUpdateMealModal(
                                      record._id,
                                      record.name,
                                      record.carbohydrates,
                                      record.protein,
                                      record.fat,
                                      record.calories
                                    );
                                  }}
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
                                </button>
                                {isUpdateMealModalOpen[record.name] && (
                                  <UpdateMealModal
                                    updateMealModalOpen={isUpdateMealModalOpen}
                                    setUpdateMealModalOpen={
                                      setIsUpdateMealModalOpen
                                    }
                                    foodId={selectedMealDish}
                                    mealName={mealName}
                                    carbohydrates={carbohydrates}
                                    protein={protein}
                                    fat={fat}
                                    calories={calories}
                                  />
                                )}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <button
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
      </div>
    </section>
  );
};

export default DiaryTable;
