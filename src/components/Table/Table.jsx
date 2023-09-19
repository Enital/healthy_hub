import React from 'react';
import s from './Table.module.css';
import Icons from '../../images/icons/symbol-defs.svg';
import { useMediaQuery } from 'react-responsive';
import * as mob from '../../images/illustration';
import { nanoid } from 'nanoid';

const onEditButtonClick = name => {
  document.body.style.overflow = 'hidden';
};

const DiaryTable = ({ mealType, mealData, onRecordMealButtonClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 833 });

  return (
    <>
      <div className={s.targetMeal}>
        <div className={s.mealTypeWrapper}>
          <div className={s.mealTitleWrapper}>
            <img width="36px" height="36px" src={mob[mealType]} alt="meal" />

            <h3 className={s.mealListItemTitle}>{mealType}</h3>
          </div>

          <div className={s.descriptionWrap}>
            <p className={s.mealAdditionalInfoDescription}>
              Carbonohidrates:
              <span className={s.mealAdditionalInfoValue}>Sum Value</span>
            </p>

            <p className={s.mealAdditionalInfoDescription}>
              Protein:
              <span className={s.mealAdditionalInfoValue}>Sum Value</span>
            </p>

            <p className={s.mealAdditionalInfoDescription}>
              Fat:
              <span className={s.mealAdditionalInfoValue}>Sum Value</span>
            </p>
          </div>
        </div>

        <ol className={`${s.table} ${s.sideBarBox}`}>
          {mealData.map(item => {
            return !item.showButton ? (
              <li key={nanoid()} className={s.mealItem}>
                <div className={s.mealWrap}>
                  <div className={s.mealNameWrap}>
                    <p className={s.foodName}>{item.foodName}</p>
                    {item.foodName && isMobile && (
                      <button
                        className={s.btnEdit}
                        onClick={() => onEditButtonClick(item.foodName)}
                      >
                        <svg
                          width="16px"
                          height="16px"
                          onEditButtonClick
                          className={s.recordMealIcon}
                        >
                          <use xlinkHref={`${Icons}#pencil`} />
                        </svg>
                        Edit
                      </button>
                    )}
                  </div>

                  <div className={s.mealNutritionalWrap}>
                    {Object.keys(item)
                      .slice(1)
                      .map(
                        key =>
                          item.foodName && (
                            <p key={key} className={s.numWrap}>
                              {isMobile ? (
                                <span>
                                  <span className={s.colorNut}>
                                    {key.slice(0, 1).toUpperCase()}
                                    {key.slice(1, 4)}.:
                                  </span>
                                  &nbsp;{item[key]}
                                </span>
                              ) : (
                                item[key]
                              )}
                            </p>
                          )
                      )}

                    {item.foodName && !isMobile && (
                      <button
                        onClick={() => onEditButtonClick(item.foodName)}
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
                    )}
                  </div>
                </div>
              </li>
            ) : (
              <li key={nanoid()} className={s.mealItem}>
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
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default DiaryTable;
