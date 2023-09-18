import React from 'react';
import { useDispatch } from 'react-redux';
import css from './addWaterModal.module.css';
import { addWater } from 'redux/usersGoal/operations';
import { useEffect, useState } from 'react';

const AddWaterModal = ({ closeModal }) => {
  const [number, setNumber] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addWater(number));
  }, [number]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const login = Number(form.elements.number.value);
    if (login === 0) {
      alert('The entered number must be greater than zero :)');
      return;
    }
    console.log(login);
    setNumber(login);
    form.reset();
  };

  const handleOverlyClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className={css.modalOverly} onClick={handleOverlyClick}>
      <div className={css.modalContent}>
        <h1 style={{ color: 'red' }}>Add water intake</h1>
        <form onSubmit={handleSubmit}>
          <label style={{ color: 'blue' }}>
            How much water
            <input
              // ref={inputRef}
              type="number"
              name="number"
              placeholder="Enter milliliters"
            />
          </label>

          <button type="submit">Confirm</button>

          <button onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};
export default AddWaterModal;
