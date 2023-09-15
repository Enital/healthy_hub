import { NavLink } from 'react-router-dom';
import genderAndAgeIMG from './../../images/img/illustration-gender-and-age.svg';
import css from './SelectGenderAge.module.css';

function SelectGenderAge() {
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
        <form className={css.form}>
          <p>Gender</p>
          <div className={css.wrappers}>
            <label className={css.label}>
              <input type="radio" name="sex" value="male" />
              Male
            </label>
            <label className={css.label}>
              <input type="radio" name="sex" value="female" checked />
              Female
            </label>
          </div>
          <label className={css.labelAge}>
            Your age
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter your age"
            />
          </label>
          <NavLink className={css.NextBtn} to="">
            Next
          </NavLink>
          <NavLink className={css.BackBtn} to="">
            Back
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default SelectGenderAge;
