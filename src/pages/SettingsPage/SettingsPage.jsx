import React, { useState } from 'react';

// useLocation, useEffect

import css from './settingsPage.module.css';

function Settings() {
  // const location = useLocation();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // const [photo, setPhoto] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [activity, setActivity] = useState('');

  // const [savedName, setSavedName] = useState("");
  // const [savedAge, setSavedAge] = useState("");
  // const [savedActivity, setSavedActivity] = useState("");
  // const [savedHeight, setSavedHeight] = useState("");
  // const [savedWeight, setSavedWeight] = useState("");
  // const [savedGender, setSavedGender] = useState("");

  // useEffect => (() => {
  //   console.log(location);
  // setAge(location.state.age);
  // setName(location.state.name);
  // setWeight(location.state.weight);
  // setHeight(location.state.height);
  // // }, [])

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleAgeChange = e => {
    setAge(e.target.value);
  };

  const handleHeightChange = e => {
    setHeight(e.target.value);
  };

  const handleWeightChange = e => {
    setWeight(e.target.value);
  };

  const handleActivityChange = e => {
    setActivity(e.target.value);
  };

  const handleGenderChange = e => {
    setGender(e.target.value);
  };

  const handleSave = e => {
    e.preventDefault();

    // Збереження ім'я та вік
    // setSavedName(name);
    // setSavedAge(age);
    // setSavedActivity(activity);
    // setSavedGender(gender);
    // setSavedHeight(height);
    // setSavedWeight(weight);

    // // Очищення полів форми
    // setName("");
    // setAge("");
    // setHeight('');
    // setWeight('');
  };

  // updateData = () => {
  //   console.log(name, age, height, weight);
  //   fetch('http://...'), {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: location.state_.id,
  //       name: name,
  //       age: age,
  //       weight: weight,
  //       height: height,
  //     }),
  //   }
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     // window.location.href    і посилання куда там треба
  //   })
  // }

  return (
    <div className={css.container}>
      <p className={css.profileSettings}>Profile setting</p>
      <div className={css.photo}></div>
      <form className={css.profileForm}>
        <div className={css.settingsInputs}>
          <div>
            <p className={css.settingsStats}>Your name</p>
            <input
              name="name"
              placeholder="Enter your name"
              type="text"
              className={css.inputText}
              defaultValue={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <p className={css.settingsStats}>Your photo</p>
            <div>
              <div className={css.settingsDownloadPhoto}>
                <p>p</p>
                {/* <input onChange={(e) => setImage(e.target.files)} type="file" /> */}
              </div>
            </div>
          </div>
          <div>
            <p className={css.settingsStats}>Your age</p>
            <input
              type="text"
              name="age"
              placeholder="Enter your age"
              className={css.inputText}
              defaultValue={age}
              onChange={handleAgeChange}
              onKeyDown={e => {
                // Дозволити тільки цифри та клавіші видалення (Backspace, Delete)
                if (
                  !/^\d*$/.test(e.target.value + e.key) &&
                  e.key !== 'Backspace' &&
                  e.key !== 'Delete'
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div>
            <p className={css.settingsStats}>Gender</p>
            <div className={css.settingsGenders}>
              <div className={css.gender}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'} // Перевірка, чи це обрана активність
                  onChange={handleGenderChange}
                />
                <p>Male</p>
              </div>
              <div className={css.gender}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'} // Перевірка, чи це обрана активність
                  onChange={handleGenderChange}
                />
                <p>Female</p>
              </div>
            </div>
          </div>
          <div>
            <p className={css.settingsStats}>Height</p>
            <input
              type="text"
              name="height"
              placeholder="Enter your height"
              className={css.inputText}
              defaultValue={height}
              onChange={handleHeightChange}
              onKeyDown={e => {
                // Дозволити тільки цифри та клавіші видалення (Backspace, Delete)
                if (
                  !/^\d*$/.test(e.target.value + e.key) &&
                  e.key !== 'Backspace' &&
                  e.key !== 'Delete'
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div>
            <p className={css.settingsStats}>Weight</p>
            <input
              type="text"
              name="weight"
              placeholder="Enter your weight"
              className={css.inputText}
              defaultValue={weight}
              onChange={handleWeightChange}
              onKeyDown={e => {
                // Дозволити тільки цифри та клавіші видалення (Backspace, Delete)
                if (
                  !/^\d*$/.test(e.target.value + e.key) &&
                  e.key !== 'Backspace' &&
                  e.key !== 'Delete'
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
        </div>
        <div className={css.settingActivity}>
          <p>Your activity</p>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value="1.2"
              checked={activity === '1.2'} // Перевірка, чи це обрана активність
              onChange={handleActivityChange}
            />{' '}
            1.2 - if you do not have physical activity and sedentary work
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value="1.375"
              checked={activity === '1.375'} // Перевірка, чи це обрана активність
              onChange={handleActivityChange}
            />{' '}
            1,375 - if you do short runs or light gymnastics 1-3 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value="1.55"
              checked={activity === '1.55'} // Перевірка, чи це обрана активність
              onChange={handleActivityChange}
            />{' '}
            1.55 - if you play sports with average loads 3-5 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value="1.725"
              checked={activity === '1.725'} // Перевірка, чи це обрана активність
              onChange={handleActivityChange}
            />{' '}
            1,725 ​​- if you train fully 6-7 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value="1.9"
              checked={activity === '1.9'} // Перевірка, чи це обрана активність
              onChange={handleActivityChange}
            />{' '}
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </div>
        </div>
        <div>
          {/* test data */}
          {/* <p className='profile-name'>My name is {savedName}</p>
          <p>My photo is <img src='logo192.png' className='photo-test' alt='my photo' /></p>
          <p>my age is {savedAge}</p>
          <p>Gender: {savedGender}</p>
          <p>My height is {savedHeight}</p>
          <p>My weight is {savedWeight}</p>
          <p>My activity is {savedActivity}</p> */}
        </div>
        <div className={css.buttons}>
          <button className={css.settingsSaveBTN} onClick={handleSave}>
            <p className={css.settingsButtonSAVEText}>Save</p>
          </button>
          <button className={css.settingsCancelBTN}>
            <p className={css.settingsButtonCANCELEDText}>Cancel</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
