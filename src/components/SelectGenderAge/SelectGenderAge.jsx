import { useState } from 'react';
import genderAndAgeIMG from './../../images/img/illustration-gender-and-age.svg';
import css from './SelectGenderAge.module.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

function SelectGenderAge({ onForm, onBackPage, age, gender }) {
  const [genderValue, setGender] = useState(gender);
  const [ageValue, setAge] = useState(age);

  const handleChangeAge = e => {
    setAge(e.target.value);
  };
  const handleChangeGender = e => {
    setGender(e.target.value);
  };

  // const schema = yup.object().shape({
  //   age: yup.number().required('Age is required'),
  // });
  // const initialValues = {
  //   age: '',
  // };
  // const FromError = ({ name }) => {
  //   return (
  //     <ErrorMessage name={name} render={message => Notify.failure(message)} />
  //   );
  // };
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
        {/* <Formik
          initialValues={initialValues}
          onSubmit={onForm}
          validationSchema={schema}
        > */}
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
            Your age
            <input
              className={css.input}
              type="number"
              name="age"
              placeholder="Enter your age"
              value={ageValue}
              onChange={handleChangeAge}
              min="0" // Мінімальний допустимий вік
              max="120" // Максимальний допустимий вік
              required
            />
            {/* <FromError name="age" /> */}
          </label>
          <button className={css.NextBtn} type="submit">
            Next
          </button>
          <button className={css.BackBtn} onClick={onBackPage} type="button">
            Back
          </button>
        </form>
        {/* </Formik> */}
      </div>
    </div>
  );
}

export default SelectGenderAge;
