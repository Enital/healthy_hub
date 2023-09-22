import bodyParametersIMG from './../../images/img/illustration-body-parameters.svg';
import css from './YourHealth.module.css';
import { useInput } from '../../hooks/useValidationForm';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import validCorrect from '../../images/icons/validCorrect.svg';
import validError from '../../images/icons/validError.svg';

function YourHealth({ onForm, onBackPage, heightValue, weightValue }) {
  const height = useInput(heightValue, {
    isEmpty: true,
    minLength: 2,
    maxLength: 3,
  });
  const weight = useInput(weightValue, {
    isEmpty: true,
    minLength: 2,
    maxLength: 3,
  });
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={bodyParametersIMG}
        alt="illustration-gender-and-age"
      />
      <div className={css.content}>
        <h1 className={css.title}>Body parameters</h1>
        <h2 className={css.subtitle}>
          Enter your parameters for correct performance tracking
        </h2>
        <form className={css.form} onSubmit={onForm}>
          <label className={css.label}>
            {/* {height.isDirty &&
              height.maxLengthError &&
              Notify.failure('Max 4 characters')}
            {height.isDirty &&
              height.minLengthError &&
              Notify.failure('Min 2 characters')}
            {height.isDirty &&
              height.isEmpty &&
              Notify.failure('The field cannot be empty')} */}
             <p className={css.heightLabel}>Height</p>
            <input
              className={`${css.input}${
                (height.isDirty && height.maxLengthError) ||
                (height.isDirty && height.minLengthError) ||
                (height.isDirty && height.isEmpty)
                  ? ` ${css.inputError}`
                  : !height.maxLengthError && !height.minLengthError
                  ? ` ${css.inputValid}`
                  : ''
              }`}
              type="number"
              name="height"
              placeholder="Enter your height (in cm)"
              value={height.value}
              onChange={e => height.onChange(e)}
              onBlur={e => height.onBlur(e)}
              required
            />
            {(height.isDirty && height.maxLengthError) ||
            (height.isDirty && height.minLengthError) ||
            (height.isDirty && height.isEmpty) ? (
              <>
                <img src={validError} alt="Error" className={css.validError} />
                <div className={css.errorMessage}>Not valid height*</div>
              </>
            ) : !height.maxLengthError && !height.minLengthError ? (
              <img
                src={validCorrect}
                alt="Correct"
                className={css.validCorrect}
              />
            ) : (
              ''
            )}
          </label>
          <label className={css.label}>
            {/* {weight.isDirty &&
              weight.maxLengthError &&
              Notify.failure('Max 4 characters')}
            {weight.isDirty &&
              weight.minLengthError &&
              Notify.failure('Min 2 characters')}
            {weight.isDirty &&
              weight.isEmpty &&
              Notify.failure('The field cannot be empty')} */}
             <p className={css.weightLabel}>Weight</p>
            <input
              className={`${css.input}${
                (weight.isDirty && weight.maxLengthError) ||
                (weight.isDirty && weight.minLengthError) ||
                (weight.isDirty && weight.isEmpty)
                  ? ` ${css.inputError}`
                  : !weight.maxLengthError && !weight.minLengthError
                  ? ` ${css.inputValid}`
                  : ''
              }`}
              type="number"
              name="weight"
              placeholder="Enter weightyour weight (in kg)"
              value={weight.value}
              onChange={e => weight.onChange(e)}
              onBlur={e => weight.onBlur(e)}
              required
            />
            {(weight.isDirty && weight.maxLengthError) ||
            (weight.isDirty && weight.minLengthError) ||
            (weight.isDirty && weight.isEmpty) ? (
              <>
              <img src={validError} alt="Error" className={css.validError} />
              <div className={css.errorMessage}>Not valid weight*</div>
            </>
            ) : !weight.maxLengthError && !weight.minLengthError ? (
              <img
                src={validCorrect}
                alt="Correct"
                className={css.validCorrect}
              />
            ) : (
              ''
            )}
          </label>
          <button
            className={css.NextBtn}
            type="submit"
            disabled={!height.inputValid || !weight.inputValid}
          >
            Next
          </button>
          <button className={css.BackBtn} onClick={onBackPage} type="button">
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default YourHealth;
