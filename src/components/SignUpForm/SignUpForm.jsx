import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignUpForm.module.css';

import { useState } from 'react';

function SignUpForm({ onNextPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  return (
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
              value={name}
              onChange={handleChange}
            />
          </label>
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
          <button className={css.signupBtn} onClick={onNextPage}>
            Sign up
          </button>
        </form>
        <div className={css.questionTrumb}>
          <p className={css.question}> Do you already have an account?</p>
          <NavLink className={css.signinBtn} to="/signin">
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
