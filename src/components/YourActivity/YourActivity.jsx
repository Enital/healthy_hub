import { NavLink } from 'react-router-dom';
import activityIMG from './../../images/img/illustration-activity.svg';
import css from './YourActivity.module.css';

function YourActivity() {
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
        <form className={css.form}>
          <div className={css.wrappers}>
            <label className={css.label}>
              <input type="radio" name="coefficient" value="1.2" />
              1.2 - if you do not have physical activity and sedentary work
            </label>
            <label className={css.label}>
              <input type="radio" name="coefficient" value="1,375" checked />
              1,375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
            <label className={css.label}>
              <input type="radio" name="coefficient" value="1.55" />
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
            <label className={css.label}>
              <input type="radio" name="coefficient" value="1,725" />
              1,725 ​​- if you train fully 6-7 times a week
            </label>
            <label className={css.label}>
              <input type="radio" name="coefficient" value="1.9" />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
          </div>
          <NavLink className={css.NextBtn} to="">
            Next
          </NavLink>
          <NavLink className={css.BackBtn} to="">
            Back
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default YourActivity;
