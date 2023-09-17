import bodyParametersIMG from './../../images/img/illustration-body-parameters.svg';
import css from './YourHealth.module.css';

function YourHealth({ onForm, onBackPage }) {
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
            Height
            <input
              className={css.input}
              type="text"
              name="height"
              placeholder="Enter your height"
            />
          </label>
          <label className={css.label}>
            Weight
            <input
              className={css.input}
              type="text"
              name="weight"
              placeholder="Enter your weight"
            />
          </label>
          <button className={css.NextBtn} type="submit">
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
