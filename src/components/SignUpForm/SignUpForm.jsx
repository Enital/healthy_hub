import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import css from './SignUpForm.module.css';
import { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

function SignUpForm({ onForm, name2, email2, password2 }) {
  const [name, setName] = useState(name2);
  const [email, setEmail] = useState(email2);
  const [password, setPassword] = useState(password2);

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
  function myFunction() {
    const x = document.getElementById('myInput');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
  // const schema = yup.object().shape({
  //   name: yup.string().required('Name is required'),
  //   email: yup
  //     .string()
  //     .email('Invalid email format')
  //     .required('Email is required'),
  //   password: yup
  //     .string()
  //     .matches(
  //       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,
  //       'Password must meet the criteria (min. 6, max. 16 characters, at least 1 digit, 1 lowercase letter, and 1 uppercase letter)'
  //     )
  //     .required('Password is required'),
  // });

  // const initialValues = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  // const FromError = ({ name }) => {
  //   return (
  //     <ErrorMessage name={name} render={message => Notify.failure(message)} />
  //   );
  // }
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
        {/* <Formik
          initialValues={initialValues}
          onSubmit={onForm}
          validationSchema={schema}
        > */}
        <form className={css.form} onSubmit={onForm}>
          <label>
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              pattern="[A-Za-z\s]{1,25}"
              title="Введіть ваше ім'я, використовуючи тільки літери та пробіли [A-Z]"
              required
            />
            {/* <FromError name="name" /> */}
          </label>
          <label>
            <input
              className={css.input}
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={handleChange}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              required
              title="Введіть вашу адресу електронної пошти у форматі example@example.com"
            />
            {/* <FromError name="email" /> */}
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              id="myInput"
              onChange={handleChange}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            {/* <FromError name="password" /> */}
            <input
              className={css.checkbox}
              type="checkbox"
              onChange={myFunction}
              style={{ display: password ? 'block' : 'none' }}
            />
          </label>
          <button className={css.signupBtn} type="submit">
            Next
          </button>
        </form>
        {/* </Formik> */}
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
