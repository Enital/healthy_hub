import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignIn.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <div className="container">
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={SportAndFitnessTrackerIMG}
          alt="illustration-sport-and-fitness-tracker"
        />
        <div className={css.content}>
          <h1 className={css.title}>Sign in</h1>
          <h2 className={css.subtitle}>You need to login to use the service</h2>
          <form className={css.form} onSubmit={handleSubmit}>
            <label>
              <input
                className={css.input}
                type="email"
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                className={css.input}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button className={css.signinBtn} type="submit">
              Sign in
            </button>
            <NavLink className={css.forgotPassword} to="/forgot-password">
              Forgot your password?
            </NavLink>
          </form>
          <div className={css.questionTrumb}>
            <p className={css.question}> Do you already have an account?</p>
            <NavLink className={css.signupBtn} to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
