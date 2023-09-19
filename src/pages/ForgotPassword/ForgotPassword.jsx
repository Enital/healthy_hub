import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './ForgotPassword.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
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
      })
    );
    form.reset();
  };
  //   fetch("http://goit-healthy-hub.onrender.com/api/auth/restore/"), {
  //   method: "POST",
  // };
    return (
      <div className={css.container}>
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
                className={css.input}
                type="email"
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={handleChange}  
              />
            </label>
            <NavLink className={css.send} >
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