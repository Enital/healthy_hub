import React from 'react';
import css from './addWaterModal.module.css';
import { ImCool } from 'react-icons/im';
import Notiflix from 'notiflix';

const AddWaterModal = ({ closeModal, changeNumber, waterGoal, waterUsed }) => {
  Notiflix.Notify.init({ zindex: 100000, position: 'center-top' });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const login = Number(form.elements.number.value);
    if (login <= 0) {
      Notiflix.Notify.failure(
        'The entered number must be greater than zero :)'
      );

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

          <p className={css.altText}>Yours daily goal achieved</p>

          <p className={css.altText2}>
            But don’t stop, remember, there is never too much water
          </p>
          <form className={css.modalForm} onSubmit={handleSubmit}>
            <input
              className={css.modalInput}
              type="number"
              name="number"
              placeholder="Enter milliliters"
            />

            <button className={css.modalBtnConfirmAlt} type="submit">
              Confirm
            </button>

            <button className={css.modalBtnCancelAlt} onClick={closeModal}>
              Cancel
            </button>
          </form>
          <div className={css.icons}>
            <ImCool color="#45FFBC" size={40} className={css.iconItem} />
            <ImCool color="#45FFBC" size={40} className={css.iconItem} />
            <ImCool color="#45FFBC" size={40} className={css.iconItem} />
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
