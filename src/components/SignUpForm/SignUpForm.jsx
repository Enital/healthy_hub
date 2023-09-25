import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignUpForm.module.css';
import { useInput } from '../../hooks/useValidationForm';
import { messageErrorName } from './InputValidation/messageErrorName';
import { cssValidName } from './InputValidation/messageErrorName';
import { messageErrorEmail } from './InputValidation/messageErrorEmail';
import { cssValidEmail } from './InputValidation/messageErrorEmail';
import { messageErrorPassword } from './InputValidation/messageErrorPassword';
import { cssValidPassword } from './InputValidation/messageErrorPassword';
import { seePassword } from './seePassword';
const SignUpForm = ({ onForm, nameValue, emailValue, passwordValue }) => {
  const name = useInput(nameValue, { isEmpty: true, isName: true });
  const email = useInput(emailValue, { isEmpty: true, isEmail: true });
  const password = useInput(passwordValue, { isEmpty: true, isPassword: true });

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

        <form className={css.form} onSubmit={onForm}>
          <label className={css.label}>
            <input
              className={cssValidName(name)}
              type="text"
              name="name"
              placeholder="Name"
              value={name.value}
              onChange={e => name.onChange(e)}
              onBlur={e => name.onBlur(e)}
              autocomplete="off"
            />
            {messageErrorName(name, 'Not valid name*')}
          </label>
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
            />
            {messageErrorEmail(email, 'Not valid e-mail*')}
          </label>
          <label className={css.label}>
            {/* {password.isDirty &&
            password.passwordError &&
            Notify.failure(
              'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
            )} */}
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
            {messageErrorPassword(
              password,
              'Enter a valid Password*',
              'Password is secure'
            )}
            <input
              className={css.checkbox}
              type="checkbox"
              onChange={seePassword}
              style={{ display: password ? 'block' : 'none' }}
            />
          </label>
          <button
            className={css.signupBtn}
            type="submit"
            disabled={
              !name.inputValid || !password.inputValid || !email.inputValid
            }
          >
            Next
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
};

export default SignUpForm;
