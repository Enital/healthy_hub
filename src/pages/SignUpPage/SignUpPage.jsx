import SignUpForm from 'components/SignUpForm/SignUpForm';
import YourGoal from 'components/SelectGenderAge/SelectGenderAge';
import SelectGenderAge from 'components/SelectGenderAge/SelectGenderAge';

const SignUpPage = () => {
  return (
    <div className="container">
      <SignUpForm />
      <YourGoal />
      <SelectGenderAge />
    </div>
  );
};

export default SignUpPage;
