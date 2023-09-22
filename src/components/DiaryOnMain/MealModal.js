import React, { useState } from 'react';
import breakfast from '../../images/illustration/breakfast-image.svg';
//import faTrash from '../../components/DiaryOnMain/img/basket.svg'
import css from './diaryOnMain.module.css';
import { useDispatch } from 'react-redux';
import { fetchGoalsConfirm } from 'redux/usersGoal/operations';


const MealModal = ({ isOpen, onClose, mealName  }) => {
  const dispatch = useDispatch();
  const [placeholderData, setPlaceholderData] = useState({
    name: '',
    carbohydrates: '',
    protein: '',
    fat: '',
    calories: '',
  });

  const initialInputFields = [
    { name: '', carbohydrates: '', protein: '', fat: '', calories: '' },
  ];

  const [inputFields, setInputFields] = useState(initialInputFields);
  if (!isOpen) return null;

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
        carbohydrates: '',
        protein: '',
        fat: '',
        calories: '',
      });
      
      setInputFields(initialInputFields);
  
    } catch (error) {
      console.error('Помилка під час відправки на бекенд:', error);
    }
  };

  // const handleConfirm = async () => {
  //   try {
  //     if (mealName === 'breakfast') {
  //       await dispatch(fetchGoalsConfirm(placeholderData));
  //     } else if (mealName === 'lunch') {
  //       await dispatch(fetchGoalsLunchConfirm(placeholderData));
  //     }

  
  //   } catch (error) {
  //     console.error('Помилка під час відправки на бекенд:', error);
  //   }
  // };

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
          <h2 className={css.img}>{mealName}</h2>
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


            <label htmlFor={`carbohydrates${index}`}></label>
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
              placeholder="carbonoh."
              type="text"
              id={`carbohydrates${index}`}
              name="carbohydrates"
              value={field.carbohydrates}
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
                remove
                {/* <svg icon={faTrash} /> */}
              </button>
            )}
          </div>
        ))}

       
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





