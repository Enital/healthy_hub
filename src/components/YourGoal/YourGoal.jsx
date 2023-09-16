import summerHikingIMG from './../../images/img/illustration-summer-hiking.svg';
import css from './YourGoal.module.css';

function YourGoal({ onNextPage }) {
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={summerHikingIMG}
        alt="illustration-summer-hiking"
      />
      <div className={css.content}>
        <h1 className={css.title}>Your goal</h1>
        <h2 className={css.subtitle}>
          Choose a goal so that we can help you effectively
        </h2>
        <form className={css.form}>
          <div className={css.wrappers}>
            <label className={css.label}>
              <input type="radio" name="goal" value="lose" defaultChecked />
              Lose Fat
            </label>
            <label className={css.label}>
              <input type="radio" name="goal" value="maintain" />
              Maintain
            </label>
            <label className={css.label}>
              <input type="radio" name="goal" value="gain" />
              Gain Muscle
            </label>
          </div>
          <button className={css.NextBtn} onClick={onNextPage}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default YourGoal;
