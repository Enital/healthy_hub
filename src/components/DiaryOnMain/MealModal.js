//import React, { useState } from 'react';
import breakfast from '../../images/illustration/breakfast-image.svg'
import add from '../../images/icons/add.svg'
import css from './diaryOnMain.module.css';

const MealModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  

  return (
    
      <div className={css.overlay} style={{ display: isOpen ? 'block' : 'none' }}>
        <div>
          <h2>Record your meal</h2>
          <h2><img src={breakfast} alt="breakfast" />Breakfast</h2>
          <h2 className={css.nameDish}>The name of the product or dish</h2>
          <h2 className={css.nameCarbonoh}>Carbonoh.</h2>
          <h2 className={css.nameProtein}>Protein</h2>
          <h2 className={css.nameFat}>Fat</h2>
          <h2 className={css.nameCalories}>Calories</h2>
        </div>
        <h2><img className={css.add} src={add} alt="add" />Add more</h2>
        <div>
        <button onClick={onClose}>Cancel</button>
        <button>Confirm</button>
        </div>
      </div>
    
  );
};

export default MealModal;
