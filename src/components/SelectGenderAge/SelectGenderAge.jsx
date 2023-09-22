import { useState } from 'react';
import genderAndAgeIMG from './../../images/img/illustration-gender-and-age.svg';
import css from './SelectGenderAge.module.css';
import { useInput } from '../../hooks/useValidationForm';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import validCorrect from '../../images/icons/validCorrect.svg';
import validError from '../../images/icons/validError.svg';

function SelectGenderAge({ onForm, onBackPage, gender, ageValue }) {
  const [genderValue, setGender] = useState(gender);
  const {
    value,
    onChange,
    onBlur,
    isDirty,
    isEmpty,
    minLengthError,
    maxLengthError,
    inputValid,
  } = useInput(ageValue, { isEmpty: true, minLength: 1, maxLength: 3 });

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
                (isDirty && maxLengthError) ||
                (isDirty && minLengthError) ||
                (isDirty && isEmpty)
                  ? ` ${css.inputError}`
                  : !maxLengthError && !minLengthError
                  ? ` ${css.inputValid}`
                  : ''
              }`}
              type="number"
              name="age"
              placeholder="Enter your age"
              value={value}
              onChange={e => onChange(e)}
              onBlur={e => onBlur(e)}
              required
            />
            {/* {((isDirty &&maxLengthError) || (isDirty &&minLengthError)) && (
              <div className={css.errorMessage}>Password is secure</div>
            )} */}

            {(isDirty && maxLengthError) ||
            (isDirty && minLengthError) ||
            (isDirty && isEmpty) ? (
              <>
                <img src={validError} alt="Error" className={css.validError} />
                <div className={css.errorMessage}>Not valid age*</div>
              </>
            ) : !maxLengthError && !minLengthError ? (
              <img
                src={validCorrect}
                alt="Correct"
                className={css.validCorrect}
              />
            ) : (
              ''
            )}
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
