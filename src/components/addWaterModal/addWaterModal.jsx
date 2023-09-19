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
        <h1 className={css.modalHead}>Add water intake</h1>
        <form className={css.modalForm} onSubmit={handleSubmit}>
          <p className={css.modalLabel}>How much water</p>
          <input
            className={css.modalInput}
            type="number"
            name="number"
            placeholder="Enter milliliters"
          />

          <button className={css.modalBtnConfirm} type="submit">
            Confirm
          </button>

          <button className={css.modalBtnCancel} onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddWaterModal;
