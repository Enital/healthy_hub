import React from 'react';
import s from './Diary.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import DiaryTable from 'components/Table/Table';

const Diary = () => {
  // const mealTypes = [
  //   { type: 'breakfast', data: [] },
  //   { type: 'dinner', data: [] },
  //   { type: 'lunch', data: [] },
  //   { type: 'snack', data: [] },
  // ];

  // const renderedDiaryTables = mealTypes.map(({ type, data }) => (
  //   <DiaryTable
  //     key={type}
  //     mealType={type}
  //     mealData={data}
  //     setFoodName={() => {}}
  //   />
  // ));

  return (
    <div className={s.containerDiary}>
      <div className={s.btnNav}>
        <Link className={s.btnDiary} to={'/'}>
          <BsArrowLeft size="1.5rem" />
        </Link>
        <Link to={'/'}>
          <h2 className={s.textBtn}>Diary</h2>
        </Link>
      </div>
      <DiaryTable className={s.diary} />
    </div>
  );
};

export default Diary;
