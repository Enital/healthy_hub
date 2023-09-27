import React, { useEffect, useState } from 'react';
import css from './UpdateMealModal.module.css';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { UpdateFood } from 'redux/usersGoal/operations';
import scrollLock from 'scroll-lock';

export const customStyles = {
  overlay: {
    background: 'rgba(5, 5, 5, 0.8)',
    overflow: 'scroll',
  },
};

const UpdateMealModal = ({
  updateMealModalOpen,
  setUpdateMealModalOpen,
  foodId,
  mealName,
  calories,
  carbohydrates,
  protein,
  fat,
}) => {
  const id = foodId;
  const dispatch = useDispatch();

  if (updateMealModalOpen) {
    scrollLock.disablePageScroll(document.body);
  } else if (!updateMealModalOpen) {
    scrollLock.clearQueueScrollLocks();
    scrollLock.enablePageScroll();
  }

  const [placeholderData, setPlaceholderData] = useState({
    name: '',
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  });

  useEffect(() => {
    setPlaceholderData({
      name: mealName,
      calories: calories,
      carbohydrates: carbohydrates,
      protein: protein,
      fat: fat,
    });
  }, [mealName, carbohydrates, protein, fat, calories]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    // Обмеження до 4 символів для числових полів
    if (
      name === 'carbohydrates' ||
      name === 'protein' ||
      name === 'fat' ||
      name === 'calories'
    ) {
      const limitedValue = value.replace(/\D/g, '').slice(0, 4);
      setPlaceholderData(prevData => ({
        ...prevData,
        [name]: limitedValue,
      }));
    } else {
      setPlaceholderData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSave = e => {
    e.preventDefault();
    dispatch(UpdateFood({ placeholderData, id }));
    setUpdateMealModalOpen(false);
  };

  return (
    <Modal
      className={`${css.recordMealModal} `}
      isOpen={updateMealModalOpen}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      onRequestClose={() => {
        setUpdateMealModalOpen(false);
        document.body.style.overflow = 'auto';
      }}
    >
      <h3 className={css.recordMealModalTitle}>Edit your meal</h3>

      <form noValidate>
        <div className={css.updateFoodForm}>
          <table className={css.dairy_breakfast_table}>
            {/* <thead>
              <tr>
                <th className={css.titles} style={{ fontWeight: 'normal' }}>
                  Name
                </th>
                <th className={css.titles} style={{ fontWeight: 'normal' }}>
                  Carbonoh.
                </th>
                <th className={css.titles} style={{ fontWeight: 'normal' }}>
                  Protein
                </th>
                <th className={css.titles} style={{ fontWeight: 'normal' }}>
                  Fat
                </th>
                <th className={css.titles} style={{ fontWeight: 'normal' }}>
                  Calories
                </th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>
                  <p className={css.titles} style={{ fontWeight: 'normal' }}>
                    Name
                  </p>
                  <input
                    style={{
                      border: '1px solid rgba(227, 255, 168, 1)',
                      borderRadius: '12px',
                      width: '223px',
                      height: '36px',
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(182, 182, 182, 1)',
                      fontFamily: 'Poppins',
                      paddingLeft: '10px',
                      gap: '10px',
                      background: 'black',
                      marginRight: '10px',
                    }}
                    type="text"
                    name="name"
                    className={css.recordMealModalInput}
                    value={placeholderData.name}
                    onChange={handleInputChange}
                    required={true}
                  />
                </td>
                <td>
                  <p className={css.titles} style={{ fontWeight: 'normal' }}>
                    Carbonoh.
                  </p>
                  <input
                    placeholder="Carbonoh."
                    type="number"
                    name="carbohydrates"
                    className={css.recordMealModalInput}
                    value={placeholderData.carbohydrates}
                    onChange={handleInputChange}
                    required={true}
                  />
                </td>
                <td>
                  <p className={css.titles} style={{ fontWeight: 'normal' }}>
                    Protein
                  </p>
                  <input
                    placeholder="Protein"
                    type="number"
                    name="protein"
                    className={css.recordMealModalInput}
                    value={placeholderData.protein}
                    onChange={handleInputChange}
                    required={true}
                  />
                </td>
                <td>
                  <p className={css.titles} style={{ fontWeight: 'normal' }}>
                    Fat
                  </p>
                  <input
                    placeholder="Fat"
                    name="fat"
                    type="number"
                    className={css.recordMealModalInput}
                    value={placeholderData.fat}
                    onChange={handleInputChange}
                    required={true}
                  />
                </td>
                <td>
                  <p className={css.titles} style={{ fontWeight: 'normal' }}>
                    Calories
                  </p>
                  <input
                    placeholder="Calories"
                    name="calories"
                    type="number"
                    className={css.recordMealModalInput}
                    value={placeholderData.calories}
                    onChange={handleInputChange}
                    required={true}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={css.recordMealModalBtnContainer}>
          <button
            onClick={handleSave}
            className={`${css.recordMealModalConfirmBtn}`}
          >
            Confirm
          </button>
          <button
            className={`${css.recordMealModalCancelBtn} `}
            type="button"
            onClick={() => {
              setUpdateMealModalOpen(false);
              document.body.style.overflow = 'auto';
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateMealModal;
