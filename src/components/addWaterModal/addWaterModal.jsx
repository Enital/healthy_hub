import React from 'react';
import css from './addWaterModal.module.css';

const AddWaterModal = ({ closeModal, changeNumber }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const login = Number(form.elements.number.value);
    if (login === 0) {
      alert('The entered number must be greater than zero :)');
      return;
    }

    changeNumber(login);
    form.reset();
    closeModal();
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
