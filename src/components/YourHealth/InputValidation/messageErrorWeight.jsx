import validCorrect from '../../../images/icons/validCorrect.svg';
import validError from '../../../images/icons/validError.svg';
import css from '../YourHealth.module.css';

export const messageErrorWeight = (inputName, message) => {
  const weight = inputName;
  return (weight.isDirty && weight.maxLengthError) ||
    (weight.isDirty && weight.minLengthError) ||
    (weight.isDirty && weight.isEmpty) ? (
    <>
      <img src={validError} alt="Error" className={css.validError} />
      <div className={css.errorMessage}>{message}</div>
    </>
  ) : !weight.maxLengthError && !weight.minLengthError ? (
    <img src={validCorrect} alt="Correct" className={css.validCorrect} />
  ) : (
    ''
  );
};

export const cssValidWeight = inputName => {
  const weight = inputName;
  return `${css.input}${
    (weight.isDirty && weight.maxLengthError) ||
    (weight.isDirty && weight.minLengthError) ||
    (weight.isDirty && weight.isEmpty)
      ? ` ${css.inputError}`
      : !weight.maxLengthError && !weight.minLengthError
      ? ` ${css.inputValid}`
      : ''
  }`;
};
