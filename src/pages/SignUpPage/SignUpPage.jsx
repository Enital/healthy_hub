import SignUpForm from 'components/SignUpForm/SignUpForm';
import YourGoal from 'components/YourGoal/YourGoal';
import SelectGenderAge from 'components/SelectGenderAge/SelectGenderAge';
import YourHealth from 'components/YourHealth/YourHealth';
import YourActivity from 'components/YourActivity/YourActivity';
import { useDispatch } from 'react-redux';
import { register, checkingRegistered } from 'redux/auth/operations';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
Notify.init({
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'from-bottom',
  clickToClose: true,
  messageMaxLength: 200,
  timeout: 5000,
  width: '300px',
});
const SignUpPage = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(page + 1);
  const backPage = () => setPage(page - 1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('Lose fat');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity2, setActivity] = useState('1.2');

  const haldleForm1 = event => {
    event.preventDefault();
    setName(event.target.name.value);
    const updatedEmail = event.target.email.value;
    setEmail(updatedEmail);
    setPassword(event.target.password.value);
    dispatch(checkingRegistered({ email: updatedEmail })).then(result => {
      if (result.payload.message === 'User not found') {
        nextPage();
      } else {
        Notify.failure('There is already a user with such e-mail');
      }
    });
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
    ).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        Notify.success(`Hi, ${name}! Let's do this!`);
      }
    });
    form.reset();
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
          setActivity={setActivity}
        />
      )}
      <ProgressBar page={page} setPage={setPage} />
    </div>
  );
};

export default SignUpPage;
