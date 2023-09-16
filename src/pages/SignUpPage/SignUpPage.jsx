import SignUpForm from 'components/SignUpForm/SignUpForm';
import YourGoal from 'components/YourGoal/YourGoal';
import SelectGenderAge from 'components/SelectGenderAge/SelectGenderAge';
import YourHealth from 'components/YourHealth/YourHealth';
import YourActivity from 'components/YourActivity/YourActivity';

import { useState } from 'react';

const SignUpPage = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(page + 1);
  const backPage = () => setPage(page - 1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');

  const haldleForm1 = event => {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    nextPage();
  };
  const haldleForm2 = event => {
    event.preventDefault();
    setGoal(event.target.goal.value);
    nextPage();
  };
  const haldleForm3 = event => {
    event.preventDefault();
    setGender(event.target.gender.value);
    setAge(event.target.age.value);
    nextPage();
  };
  const haldleForm4 = event => {
    event.preventDefault();
    setHeight(event.target.height.value);
    setWeight(event.target.weight.value);
    nextPage();
  };

  return (
    <div className="container">
      {page === 1 && <SignUpForm onForm={haldleForm1} />}
      {page === 2 && <YourGoal onForm={haldleForm2} />}
      {page === 3 && (
        <SelectGenderAge onForm={haldleForm3} onBackPage={backPage} />
      )}
      {page === 4 && <YourHealth onForm={haldleForm4} onBackPage={backPage} />}
      {page === 5 && (
        <YourActivity
          onBackPage={backPage}
          name={name}
          email={email}
          password={password}
          gender={gender}
          age={age}
          height={height}
          weight={weight}
          goal={goal}
        />
      )}
    </div>
  );
};

export default SignUpPage;
