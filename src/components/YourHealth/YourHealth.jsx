import bodyParametersIMG from './../../images/img/illustration-body-parameters.svg';
import css from './YourHealth.module.css';
import { useState } from 'react';
function YourHealth({ onForm, onBackPage, height, weight }) {
  const [heightValue, setHeight] = useState(height);
  const handleChangeHeight = e => {
    setHeight(e.target.value);
  };
  const [weightValue, setWeight] = useState(weight);
  const handleChangeWeight = e => {
    setWeight(e.target.value);
  };
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={bodyParametersIMG}
        alt="illustration-gender-and-age"
      />
      <div className={css.content}>
        <h1 className={css.title}>Body parameters</h1>
        <h2 className={css.subtitle}>
          Enter your parameters for correct performance tracking
        </h2>
        <form className={css.form} onSubmit={onForm}>
          <label className={css.label}>
            Height
            <input
              className={css.input}
              type="number"
              name="height"
              placeholder="Enter your height (in cm)"
              value={heightValue}
              onChange={handleChangeHeight}
              min="0"
              max="300"
              required
            />
          </label>
          <label className={css.label}>
            Weight
            <input
              className={css.input}
              type="number"
              name="weight"
              placeholder="Enter your weight (in kg)"
              value={weightValue}
              onChange={handleChangeWeight}
              min="0" 
              max="300" 
              required
            />
          </label>
          <button className={css.NextBtn} type="submit">
            Next
          </button>
          <button className={css.BackBtn} onClick={onBackPage} type="button">
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default YourHealth;
