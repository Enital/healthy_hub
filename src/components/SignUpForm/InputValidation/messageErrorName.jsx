import validCorrect from '../../../images/icons/validCorrect.svg';
import validError from '../../../images/icons/validError.svg';
import css from '../SignUpForm.module.css';

export const messageErrorName = (inputName, message) => {
  const name = inputName;
  return (name.isDirty && name.nameError) || (name.isDirty && name.isEmpty) ? (
    <>
      <img src={validError} alt="Error" className={css.validError} />
      <div className={css.errorMessage}>{message}</div>
    </>
  ) : !name.nameError ? (
    <img src={validCorrect} alt="Correct" className={css.validCorrect} />
  ) : (
    ''
  );
};

export const cssValidName = inputName => {
  const name = inputName;
  return `${css.input}${
    name.isDirty && name.nameError ? ` ${css.inputError}` : ''
  }${!name.nameError ? ` ${css.inputValid}` : ''}`;
};
