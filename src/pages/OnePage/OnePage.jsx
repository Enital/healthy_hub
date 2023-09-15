import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';

import css from './OnePage.module.css';

const OnePage = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={SportAndFitnessTrackerIMG}
          alt="illustration-sport-and-fitness-tracker"
        />
        <div className={css.content}>
          <h1 className={css.title}>Set goals and achieve them</h1>
          <h2 className={css.subtitle}>
            The service will help you set goals and follow them.
          </h2>
          <ul className={css.navigation}>
            <li>
              <NavLink className={css.signinBtn} to="/signin">
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink className={css.signupBtn} to="/signup">
                Sign up
              </NavLink>
            </li>
          </ul>
          <ul className={css.advantages}>
            <li className={css.advantageLi}>
              <p className={css.advantage}>Set goals</p>
            </li>
            <li className={css.advantageLi}>
              <p className={css.advantage}>Watch your calories</p>
            </li>
            <li className={css.advantageLi}>
              <p className={css.advantage}>Keep track of your water intake</p>
            </li>
            <li className={css.advantageLi}>
              <p className={css.advantage}>Control your weight</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnePage;
