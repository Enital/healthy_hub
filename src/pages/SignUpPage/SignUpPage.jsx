import SignUpForm from 'components/SignUpForm/SignUpForm';
import SportAndFitnessTrackerIMG from './../../images/img/illustration-sport-and-fitness-tracker.svg';
import { NavLink } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="container">
      <img
        src={SportAndFitnessTrackerIMG}
        alt="illustration-sport-and-fitness-tracker"
      />
      <div>
        <h1>Sign up</h1>
        <h2>You need to register to use the service</h2>
      </div>
      <SignUpForm></SignUpForm>
      <p> Do you already have an account?</p>
      <NavLink to="/signin">Sign in</NavLink>
    </div>
  );
};

export default SignUpPage;
