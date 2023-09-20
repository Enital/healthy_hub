import bodyParametersIMG from './../../images/img/illustration-body-parameters.svg';
import css from './YourHealth.module.css';
import { useInput } from '../../hooks/useValidationForm';
function YourHealth({ onForm, onBackPage }) {
  const height = useInput('', { isEmpty: true, minLength: 1, maxLength: 3 });
  const weight = useInput('', { isEmpty: true, minLength: 1, maxLength: 3 });
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
        {height.isDirty && height.isEmpty && (
              <div style={{ color: 'red' }}>Поле не може бути пустим</div>
            )}
            {height.isDirty && height.maxLengthError && (
              <div style={{ color: 'red' }}>має біти максимум 4 символи</div>
            )}
            {height.isDirty && height.minLengthError && (
              <div style={{ color: 'red' }}>має біти максимум 4 символи</div>
            )}
          <label className={css.label}>
            Height
            <input
              className={css.input}
              type="number"
              name="height"
              placeholder="Enter your height (in cm)"
              value={height.value}
              onChange={e => height.onChange(e)}
              onBlur={e => height.onBlur(e)}
              required
            />
          </label>
          {weight.isDirty && weight.isEmpty && (
              <div style={{ color: 'red' }}>Поле не може бути пустим</div>
            )}
            {weight.isDirty && weight.maxLengthError && (
              <div style={{ color: 'red' }}>має біти максимум 4 символи</div>
            )}
            {weight.isDirty && weight.minLengthError && (
              <div style={{ color: 'red' }}>має біти максимум 4 символи</div>
            )}
          <label className={css.label}>
            Weight
            <input
              className={css.input}
              type="number"
              name="weight"
              placeholder="Enter your weight (in kg)"
              value={weight.value}
              onChange={e => weight.onChange(e)}
              onBlur={e => weight.onBlur(e)}
              required
            />
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
