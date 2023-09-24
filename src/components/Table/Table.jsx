import React, { useState } from 'react';
import s from './Table.module.css';
import css from './Table.module.css';
import breakfastImage from '../../images/illustration/breakfast-image.svg';
import lunchImage from '../../images/illustration/lunch-image.svg';
import dinnerImage from '../../images/illustration/dinner-image.svg';
import snackImage from '../../images/illustration/snack-image.svg';
import Icons from '../../images/icons/symbol-defs.svg';
import { useMediaQuery } from 'react-responsive';
import * as mob from '../../images/illustration';
import { nanoid } from 'nanoid';
import MealModal from '../DiaryOnMain/MealModal';
import { useSelector } from 'react-redux';
import { selectGoals } from 'redux/usersGoal/selectors';

const DiaryTable = ({
  mealType,
  mealData,
  onUpdateMealButtonClick,
  setFoodName,
}) => {
  const mealTypes = [
    { type: 'breakfast', data: [] },
    { type: 'dinner', data: [] },
    { type: 'lunch', data: [] },
    { type: 'snack', data: [] },
  ];
  const isMobile = useMediaQuery({ maxWidth: 833 });

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
  const [mealModalOpen, setMealModalOpen] = useState(false);
  const [selectedFoodName, setSelectedFoodName] = useState('');

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

  const onRecordMealButtonClick = evt => {
    setSelectedFoodName(evt.target.name);
    document.body.style.overflow = 'hidden';
    setMealModalOpen(true);
  };
  return (
    <section className={css.sectionDiary}>
      {/* Breakfast List */}
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

            {/* GREY BLOCK */}
            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                <p className={css.number}>1</p>
                <p className={css.number}>2</p>
                <p className={css.number}>3</p>
                <p className={css.number}>4</p>
              </div>
              {/* meals list */}
              <div className={css.dairy_dish_list}>
                {/* Records */}
                {/* {breakfast.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          <button
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
                          </button>
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbonohidrates}
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
                              <button
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
                              </button>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
                {/* end of records */}
                {/* + Record meal text */}
                <button
                  name={mealType}
                  onClick={onRecordMealButtonClick}
                  className={s.recordMealButton}
                >
                  <svg width="16px" height="16px" className={s.recordMealIcon}>
                    <use xlinkHref={`${Icons}#add`} />
                  </svg>
                  Record your meal
                </button>
                <MealModal
                  isOpen={mealModalOpen}
                  onClose={() => setMealModalOpen(false)}
                  mealName={selectedFoodName}
                />
                {/* end of text */}
              </div>
            </div>
          </div>

          {/* {Lunch List} */}
          {/* <div className={css.dairy_dish_wrapper}> */}
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

          {/* GREY BLOCK */}
          <div className={css.wrapper_dishes_block}>
            <div className={css.numbers}>
              <p className={css.number}>1</p>
              <p className={css.number}>2</p>
              <p className={css.number}>3</p>
              <p className={css.number}>4</p>
            </div>
            {/* meals list */}
            <div className={css.dairy_dish_list}>
              {/* Records */}
              {/* {breakfast.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          <button
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
                          </button>
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbonohidrates}
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
                              <button
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
                              </button>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
              {/* end of records */}
              {/* + Record meal text */}
              <button
                name={mealType}
                onClick={onRecordMealButtonClick}
                className={s.recordMealButton}
              >
                <svg width="16px" height="16px" className={s.recordMealIcon}>
                  <use xlinkHref={`${Icons}#add`} />
                </svg>
                Record your meal
              </button>
              <MealModal
                isOpen={mealModalOpen}
                onClose={() => setMealModalOpen(false)}
                mealName={selectedFoodName}
              />
              {/* end of text */}
            </div>
          </div>
        </div>

        {/* Dinner List */}
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
            {/* GREY BLOCK */}
            <div className={css.wrapper_dishes_block}>
              <div className={css.numbers}>
                <p className={css.number}>1</p>
                <p className={css.number}>2</p>
                <p className={css.number}>3</p>
                <p className={css.number}>4</p>
              </div>
              {/* meals list */}
              <div className={css.dairy_dish_list}>
                {/* Records */}
                {/* {breakfast.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          <button
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
                          </button>
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbonohidrates}
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
                              <button
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
                              </button>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
                {/* end of records */}
                {/* + Record meal text */}
                <button
                  name={mealType}
                  onClick={onRecordMealButtonClick}
                  className={s.recordMealButton}
                >
                  <svg width="16px" height="16px" className={s.recordMealIcon}>
                    <use xlinkHref={`${Icons}#add`} />
                  </svg>
                  Record your meal
                </button>
                <MealModal
                  isOpen={mealModalOpen}
                  onClose={() => setMealModalOpen(false)}
                  mealName={selectedFoodName}
                />
                {/* end of text */}
              </div>
            </div>
          </div>

          {/* Snack List*/}
          {/* <div className={css.dairy_dish_wrapper}> */}
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

          {/* GREY BLOCK */}
          <div className={css.wrapper_dishes_block}>
            <div className={css.numbers}>
              <p className={css.number}>1</p>
              <p className={css.number}>2</p>
              <p className={css.number}>3</p>
              <p className={css.number}>4</p>
            </div>
            {/* meals list */}
            <div className={css.dairy_dish_list}>
              {/* Records */}
              {/* {breakfast.map(record => {
                  return (
                    <div className={css.record} key={record._id}>
                      <div className={css.dairy_elem_list}>
                        <div className={css.dairy_add_dish_item}>
                          <p className={css.dairy_dish_p}>{record.name}</p>
                          <button
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
                          </button>
                        </div>

                        <div className={css.dairy_elem_breakfast}>
                          <ul className={css.dairy_elem_breakfast_list}>
                            <li className={css.dairy_elem_breakfast_item}>
                              <span className={css.dairy_elem_span}>Carb.</span>
                              <span className={css.dairy_elem_breakfast_span}>
                                {record.carbonohidrates}
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
                              <button
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
                              </button>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
              {/* end of records */}
              {/* + Record meal text */}
              <button
                name={mealType}
                onClick={onRecordMealButtonClick}
                className={s.recordMealButton}
              >
                <svg width="16px" height="16px" className={s.recordMealIcon}>
                  <use xlinkHref={`${Icons}#add`} />
                </svg>
                Record your meal
              </button>
              <MealModal
                isOpen={mealModalOpen}
                onClose={() => setMealModalOpen(false)}
                mealName={selectedFoodName}
              />
              {/* end of text */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // };
  {
    /* //   return (
  //     <>
  //       <div className={s.targetMeal}>
  //         <div className={s.mealTypeWrapper}>
  //           <div className={s.mealTitleWrapper}>
  //             <img width="36px" height="36px" src={mob[mealType]} alt="meal" />

  //             <h3 className={s.mealListItemTitle}>{mealType}</h3>
  //           </div>

  //           <div className={s.descriptionWrap}>
  //             <p className={s.mealAdditionalInfoDescription}>
  //               Carbonohidrates:
  //               <span className={s.mealAdditionalInfoValue}>
  //                 {sum.carbonohidratesSum}
  //               </span>
  //             </p>

  //             <p className={s.mealAdditionalInfoDescription}>
  //               Protein:
  //               <span className={s.mealAdditionalInfoValue}>
  //                 {sum.proteinSum}
  //               </span>
  //             </p>

  //             <p className={s.mealAdditionalInfoDescription}>
  //               Fat:
  //               <span className={s.mealAdditionalInfoValue}>{sum.fatSum}</span>
  //             </p>
  //           </div>
  //         </div>

  //         <ol className={`${s.table}  ${s.sideBarBox}`}>
  //           {makeNewMealsArray(mealData).map(el => { */
  }
  //             return !el.showButton ? (
  //               <li key={nanoid()} className={s.mealItem}>
  //                 <div className={s.mealWrap}>
  //                   <div className={s.mealNameWrap}>
  //                     <p className={s.foodName}>{el.foodName}</p>
  //                     {el.foodName && isMobile && (
  //                       <button
  //                         className={s.btnEdit}
  //                         onClick={() => onEditButtonClick(el.foodName)}
  //                       >
  //                         <svg
  //                           width="16px"
  //                           height="16px"
  //                           className={s.recordMealIcon}
  //                         >
  //                           <use xlinkHref={`${Icons}#pencil`} />
  //                         </svg>
  //                         Edit
  //                       </button>
  //                     )}
  //                   </div>

  //                   <div className={s.mealNutritionalWrap}>
  //                     {Object.keys(el)
  //                       .slice(1)
  //                       .map(
  //                         key =>
  //                           el.foodName && (
  //                             <p key={key} className={s.numWrap}>
  //                               {isMobile ? (
  //                                 <span>
  //                                   <span className={s.colorNut}>
  //                                     {key.slice(0, 1).toUpperCase()}
  //                                     {key.slice(1, 4)}.:
  //                                   </span>
  //                                   &nbsp;{el[key]}
  //                                 </span>
  //                               ) : (
  //                                 el[key]
  //                               )}
  //                             </p>
  //                           )
  //                       )}

  //                     {el.foodName && !isMobile && (
  //                       <button
  //                         onClick={() => onEditButtonClick(el.foodName)}
  //                         className={s.btnEdit}
  //                       >
  //                         <svg
  //                           width="16px"
  //                           height="16px"
  //                           className={s.recordMealIcon}
  //                         >
  //                           <use xlinkHref={`${Icons}#pencil`} />
  //                         </svg>
  //                         Edit
  //                       </button>
  //                     )}
  //                   </div>
  //                 </div>
  //               </li>
  //             ) : (
  //               <li key={nanoid()} className={s.mealItem}>
  //                 <button
  //                   name={mealType}
  //                   onClick={onRecordMealButtonClick}
  //                   className={s.recordMealButton}
  //                 >
  //                   <svg width="16px" height="16px" className={s.recordMealIcon}>
  //                     <use xlinkHref={`${Icons}#add`} />
  //                   </svg>
  //                   Record your meal
  //                 </button>
  //                 <MealModal
  //                   isOpen={mealModalOpen}
  //                   onClose={() => setMealModalOpen(false)}
  //                   mealName={selectedFoodName}
  //                 />
  //               </li>
  //             );
  //           })}
  //         </ol>
  //       </div>
  //     </>
  //   );
  // };
};
export default DiaryTable;
