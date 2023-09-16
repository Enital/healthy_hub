// import { NavLink } from 'react-router-dom';
// import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
// import css from './SignIn.module.css';
// import { Notify } from 'notiflix';
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import { authReducer } from 'redux/auth/authSlice';

// export const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const error = useSelector(state => state.authReducer.error);
//   const dispatch = useDispatch();

//   const onFormSubmit = e => {
//     e.preventDefault();

//     const userCredentials = {
//       email,
//       password,
//     };

//     dispatch(logIn(userCredentials));
//     setEmail('');
//     setPassword('');
//   };

//   useEffect(() => {
//     if (!error) return;

//     if (error === 'Request failed with status code 400') {
//       Notify.failure('Authorization error. Please try other credentials.');
//     } else {
//       Notify.failure(error);
//     }

//     dispatch(authReducer.actions.setError(null));
//   }, [error, dispatch]);

//   return (
//     <div className={css.wrapper}>
//       <img
//         className={css.img}
//         src={SportAndFitnessTrackerIMG}
//         alt="illustration-sport-and-fitness-tracker"
//       />
//       <div className={css.content}>
//         <h1 className={css.title}>Sign in</h1>
//         <h2 className={css.subtitle}>
//         You need to login to use the service
//         </h2>
//         <form className={css.form} onSubmit={onFormSubmit}>
//           <label>
//             <input
//               className={css.input}
//               type="email"
//               name="email"
//               placeholder="E-mail"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             <input
//               className={css.input}
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//             />
//           </label>
//           <button className={css.signinBtn} type="submit">
//             Sign in
//           </button>
//           <div className={css.forgotYourPassword}>
//             <NavLink className={css.forgotPassword} to="/forgotpassword">
//             Forgot your password?
//             </NavLink>
//           </div>
//         </form>
//         <div className={css.questionTrumb}>
//           <p className={css.question}> If you don't have an account yet</p>
//           <NavLink className={css.signupBtn} to="/signup">
//             Sign up
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;
import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignIn.module.css';

import { useState } from 'react';

function SignIn({ onForm }) {

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
        <form className={css.form} onSubmit={onForm}>
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
           <div className={css.forgotYourPassword}>
             <NavLink className={css.forgotPassword} to="/forgotpassword">
             Forgot your password?
             </NavLink>
           </div>
         </form>
         <div className={css.questionTrumb}>
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
