import SignUpForm from 'components/SignUpForm/SignUpForm';
import YourGoal from 'components/YourGoal/YourGoal';
import SelectGenderAge from 'components/SelectGenderAge/SelectGenderAge';
import YourHealth from 'components/YourHealth/YourHealth';
import YourActivity from 'components/YourActivity/YourActivity';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'from-bottom',
  clickToClose: true,
  messageMaxLength: 200,
});
const SignUpPage = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(page + 1);
  const backPage = () => setPage(page - 1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('lose');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity2, setActivity] = useState('1.2');

  const haldleForm1 = event => {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    nextPage();
  };
  const haldleForm2 = event => {
    console.log(event);
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
    const activity = Number(activity2);
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
    Notify.success(`Hi, ${name}! Let's do this!`);
  };

  return (
    <div className="container">
      {page === 1 && (
        <SignUpForm
          onForm={haldleForm1}
          nameValue={name}
          emailValue={email}
          passwordValue={password}
        />
      )}
      {page === 2 && (
        <YourGoal onForm={haldleForm2} onBackPage={backPage} goal={goal} />
      )}
      {page === 3 && (
        <SelectGenderAge
          onForm={haldleForm3}
          onBackPage={backPage}
          gender={gender}
          ageValue={age}
        />
      )}
      {page === 4 && (
        <YourHealth
          onForm={haldleForm4}
          onBackPage={backPage}
          heightValue={height}
          weightValue={weight}
        />
      )}
      {page === 5 && (
        <YourActivity
          onForm={handleSubmit5}
          onBackPage={backPage}
          activity={activity2}
        />
      )}
    </div>
  );
};

export default SignUpPage;
