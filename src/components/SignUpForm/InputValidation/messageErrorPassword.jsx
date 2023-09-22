// import validCorrect from '../../../images/icons/validCorrect.svg';
// import validError from '../../../images/icons/validError.svg';
import css from '../SignUpForm.module.css';

export const messageErrorPassword = (
  inputName,
  messageError,
  messageCorrect
) => {
  const password = inputName;
  return (password.isDirty && password.passwordError) ||
    (password.isDirty && password.isEmpty) ? (
    <>
      {/* <img src={validError} alt="Error" className={css.validError} /> */}
      <div className={css.errorMessage}>{messageError}</div>
    </>
  ) : !password.passwordError ? (
    <>
      {/* <img
        src={validCorrect}
        alt="Correct"
        className={css.validCorrect}
      /> */}
      <div className={css.correctMessage}>{messageCorrect}</div>
    </>
  ) : (
    ''
  );
};

export const cssValidPassword = inputName => {
  const passwordInputName = inputName;
  return `${css.input}${
    passwordInputName.isDirty && passwordInputName.passwordError ? ` ${css.inputError}` : ''
  }${!passwordInputName.passwordError ? ` ${css.inputValid}` : ''}`;
};