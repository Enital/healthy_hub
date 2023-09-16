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
  const [gender, setGender] = useState('Female');
  const [age, setAge] = useState(28);
  const [height, setHeight] = useState(173);
  const [weight, setWeight] = useState(60);
  const [activity, setActivity] = useState(1.725);
  const [goal, setGoal] = useState('Maintain');

  const haldleForm1 = event => {
    console.log(event);
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    nextPage();
  };
  const haldleForm2 = event => {
    console.log(event);
    event.preventDefault();
    nextPage();
  };
  const haldleForm3 = event => {
    console.log(event);
    event.preventDefault();
    nextPage();
  };
  const haldleForm4 = event => {
    console.log(event);
    event.preventDefault();
    nextPage();
  };
  const haldleForm5 = event => {
    console.log(event);
    event.preventDefault();
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
          onForm={haldleForm5}
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
