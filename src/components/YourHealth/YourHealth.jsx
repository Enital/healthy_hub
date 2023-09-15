import { NavLink } from 'react-router-dom';
import bodyParametersIMG from './../../images/img/illustration-body-parameters.svg';
import css from './YourHealth.module.css';

function YourHealth() {
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
        <form className={css.form}>
          <label className={css.label}>
            Height
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter your height"
            />
          </label>
          <label className={css.label}>
            Weight
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter your weight"
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

export default YourHealth;
