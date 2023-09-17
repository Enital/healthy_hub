import SignUpForm from 'components/SignUpForm/SignUpForm';
import YourGoal from 'components/YourGoal/YourGoal';
import SelectGenderAge from 'components/SelectGenderAge/SelectGenderAge';
import YourHealth from 'components/YourHealth/YourHealth';
import YourActivity from 'components/YourActivity/YourActivity';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
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
  const [activity2, setActivity] = useState('1.2');

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

  const dispatch = useDispatch();

  const handleSubmit5 = event => {
    event.preventDefault();
    setActivity(event.target.activity.value);
    const form = event.currentTarget;
    const activity = Number(activity2)
    dispatch(
      register({
        name,
        email,
        password,
        gender,
        age,
        height,
        weight,
        activity,
        goal,
      })
    );
    form.reset();
  };
  return (
    <div className="container">
      {page === 1 && <SignUpForm onForm={haldleForm1} />}
      {page === 2 && <YourGoal onForm={haldleForm2} goal={goal} />}
      {page === 3 && (
        <SelectGenderAge
          onForm={haldleForm3}
          onBackPage={backPage}
          gender={gender}
          age={age}
        />
      )}
      {page === 4 && (
        <YourHealth
          onForm={haldleForm4}
          onBackPage={backPage}
          height={height}
          weight={weight}
        />
      )}
      {page === 5 && (
        <YourActivity
          onBackPage={backPage}
          onForm={handleSubmit5}
          activity={activity2}
        />
      )}
    </div>
  );
};

export default SignUpPage;
