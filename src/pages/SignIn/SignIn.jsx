import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignIn.module.css';
function SignIn() {
    return (
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={SportAndFitnessTrackerIMG}
          alt="illustration-sport-and-fitness-tracker"
        />
        <div className={css.content}>
          <h1 className={css.title}>Sign in</h1>
          <h2 className={css.subtitle}>
            You need to login to use the service
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
            <label>
              <input
                className={css.input}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
            <NavLink className={css.signinBtn} to="">
              Sign in
            </NavLink>
            <NavLink className={css.questionForgot} to="/forgotpassword">
              Forgot your password?
            </NavLink>
          </form>
          <div className={css.navigation}>
            <p className={css.question}> If you don't have an account yet</p>
            <NavLink className={css.signupBtn} to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  export default SignIn;