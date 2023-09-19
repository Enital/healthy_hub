import React, { useState } from 'react';
import breakfast from '../../images/illustration/breakfast-image.svg';
//import add from '../../images/icons/add.svg';
import css from './diaryOnMain.module.css';
import { useDispatch } from 'react-redux';
import { fetchGoalsConfirm } from 'redux/usersGoal/operations';

const MealModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [placeholderData, setPlaceholderData] = useState({
    name: '',
    carbonoh: '',
    protein: '',
    fat: '',
    calories: '',
  });

  const initialInputFields = [
    { name: '', carbonoh: '', protein: '', fat: '', calories: '' },
  ];

  const [inputFields, setInputFields] = useState(initialInputFields);
  if (!isOpen) return null;

  const handleAddField = () => {
    setInputFields([
      ...inputFields,
      { name: '', carbonoh: '', protein: '', fat: '', calories: '' },
    ]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputFields = [...inputFields];
    newInputFields[index][name] = value;
    setInputFields(newInputFields);

    //update placeholder
    setPlaceholderData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleConfirm = async () => {
    try {
      await dispatch(fetchGoalsConfirm(placeholderData));

      setPlaceholderData({
        name: '',
        carbonoh: '',
        protein: '',
        fat: '',
        calories: '',
      });

      // onClose();
    } catch (error) {
      console.error('Помилка під час відправки на бекенд:', error);
    }
  };

  const handleRemoveField = index => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
    <div className={css.overlay} style={{ display: isOpen ? 'block' : 'none' }}>
      <div>
        <h2 className={css.img}>Record your meal</h2>
        <div className={css.flexContainer}>
          <img className={css.breakfast} src={breakfast} alt="breakfast" />
          <h2 className={css.nameBreakfast}>Breakfast</h2>
        </div>

        {inputFields.map((field, index) => (
          <div className={css.containerLabel} key={index}>
            <label htmlFor={`productName${index}`}></label>
            <input
              style={{
                border: '1px solid rgba(227, 255, 168, 1)',
                borderRadius: '12px',
                width: '255px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(182, 182, 182, 1)',
                fontFamily: 'Poppins',

                paddingLeft: '10px',
                gap: '10px',
                background: 'black',
                marginRight: '10px',
                marginLeft: '25px',
              }}
              placeholder="The name of the product or dish"
              type="text"
              id={`productName${index}`}
              name="name"
              value={field.name}
              onChange={e => handleInputChange(index, e)}
            />
            <label htmlFor={`carbonoh${index}`}></label>
            <input
              style={{
                border: '1px solid rgba(227, 255, 168, 1)',
                borderRadius: '12px',
                width: '100px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(182, 182, 182, 1)',
                font: 'Poppins',

                paddingLeft: '10px',
                gap: '10px',
                background: 'black',
                marginRight: '10px',
              }}
              placeholder="Carbonoh"
              type="text"
              id={`carbonoh${index}`}
              name="carbonoh"
              value={field.carbonoh}
              onChange={e => handleInputChange(index, e)}
            />
            <label htmlFor={`protein${index}`}></label>
            <input
              style={{
                border: '1px solid rgba(227, 255, 168, 1)',
                borderRadius: '12px',
                width: '86px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(182, 182, 182, 1)',
                font: 'Poppins',

                paddingLeft: '10px',
                gap: '10px',
                background: 'black',
                marginRight: '10px',
              }}
              placeholder="Protein"
              type="text"
              id={`protein${index}`}
              name="protein"
              value={field.protein}
              onChange={e => handleInputChange(index, e)}
            />
            <label htmlFor={`fat${index}`}></label>
            <input
              style={{
                border: '1px solid rgba(227, 255, 168, 1)',
                borderRadius: '12px',
                width: '61px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(182, 182, 182, 1)',
                font: 'Poppins',

                paddingLeft: '10px',
                gap: '10px',
                background: 'black',
                marginRight: '10px',
              }}
              placeholder="Fat"
              type="text"
              id={`fat${index}`}
              name="fat"
              value={field.fat}
              onChange={e => handleInputChange(index, e)}
            />

            <label htmlFor={`calories${index}`}></label>
            <input
              style={{
                border: '1px solid rgba(227, 255, 168, 1)',
                borderRadius: '12px',
                width: '78px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(182, 182, 182, 1)',
                font: 'Poppins',

                paddingLeft: '10px',
                gap: '10px',
                background: 'black',
                marginRight: '10px',
              }}
              placeholder="Calories"
              type="text"
              id={`calories${index}`}
              name="calories"
              value={field.calories}
              onChange={e => handleInputChange(index, e)}
            />

            {index > 0 && (
              <button
                className={css.remove}
                type="button"
                onClick={() => handleRemoveField(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        {/* <img className={css.add} src={add} alt="add" /> */}
        <button className={css.addMore} type="button" onClick={handleAddField}>
          + Add more
        </button>
      </div>
      <div className={css.buttonConfirm}>
        <button className={css.cancel} onClick={onClose}>
          Cancel
        </button>
        <button className={css.confirm} onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};
export default MealModal;



// {
//     breakfast: [
//         { qwe: 23, name: 'Apple', calories: 52, carbohydrates: 14, protein: 0.3, fat: 0.2 },
//         { name: 'Strawberries', calories: 32, carbohydrates: 7.68, protein: 0.67, fat: 0.3 },
//     ],
//     lunch: [
//         { name: 'Spinach', calories: 23, carbohydrates: 3.6, protein: 2.9, fat: 0.4 },
//         { name: 'Kale', calories: 49, carbohydrates: 8.8, protein: 3.3, fat: 0.9 },
//         { name: 'Quinoa', calories: 120, carbohydrates: 21.3, protein: 4.4, fat: 1.9 },
//     ],
//     dinner: [
//         { name: 'Greek Yogurt', calories: 59, carbohydrates: 3.6, protein: 10, fat: 0.4 },
//         { name: 'Chicken Breast', calories: 165, carbohydrates: 0, protein: 31, fat: 3.6 },
//     ],
//     snack: [
//         { name: 'Spinach', calories: 23, carbohydrates: 3.6, protein: 2.9, fat: 0.4 },
//         { name: 'Kale', calories: 49, carbohydrates: 8.8, protein: 3.3, fat: 0.9 },
//         { name: 'Quinoa', calories: 120, carbohydrates: 21.3, protein: 4.4, fat: 1.9 },
//     ],
// },
