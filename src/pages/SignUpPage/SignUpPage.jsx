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

  const [name, setName] = useState('Random Name');
  const [email, setEmail] = useState('email.com');
  const [password, setPassword] = useState('Qwerty+1234');
  const [gender, setGender] = useState('Female');
  const [age, setAge] = useState(28);
  const [height, setHeight] = useState(173);
  const [weight, setWeight] = useState(60);
  const [activity, setActivity] = useState(1.725);
  const [goal, setGoal] = useState('Maintain');

  return (
    <div className="container">
      {page === 1 && <SignUpForm onNextPage={nextPage} />}
      {page === 2 && <YourGoal onNextPage={nextPage} />}
      {page === 3 && (
        <SelectGenderAge onNextPage={nextPage} onBackPage={backPage} />
      )}
      {page === 4 && <YourHealth onNextPage={nextPage} onBackPage={backPage} />}
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
          activity={activity}
          goal={goal}
        />
      )}
    </div>
  );
};

export default SignUpPage;
