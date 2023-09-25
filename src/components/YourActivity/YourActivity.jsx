import activityIMG from './../../images/img/illustration-activity.svg';
import css from './YourActivity.module.css';


function YourActivity({ onBackPage, onForm, activity ,setActivity}) {

  const handleChangeActivity = e => {
    setActivity(e.target.value);
  };
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={activityIMG}
        alt="illustration-summer-hiking"
      />
      <div className={css.content}>
        <h1 className={css.title}>Your Activity</h1>
        <h2 className={css.subtitle}>
          To correctly calculate calorie and water intake
        </h2>
        <form className={css.form} onSubmit={onForm}>
          <div className={css.wrappers}>
            <label className={css.label}>
              <input
                type="radio"
                name="activity"
                value={1.2}
                checked={activity === '1.2'}
                onChange={handleChangeActivity}
              />
              1.2 - if you do not have physical activity and sedentary work
            </label>
            <label className={css.label}>
              <input
                type="radio"
                name="activity"
                value={1.375}
                checked={activity === '1.375'}
                onChange={handleChangeActivity}
              />
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
            <label className={css.label}>
              <input
                type="radio"
                name="activity"
                value={1.55}
                checked={activity === '1.55'}
                onChange={handleChangeActivity}
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
            <label className={css.label}>
              <input
                type="radio"
                name="activity"
                value={1.725}
                checked={activity === '1.725'}
                onChange={handleChangeActivity}
              />
              1.725 ​​- if you train fully 6-7 times a week
            </label>
            <label className={css.label}>
              <input type="radio" name="activity" value={1.9} />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>
          <button className={css.NextBtn} type="submit">
            Sign Up
          </button>
          <button className={css.BackBtn} onClick={onBackPage}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default YourActivity;
