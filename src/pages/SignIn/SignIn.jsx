import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignIn.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useInput } from '../../hooks/useValidationForm';
import { cssValidEmail } from '../../components/SignUpForm/InputValidation/messageErrorEmail';
import { messageErrorEmail } from '../../components/SignUpForm/InputValidation/messageErrorEmail';
import { messageErrorPassword } from '../..///components/SignUpForm//InputValidation/messageErrorPassword';
import { cssValidPassword } from '../../components/SignUpForm/InputValidation/messageErrorPassword';
import { seePassword } from '../../components/SignUpForm/seePassword';
import { useState } from 'react';
function SignIn() {
  const [incorrect, setIncorrect] = useState(false);
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, isPassword: true });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    )
      .then(response => {
        if (response.payload === 'Request failed with status code 401') {
          setIncorrect(true);
        }
      })
      .catch(error => {
        console.error(error);
      });
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
            <label className={css.label}>
              <input
                className={cssValidEmail(email)}
                type="email"
                name="email"
                placeholder="E-mail"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                autocomplete="off"
              />{' '}
              {messageErrorEmail(email, 'Not valid e-mail*')}
            </label>
            <label className={css.label}>
              <input
                className={cssValidPassword(password)}
                type="password"
                name="password"
                placeholder="Password"
                value={password.value}
                id="myInput"
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                autocomplete="off"
              />
              {messageErrorPassword(password, 'Enter a valid Password*', '')}
              {incorrect &&
                messageErrorPassword(
                  password,

                  'Incorrect email or password*',
                  '',
                  true
                )}
              <input
                className={css.checkbox}
                type="checkbox"
                onChange={seePassword}
                style={{ display: password ? 'block' : 'none' }}
              />
            </label>
            <button
              className={css.signinBtn}
              type="submit"
              disabled={!password.inputValid || !email.inputValid}
            >
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
