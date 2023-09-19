import React, { useState } from 'react';
import s from './Diary.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import RecordMealModal from 'components/ModalDiary/RecordMealModal/RecordMealModal';
import UpdateMealModal from 'components/ModalDiary/UpdateMealModal/UpdateMealModal';
import DiaryTable from 'components/Table/Table';

const Diary = () => {
  const [recordMealModalOpen, setRecordMealModalOpen] = useState(false);
  const [updateMealModalOpen, setUpdateMealModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');
  const [foodName, setFoodName] = useState('');

  const onRecordMealButtonClick = evt => {
    setSelectedMeal(evt.target.name);
    document.body.style.overflow = 'hidden';
    setRecordMealModalOpen(true);
  };

  const onUpdateMealButtonClick = meal => {
    setSelectedMeal(meal);
    setUpdateMealModalOpen(true);
  };

  const mealTypes = [
    { type: 'Breakfast', data: [] }, // Замените пустой массив на данные, если они получаются откуда-либо ещё
    { type: 'Dinner', data: [] }, // Замените пустой массив на данные, если они получаются откуда-либо ещё
    { type: 'Lunch', data: [] }, // Замените пустой массив на данные, если они получаются откуда-либо ещё
    { type: 'Snack', data: [] }, // Замените пустой массив на данные, если они получаются откуда-либо ещё
  ];

  const renderedDiaryTables = mealTypes.map(({ type, data }) => (
    <DiaryTable
      key={type}
      mealType={type}
      mealData={data}
      onRecordMealButtonClick={onRecordMealButtonClick}
      onUpdateMealButtonClick={onUpdateMealButtonClick}
      setFoodName={setFoodName}
    />
  ));

  return (
    <div className={s.containerDiary}>
      <RecordMealModal
        selectedMeal={selectedMeal}
        recordMealModalOpen={recordMealModalOpen}
        setRecordMealModalOpen={setRecordMealModalOpen}
      />
      {foodName && (
        <UpdateMealModal
          selectedMeal={selectedMeal}
          updateMealModalOpen={updateMealModalOpen}
          setUpdateMealModalOpen={setUpdateMealModalOpen}
          foodName={foodName}
        />
      )}

      <div className={s.btnNav}>
        <Link className={s.btnDiary} to={'/'}>
          <BsArrowLeft size="1.5rem" />
        </Link>
        <h2 className={s.textBtn}>Diary</h2>
      </div>
      <div className={s.diary}>{renderedDiaryTables}</div>
    </div>
  );
};

export default Diary;
