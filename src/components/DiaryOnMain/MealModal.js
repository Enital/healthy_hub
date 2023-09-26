import React, { useState } from 'react';
import breakfast from '../../images/illustration/breakfast-image.svg';
import { FaTrashAlt } from 'react-icons/fa';
//import { FaBitbucket } from "react-icons/fa";
//FaTrashAlt
import css from './diaryOnMain.module.css';
import { useDispatch } from 'react-redux';
import { fetchGoalsConfirm } from 'redux/usersGoal/operations';

const MealModal = ({ isOpen, onClose, mealName, closeModal }) => {
  const dispatch = useDispatch();

  const [placeholderData, setPlaceholderData] = useState([
    {
      name: '',
      carbohydrates: '',
      protein: '',
      fat: '',
      calories: '',
    },
  ]);

  const initialInputFields = [
    { name: '', carbohydrates: '', protein: '', fat: '', calories: '' },
  ];

  const [inputFields, setInputFields] = useState(initialInputFields);
  if (!isOpen) return null;

  const disabledValid = () => {
    if (
      placeholderData.name.length < 1 ||
      placeholderData.carbohydrates.length < 1 ||
      placeholderData.protein.length < 1 ||
      placeholderData.fat.length < 1 ||
      placeholderData.calories.length < 1
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddField = () => {
    setInputFields([
      ...inputFields,
      { name: '', carbohydrates: '', protein: '', fat: '', calories: '' },
    ]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputFields = [...inputFields];

    newInputFields[index][name] = value;
    setInputFields(newInputFields);
    // console.log('newInputFields',newInputFields);

    setPlaceholderData(prevData => newInputFields);
  };

  const handleConfirm = async () => {
    try {
      // console.log('placeholderData', placeholderData);
      await dispatch(fetchGoalsConfirm({ placeholderData, mealName }));
      setPlaceholderData(placeholderData);
      setInputFields(initialInputFields);
      onClose();
    } catch (error) {
      console.error('Помилка під час відправки на бекенд:', error);
    }
  };

  const handleRemoveField = index => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const handleOverlyClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      const { name, value } = event.target;
      const newValue = value.slice(0, -1); // Видалити останній символ
      const newInputFields = [...inputFields];
      newInputFields[index][name] = newValue;
      setInputFields(newInputFields);
      setPlaceholderData(prevData => newInputFields);
    }
  };
  return (
    <div className={css.modalOverly} onClick={handleOverlyClick}>
      <div
        className={css.overlay}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className={`${css.containerMobile} ${css.containerDextop}`}>
          <h2 className={css.img}>Record your meal</h2>
          <div className={css.flexContainer}>
            <img className={css.breakfast} src={breakfast} alt="breakfast" />
            <h2 className={`${css.text} ${css.img}`}>{mealName}</h2>
          </div>

          {inputFields.map((field, index) => (
            <form>
              <ul>
                <div className={css.containerLabel} key={index}>
                  <label htmlFor={`productName${index}`}></label>

                  <input
                    className={`${css.input}${
                      field.name.length < 2 || field.name.length > 50
                        ? ` ${css.inputError}`
                        : ''
                    }`}
                    placeholder="The name of the product or dish"
                    type="text"
                    id={`productName${index}`}
                    name="name"
                    value={field.name}
                    onChange={e => handleInputChange(index, e)}
                    autoComplete="off"
                  />

                  <label htmlFor={`carbohydrates${index}`}></label>
                  <input
                    className={`${css.inputCPFC}${
                      field.carbohydrates >= 9999 ? ` ${css.inputError}` : ''
                    }`}
                    placeholder="carbonoh."
                    type="text"
                    id={`carbohydrates${index}`}
                    name="carbohydrates"
                    value={field.carbohydrates}
                    onChange={e => {
                      const inputValue = e.target.value;
                      if (!isNaN(inputValue)) {
                        const intValue = parseInt(inputValue);
                        if (intValue <= 9999) {
                          handleInputChange(index, e);
                        }
                      }
                    }}
                    autoComplete="off"
                    onKeyDown={e => handleKeyDown(index, e)}
                  />

                  <label htmlFor={`protein${index}`}></label>
                  <input
                    className={`${css.inputCPFC}${
                      field.protein >= 9999 ? ` ${css.inputError}` : ''
                    }`}
                    placeholder="Protein"
                    type="text"
                    id={`protein${index}`}
                    name="protein"
                    value={field.protein}
                    onChange={e => {
                      const inputValue = e.target.value;
                      if (!isNaN(inputValue)) {
                        const intValue = parseInt(inputValue);
                        if (intValue <= 9999) {
                          handleInputChange(index, e);
                        }
                      }
                    }}
                    autoComplete="off"
                    onKeyDown={e => handleKeyDown(index, e)}
                  />

                  <label htmlFor={`fat${index}`}></label>
                  <input
                    className={`${css.inputCPFC}${
                      field.fat >= 9999 ? ` ${css.inputError}` : ''
                    }`}
                    placeholder="Fat"
                    type="text"
                    id={`fat${index}`}
                    name="fat"
                    value={field.fat}
                    onChange={e => {
                      const inputValue = e.target.value;
                      if (!isNaN(inputValue)) {
                        const intValue = parseInt(inputValue);
                        if (intValue <= 9999) {
                          handleInputChange(index, e);
                        }
                      }
                    }}
                    autoComplete="off"
                    onKeyDown={e => handleKeyDown(index, e)}
                  />

                  <label htmlFor={`calories${index}`}></label>
                  <input
                    className={`${css.inputCPFC}${
                      field.calories >= 9999 ? ` ${css.inputError}` : ''
                    }`}
                    placeholder="Calories"
                    type="text"
                    id={`calories${index}`}
                    name="calories"
                    value={field.calories}
                    onChange={e => {
                      const inputValue = e.target.value;
                      if (!isNaN(inputValue)) {
                        const intValue = parseInt(inputValue);
                        if (intValue <= 9999) {
                          handleInputChange(index, e);
                        }
                      }
                    }}
                    autoComplete="off"
                    onKeyDown={e => handleKeyDown(index, e)}
                  />

                  {index > 0 && (
                    <button
                      className={css.remove}
                      type="button"
                      onClick={() => handleRemoveField(index)}
                    >
                      <FaTrashAlt />
                    </button>
                  )}
                </div>
              </ul>
            </form>
          ))}

          <button
            className={css.addMore}
            type="button"
            onClick={handleAddField}
          >
            + Add more
          </button>

          <div className={css.buttonConfirm}>
            <button className={css.cancel} onClick={onClose}>
              Cancel
            </button>
            <button
              className={css.confirm}
              disabled={disabledValid()}
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MealModal;
