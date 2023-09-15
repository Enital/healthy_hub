//import React from 'react';
import { Link } from 'react-router-dom';
import breakfastImage from '../../images/illustration/breakfast-image.svg';
import lunchImage from '../../images/illustration/lunch-image.svg';
import dinnerImage from '../../images/illustration/dinner-image.svg';
import snackImage from '../../images/illustration/snack-image.svg';

const Diary = () => {
  return (
    <>
      <div className="container">
        <h2>Diary</h2>
        <Link to="/see-more">See More</Link>
      </div>

      <div>
        <img src={breakfastImage} alt="Breakfast" />
        <h2>Breakfast</h2>
      </div>
      <div>
        <img src={lunchImage} alt="Lunch" />
        <h2>Lunch</h2> 
      </div>

      <div>
        <img src={dinnerImage} alt="Dinner" />
        <h2>Dinner</h2>
      </div>

      <div>
        <img src={snackImage} alt="Snack" />
        <h2>Snack</h2>
      </div>
    </>
  );
};

export default Diary;