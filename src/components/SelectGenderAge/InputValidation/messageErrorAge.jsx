import validCorrect from '../../../images/icons/validCorrect.svg';
import validError from '../../../images/icons/validError.svg';
import css from '../SelectGenderAge.module.css';

export const messageErrorAge = (inputName, message) => {
  const age = inputName;
  return (age.isDirty && age.maxLengthError) ||
  (age.isDirty && age.minLengthError) ||
  (age.isDirty && age.isEmpty) ? (
    <>
      <img src={validError} alt="Error" className={css.validError} />
      <div className={css.errorMessage}>{message}</div>
    </>
  ) : !age.maxLengthError && !age.minLengthError ? (
    <img
      src={validCorrect}
      alt="Correct"
      className={css.validCorrect}
    />
  ) : (
    ''
  )
};
