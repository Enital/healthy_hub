import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignUpForm.module.css';
import { useInput } from '../../hooks/useValidationForm';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import validCorrect from '../../images/icons/validCorrect.svg';
import validError from '../../images/icons/validError.svg';

const SignUpForm = ({ onForm, nameValue, emailValue, passwordValue }) => {
  const name = useInput(nameValue, { isEmpty: true, isName: true });
  const email = useInput(emailValue, { isEmpty: true, isEmail: true });
  const password = useInput(passwordValue, { isEmpty: true, isPassword: true });

  const myFunction = () => {
    const x = document.getElementById('myInput');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
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

        <form className={css.form} onSubmit={onForm}>
          <label className={css.label}>
            <input
              className={`${css.input}${
                name.isDirty && name.nameError ? ` ${css.inputError}` : ''
              }${!name.nameError ? ` ${css.inputValid}` : ''}`}
              type="text"
              name="name"
              placeholder="Name"
              value={name.value}
              onChange={e => name.onChange(e)}
              onBlur={e => name.onBlur(e)}
            />
            {name.isDirty && name.nameError && (
              <div className={css.errorMessage}>Not valid name*</div>
            )}
            {(name.isDirty && name.nameError) ||
            (name.isDirty && name.isEmpty) ? (
              <img src={validError} alt="Error" className={css.validError} />
            ) : !name.nameError ? (
              <img
                src={validCorrect}
                alt="Correct"
                className={css.validCorrect}
              />
            ) : (
              ''
            )}
          </label>
          <label className={css.label}>
            <input
              className={`${css.input}${
                email.isDirty && email.emailError ? ` ${css.inputError}` : ''
              }${!email.emailError ? ` ${css.inputValid}` : ''}`}
              type="email"
              name="email"
              placeholder="E-mail"
              value={email.value}
              onChange={e => email.onChange(e)}
              onBlur={e => email.onBlur(e)}
            />
            {email.isDirty && email.emailError && (
              <div className={css.errorMessage}>Not valid e-mail*</div>
            )}
            {(email.isDirty && email.emailError) ||
            (email.isDirty && email.isEmpty) ? (
              <img src={validError} alt="Error" className={css.validError} />
            ) : !email.emailError ? (
              <img
                src={validCorrect}
                alt="Correct"
                className={css.validCorrect}
              />
            ) : (
              ''
            )}
          </label>
          {/* {password.isDirty &&
            password.passwordError &&
            Notify.failure(
              'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
            )} */}

          <label className={css.label}>
            {/* {password.isDirty &&
              password.isEmpty &&
              Notify.failure('Please create your own password')} */}
            <input
              className={`${css.input}${
                password.isDirty && password.passwordError
                  ? ` ${css.inputError}`
                  : ''
              }${!password.passwordError ? ` ${css.inputValid}` : ''}`}
              type="password"
              name="password"
              placeholder="Password"
              value={password.value}
              id="myInput"
              onChange={e => password.onChange(e)}
              onBlur={e => password.onBlur(e)}
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // required
            />
            {(password.isDirty && password.passwordError) ||
            (password.isDirty && password.isEmpty) ? (
              <>
                <img src={validError} alt="Error" className={css.validError} />
                <div className={css.errorMessage}>Enter a valid Password*</div>
              </>
            ) : !password.passwordError ? (
              <>
                <img
                  src={validCorrect}
                  alt="Correct"
                  className={css.validCorrect}
                />
                <div className={css.correctMessage}>Password is secure</div>
              </>
            ) : (
              ''
            )}

            <input
              className={css.checkbox}
              type="checkbox"
              onChange={myFunction}
              style={{ display: password ? 'block' : 'none' }}
            />
          </label>
          <button
            className={css.signupBtn}
            type="submit"
            disabled={
              !name.inputValid || password.inputValid || !email.inputValid
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
