import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SettingsPageImg from './../../images/img/illustration-interactive-learning-experience.svg';
import axios from 'axios';
import css from './settingsPage.module.css';

function Settings() {
  // const location = useLocation();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // // const [photo, setPhoto] = useState('');
  // const [height, setHeight] = useState('');
  // const [weight, setWeight] = useState('');
  // const [gender, setGender] = useState('');
  // const [activity, setActivity] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    activity: ''
  });

  const token = useSelector(state => state.auth.token);
  // console.log(token);

  // useEffect ((e) => {
  //   console.log(e.target.name);
  // }, [name])

  useEffect(() => {
    // Отримати дані при завантаженні компонента
    axios.get('https://goit-healthy-hub.onrender.com/api/auth/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const jsonData = response.data;
      setFormData({
        name: jsonData.name,
        age: jsonData.age,
        height: jsonData.height,
        weight: jsonData.weight,
        gender: jsonData.gender,
        activity: jsonData.activity,
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, [token]);

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name] : value
    }));
  };

  const handleSave = (e) => {
    axios.patch('https://goit-healthy-hub.onrender.com/api/auth/settings', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log('Data updated Succesfully:', response.data);
    })
    .catch(error => console.error('Error updating data',error))
  }

  // function updateData(data){

  // }

  return (
    <div className={css.container}>
      <p className={css.profileSettings}>Profile setting</p>
      <div className={css.dmcx}>

        {/* <div className={css.photo}></div> 
      */}
        <img src={SettingsPageImg} className={css.photo} alt='SettingsPagePhoto' />
      </div>
      <form className={css.profileForm}>
        <div className={css.settingsInputs}>
          <div>
            <p className={css.settingsStats}>Your name</p>
            <input
              name="name"
              placeholder="Enter your name"
              type="text"
              className={css.inputText}
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.age}
              onChange={handleInputChange}
             
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
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                <p>Male</p>
              </div>
              <div className={css.gender}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
         
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
              value={formData.height}
              onChange={handleInputChange}
             
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
              value={formData.weight}
              onChange={handleInputChange}
             
              onKeyDown={e => {
              
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
              value={1.2}
              checked={formData.activity === 1.2} // Перевірка, чи це обрана активність
              onChange={handleInputChange}
             
            />{' '}
            1.2 - if you do not have physical activity and sedentary work
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={1.375}
              checked={formData.activity === 1.375} 
              onChange={handleInputChange}
              
            />{' '}
            1,375 - if you do short runs or light gymnastics 1-3 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={1.55}
              checked={formData.activity === 1.55}
              onChange={handleInputChange}
              
            />{' '}
            1.55 - if you play sports with average loads 3-5 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={1.725}
              checked={formData.activity === 1.725} 
              onChange={handleInputChange}
             
            />{' '}
            1,725 ​​- if you train fully 6-7 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={1.9}
              checked={formData.activity === 1.9} 
              onChange={handleInputChange}
              
            />{' '}
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </div>
        </div>
        <div className={css.buttons}>
          <button className={css.settingsSaveBTN} >
            <p onClick={handleSave} className={css.settingsButtonSAVEText}>Save</p>
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

  // PATCH https://goit-healthy-hub.onrender.com/api/auth/settings

  // useEffect => (() => {
  //   axios.get('https://goit-healthy-hub.onrender.com/auth/current').then((res) => console.log(res)).catch((err) => console.log(err));
  // }, [])

  // const token = useSelector(state => state.auth.token);


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

    // const [savedName, setSavedName] = useState("");
  // const [savedAge, setSavedAge] = useState("");
  // const [savedActivity, setSavedActivity] = useState("");
  // const [savedHeight, setSavedHeight] = useState("");
  // const [savedWeight, setSavedWeight] = useState("");
  // const [savedGender, setSavedGender] = useState("");

  // useEffect => (() => {
  //   console.log(location);
  // }, [])
  // console.log(location);

  // useEffect => (() => {
  //   console.log(location);
  // setAge(location.state.age);
  // setName(location.state.name);
  // setWeight(location.state.weight);
  // setHeight(location.state.height);
  // // }, [])