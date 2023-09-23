import validCorrect from '../../../images/icons/validCorrect.svg';
import validError from '../../../images/icons/validError.svg';
import css from '../SignUpForm.module.css';

export const messageErrorEmail = (inputName, message,errorMes) => {
  let error = errorMes
  const email = inputName;
  return (email.isDirty && email.emailError) ||
    (email.isDirty && email.isEmpty)|| error ? (
    <>
      <img src={validError} alt="Error" className={css.validError} />
      <div className={css.errorMessage}>{message}</div>
    </>
  ) : !email.emailError ? (
    <img src={validCorrect} alt="Correct" className={css.validCorrect} />
  ) : (
    ''
  );
};


export const cssValidEmail = inputName => {
  const email = inputName;
  return `${css.input}${
    email.isDirty && email.emailError ? ` ${css.inputError}` : ''
  }${!email.emailError ? ` ${css.inputValid}` : ''}`;
};