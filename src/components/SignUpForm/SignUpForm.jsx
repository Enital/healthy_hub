import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignUpForm.module.css';
import { useInput } from '../../hooks/useValidationForm';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SignUpForm = ({ onForm }) => {
  const myFunction = () => {
    const x = document.getElementById('myInput');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };
  const name = useInput('', { isEmpty: true, isName: true });
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, isPassword: true });

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
          {name.isDirty && name.isEmpty && (
            <div style={{ color: 'red', fontSize: '10px' }}>
              Please enter your name
            </div>
          )}
          {name.isDirty && name.nameError && (
            <div style={{ color: 'red', fontSize: '10px' }}>valid name</div>
          )}
          <label>
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
              value={name.value}
              onChange={e => name.onChange(e)}
              onBlur={e => name.onBlur(e)}
            />
          </label>
          {email.isDirty && email.isEmpty && (
            <div style={{ color: 'red', fontSize: '10px' }}>
              Please enter your e-mail address
            </div>
          )}
          {email.isDirty && email.emailError && (
            <div style={{ color: 'red', fontSize: '10px' }}>
              Введіть вашу адресу
            </div>
          )}
          <label>
            <input
              className={css.input}
              type="email"
              name="email"
              placeholder="E-mail"
              value={email.value}
              onChange={e => email.onChange(e)}
              onBlur={e => email.onBlur(e)}
            />
          </label>
          {password.isDirty && password.isEmpty && (
            <div style={{ color: 'red', fontSize: '10px' }}>
              Please create your own password
            </div>
          )}
          {/* {password.isDirty && password.passwordError && (
            <div style={{ color: 'red', fontSize: '10px' }}>
              Must contain at least one number and one uppercase and lowercase
              letter, and at least 8 or more characters
            </div>
          )} */}
          <label className={css.label}>
            <input
              className={css.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password.value}
              id="myInput"
              onChange={e => password.onChange(e)}
              onBlur={e => password.onBlur(e)}
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              required
            />
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
