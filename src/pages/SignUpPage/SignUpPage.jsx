import SignUpForm from 'components/SignUpForm/SignUpForm';
import YourGoal from 'components/SelectGenderAge/SelectGenderAge';
import SelectGenderAge from 'components/SelectGenderAge/SelectGenderAge';
import YourHealth from 'components/YourHealth/YourHealth';
import YourActivity from 'components/YourActivity/YourActivity';

const SignUpPage = () => {
  return (
    <div className="container">
      <SignUpForm />
      <YourGoal />
      <SelectGenderAge />
      <YourHealth />
      <YourActivity />
    </div>
  );
};

export default SignUpPage;
