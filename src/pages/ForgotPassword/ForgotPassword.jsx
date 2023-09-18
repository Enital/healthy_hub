import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './ForgotPassword.module.css';

function ForgotPassword() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={SportAndFitnessTrackerIMG}
          alt="illustration-sport-and-fitness-tracker"
        />
        <div className={css.content}>
          <h1 className={css.title}>Forgot your password</h1>
          <h2 className={css.subtitle}>
            We will send you an email with recovery instructions
          </h2>
          <form className={css.form}>
            <label>
              <input
                className={css.input}
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </label>
            <NavLink className={css.send} to="/">
              Send
            </NavLink>
          </form>
          <div className={css.navigation}>
            <p className={css.question}> Do you already have an account?</p>
            <NavLink className={css.signinBtn} to="/signin">
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
