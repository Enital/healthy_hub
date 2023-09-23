import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SettingsPageImg from './../../images/img/illustration-interactive-learning-experience.svg';
import axios from 'axios';
import css from './settingsPage.module.css';

function Settings() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    activity: ''
  });

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    axios.patch('https://goit-healthy-hub.onrender.com/api/auth/settings', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Data updated Successfully:', response.data);
          console.log('formData after save:', formData); // Додайте цей рядок
      })
      .catch(error => console.error('Error updating data', error))
  }

  return (
    <div className={css.container}>
      <p className={css.profileSettings}>Profile setting</p>
      <div className={css.dmcx}>
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
              value={'1.2'}
              checked={formData.activity === "1.2"}
              onChange={handleInputChange}
            />{' '}
            1.2 - if you do not have physical activity and sedentary work
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={'1.375'}
              checked={formData.activity === "1.375"}
              onChange={handleInputChange}
            />{' '}
            1,375 - if you do short runs or light gymnastics 1-3 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={'1.55'}
              checked={formData.activity === "1.55"}
              onChange={handleInputChange}
            />{' '}
            1.55 - if you play sports with average loads 3-5 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={'1.725'}
              checked={formData.activity === "1.725"}
              onChange={handleInputChange}
            />{' '}
            1,725 - if you train fully 6-7 times a week
          </div>
          <div className={css.radioSettings}>
            <input
              type="radio"
              name="activity"
              value={'1.9'}
              checked={formData.activity === "1.9"}
              onChange={handleInputChange}
            />{' '}
            <p>1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program</p>
          </div>
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
