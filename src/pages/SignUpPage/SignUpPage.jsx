import SignUpForm from 'components/SignUpForm/SignUpForm';
import YourGoal from 'components/YourGoal/SelectGenderAge';
import SelectGenderAge from 'components/YourGoal/SelectGenderAge';

const SignUpPage = () => {
  return (
    <div className="container">
      {/* <SignUpForm /> */}
      {/* <YourGoal /> */}
      <SelectGenderAge />
    </div>
  );
};

export default SignUpPage;
