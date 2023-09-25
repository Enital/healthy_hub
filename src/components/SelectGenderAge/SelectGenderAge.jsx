import { useState } from 'react';
import genderAndAgeIMG from './../../images/img/illustration-gender-and-age.svg';
import css from './SelectGenderAge.module.css';
import { useInput } from '../../hooks/useValidationForm';
import { messageErrorAge } from './InputValidation/messageErrorAge';


function SelectGenderAge({ onForm, onBackPage, gender, ageValue }) {
  const [genderValue, setGender] = useState(gender);
  const age = useInput(ageValue, { isEmpty: true, minLength: 1, maxLength: 3 });

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
            <p className={css.ageLable}> Your age</p>
            <input
              className={`${css.input}${
                (age.isDirty && age.maxLengthError) ||
                (age.isDirty && age.minLengthError) ||
                (age.isDirty && age.isEmpty)
                  ? ` ${css.inputError}`
                  : !age.maxLengthError && !age.minLengthError
                  ? ` ${css.inputValid}`
                  : ''
              }`}
              type="number"
              name="age"
              placeholder="Enter your age"
              value={age.value}
              onChange={e => age.onChange(e)}
              onBlur={e => age.onBlur(e)}
              autocomplete="off" 
              required
            />
            {messageErrorAge(age,'Not valid age*')}
          </label>
          <button className={css.NextBtn} type="submit" disabled={!age.inputValid}>
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
