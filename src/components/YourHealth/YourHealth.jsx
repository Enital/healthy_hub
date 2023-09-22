import bodyParametersIMG from './../../images/img/illustration-body-parameters.svg';
import css from './YourHealth.module.css';
import { useInput } from '../../hooks/useValidationForm';
import { messageErrorHeight } from './InputValidation/messageErrorHeight';
import { messageErrorWeight } from './InputValidation/messageErrorWeight';
import { cssValidWeight } from './InputValidation/messageErrorWeight';
import { cssValidHeight } from './InputValidation/messageErrorHeight';
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
            <p className={css.heightLabel}>Height</p>
            <input
              className={cssValidHeight(height)}
              type="number"
              name="height"
              placeholder="Enter your height (in cm)"
              value={height.value}
              onChange={e => height.onChange(e)}
              onBlur={e => height.onBlur(e)}
              required
            />
            {messageErrorHeight(height, 'Not valid height*')}
          </label>
          <label className={css.label}>
            <p className={css.weightLabel}>Weight</p>
            <input
              className={cssValidWeight(weight)}
              type="number"
              name="weight"
              placeholder="Enter your weight (in kg)"
              value={weight.value}
              onChange={e => weight.onChange(e)}
              onBlur={e => weight.onBlur(e)}
              required
            />
            {messageErrorWeight(weight, 'Not valid weight*')}
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
