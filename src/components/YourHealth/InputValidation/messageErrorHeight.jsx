import validCorrect from '../../../images/icons/validCorrect.svg';
import validError from '../../../images/icons/validError.svg';
import css from '../YourHealth.module.css';

export const messageErrorHeight = (inputName, message) => {
  const height = inputName;
  return (height.isDirty && height.maxLengthError) ||
  (height.isDirty && height.minLengthError) ||
  (height.isDirty && height.isEmpty) ? (
    <>
      <img src={validError} alt="Error" className={css.validError} />
      <div className={css.errorMessage}>{message}</div>
    </>
  ) : !height.maxLengthError && !height.minLengthError ? (
    <img
      src={validCorrect}
      alt="Correct"
      className={css.validCorrect}
    />
  ) : (
    ''
  )
};

export const cssValidHeight = inputName => {
  const height = inputName;
  return `${css.input}${
    (height.isDirty && height.maxLengthError) ||
    (height.isDirty && height.minLengthError) ||
    (height.isDirty && height.isEmpty)
      ? ` ${css.inputError}`
      : !height.maxLengthError && !height.minLengthError
      ? ` ${css.inputValid}`
      : ''
  }`;
};