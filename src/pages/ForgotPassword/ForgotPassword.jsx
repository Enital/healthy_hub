import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ForgotPassword.module.css';
import { useInput } from '../../hooks/useValidationForm';
import { cssValidEmail } from '../../components/SignUpForm/InputValidation/messageErrorEmail';
// import { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';

function ForgotPassword() {
  const email = useInput('', { isEmpty: true, isEmail: true });
  // const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('auth/restore', {
        email: email,
      });
      return res.data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      console.error(error);
    }
  }

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
          <form className={css.form} onSubmit={handleSubmit}>
            <label>
              <input
                className={cssValidEmail(email)}
                type="email"
                name="email"
                placeholder="E-mail"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                autocomplete="off"
              />
            </label>
            <button className={css.send} to="/signin" type="submit">
              Send
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
    </div>
  );
}

export default ForgotPassword;
