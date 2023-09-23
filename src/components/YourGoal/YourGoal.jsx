import summerHikingIMG from './../../images/img/illustration-summer-hiking.svg';
import css from './YourGoal.module.css';
import { useState } from 'react';

function YourGoal({ onForm, onBackPage, goal }) {
  const [goalValue, setGoal] = useState(goal);
  const handleChangeGoal = e => {
    setGoal(e.target.value);
  };
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
        <form className={css.form} onSubmit={onForm}>
          <div className={css.wrappers}>
            <label className={css.label}>
              <input
                type="radio"
                name="goal"
                value="Lose fat"
                checked={goalValue === 'Lose fat'}
                onChange={handleChangeGoal}
              />
              Lose Fat
            </label>
            <label className={css.label}>
              <input
                type="radio"
                name="goal"
                value="Maintain"
                checked={goalValue === 'Maintain'}
                onChange={handleChangeGoal}
              />
              Maintain
            </label>
            <label className={css.label}>
              <input
                type="radio"
                name="goal"
                value="Gain muscle"
                checked={goalValue === 'Gain muscle'}
                onChange={handleChangeGoal}
              />
              Gain Muscle
            </label>
          </div>
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

export default YourGoal;
