import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import { NavLink } from 'react-router-dom';

import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={SportAndFitnessTrackerIMG}
          alt="illustration-sport-and-fitness-tracker"
        />
        <div className={css.content}>
          <h1 className={css.title}>Sign up</h1>
          <h2 className={css.subtitle}>
            You need to register to use the service
          </h2>
          <form className={css.form}>
            <label>
              <input
                className={css.input}
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <label>
              <input
                className={css.input}
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </label>
            <label>
              <input
                className={css.input}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
            <NavLink className={css.signupBtn} to="">
              Sign up
            </NavLink>
          </form>
          <div className={css.questionTrumb}>
            <p className={css.question}> Do you already have an account?</p>
            <NavLink className={css.signinBtn} to="/signin">
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
