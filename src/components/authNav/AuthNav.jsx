import { NavLink } from 'react-router-dom';
import profileCircleSvg from '../../images/icons/profile-circle.svg';
import css from './AuthNav.module.css';
const classLink = ({ isActive }) => (isActive ? css.active : css.link);

const AuthNav = () => {
  return (
    <div className={css.bgc}>
      <div className="container">
        <div className={css.wrapper}>
          <NavLink className={css.logo} to="/">
            HealthyHub
          </NavLink>
          <div className={css.list}>
            <div>
              <NavLink className={classLink} to="/signin">
                Sign in
              </NavLink>
              <span className={css.link}> / </span>
              <NavLink className={classLink} to="/signup">
                Sign up
              </NavLink>
            </div>
            <img
              className={css.img}
              src={profileCircleSvg}
              width="26"
              height="26"
              alt="profile circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthNav;
