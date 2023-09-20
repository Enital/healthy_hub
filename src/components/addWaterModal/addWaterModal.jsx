import React from 'react';
import css from './addWaterModal.module.css';
import { ImCool } from 'react-icons/im';

const AddWaterModal = ({ closeModal, changeNumber, waterGoal, waterUsed }) => {
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
      {waterUsed >= waterGoal ? (
        <div className={css.modalContentAlt}>
          <h3 className={css.modalHeadAlt}>Good result buddy</h3>

          <p className={css.altText}>Yours goal achieved</p>

          <p className={css.altText2}>
            But don't forget - you need to drink every day to achieve your main
            goal
          </p>
          <div className={css.icons}>
            <ImCool color="#45FFBC" size={40} />
            <ImCool color="#45FFBC" size={40} />
            <ImCool color="#45FFBC" size={40} />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AddWaterModal;
