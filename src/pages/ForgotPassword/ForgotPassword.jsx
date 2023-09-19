import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './ForgotPassword.module.css';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://goit-healthy-hub.onrender.com/api/auth/restore/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
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
                onChange={(e) => setEmail(e.target.value)}  
              />
            </label>
            <NavLink className={css.send} >
              Send
            </NavLink>
          </form>
          {message && <p>{message}</p>}
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