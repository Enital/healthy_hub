import { NavLink } from 'react-router-dom';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';

const OnePage = () => {
  return (
    <div>
      <img
        src={SportAndFitnessTrackerIMG}
        alt="illustration-sport-and-fitness-tracker"
      />
      <div>
        <h1>Set goals and achieve them</h1>
        <h2>The service will help you set goals and follow them.</h2>
        <ul>
          <li>
            <NavLink to="/signin">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
        <ul>
          <p>Set goals</p>
        </ul>
        <ul>
          <p>Watch your calories</p>
        </ul>
        <ul>
          <p>Keep track of your water intake</p>
        </ul>
        <ul>
          <p>Control your weight</p>
        </ul>
      </div>
    </div>
  );
};

export default OnePage;
