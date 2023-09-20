import { useState } from 'react';
import genderAndAgeIMG from './../../images/img/illustration-gender-and-age.svg';
import css from './SelectGenderAge.module.css';
import { useInput } from '../../hooks/useValidationForm';

function SelectGenderAge({ onForm, onBackPage, gender }) {
  const [genderValue, setGender] = useState(gender);
  const {
    value,
    onChange,
    onBlur,
    isDirty,
    isEmpty,
    maxLengthError,
    minLengthError,
    inputValid,
  } = useInput('', { isEmpty: true, maxLength: 3, minLength: 1 });

  const handleChangeGender = e => {
    setGender(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={genderAndAgeIMG}
        alt="illustration-gender-and-age"
      />
      <div className={css.content}>
        <h1 className={css.title}>Select gender, Age</h1>
        <h2 className={css.subtitle}>
          Choose a goal so that we can help you effectively
        </h2>
        <form className={css.form} onSubmit={onForm}>
          <p>Gender</p>
          <div className={css.wrappers}>
            <label className={css.label}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={genderValue === 'male'}
                onChange={handleChangeGender}
              />
              Male
            </label>
            <label className={css.label}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={genderValue === 'female'}
                onChange={handleChangeGender}
              />
              Female
            </label>
          </div>
          <label className={css.labelAge}>
            {isDirty && isEmpty && (
              <div style={{ color: 'red' }}>Поле не може бути пустим</div>
            )}
            {isDirty && maxLengthError && (
              <div style={{ color: 'red' }}>має біти максимум 4 символи</div>
            )}
            {isDirty && minLengthError && (
              <div style={{ color: 'red' }}>має біти максимум 4 символи</div>
            )}
            Your age
            <input
              className={css.input}
              type="number"
              name="age"
              placeholder="Enter your age"
              value={value}
              onChange={e => onChange(e)}
              onBlur={e => onBlur(e)}
              required
            />
          </label>
          <button className={css.NextBtn} type="submit" disabled={!inputValid}>
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

export default SelectGenderAge;
