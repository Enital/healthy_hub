import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsPageImg from './../../images/img/illustration-interactive-learning-experience.svg';
import css from './settingsPage.module.css';
import inboxIMG from '../../images/icons/inbox.svg';

import { useDispatch } from 'react-redux';
import { useAuth } from 'redux/auth/useAuth';
import { updateAvatar, updateUser } from 'redux/auth/operations';

function Settings() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.name,
    age: user.age,
    height: user.height,
    weight: user.weight,
    gender: user.gender,
    activity: Number(user.activity),
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = e => {
    e.preventDefault();
    dispatch(updateUser(formData));
    navigate('/healthy-hub');
  };

  const handleCancel = e => {
    e.preventDefault();
    navigate('/healthy-hub');
  };
  // avatar //
  const filePicker = useRef(null);
  // const [selectedFile, setselectedFile] = useState(null);

  const hadleFileChange = e => {
    e.preventDefault();
    // setselectedFile(e.target.files[0]);
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }
    console.log(selectedFile);
    const formFile = new FormData();
    formFile.append('file', selectedFile);
    dispatch(updateAvatar(formFile));
  };

  const handlePick = () => {
    filePicker.current.click();
  }; // avatar //

  return (
    <div className="container">
      <div className={css.trumb}>
        <h1 className={css.title}>Profile setting</h1>
        <div className={css.buttonsDeck}>
          <button className={css.settingsSaveBTN} onClick={handleSave}>
            <p className={css.settingsButtonSAVEText}>Save</p>
          </button>
          <button className={css.settingsCancelBTN} onClick={handleCancel}>
            <p className={css.settingsButtonCANCELEDText}>Cancel</p>
          </button>
        </div>
      </div>
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={SettingsPageImg}
          alt="illustration interactive learning experience"
        />
        <form className={css.profileForm}>
          <div className={css.settingsInputs}>
            <div className={css.downLoad}>
              <p className={css.settingsStats}>Your name</p>
              <input
                name="name"
                placeholder="Enter your name"
                type="text"
                className={css.inputText}
                value={formData.name}
                onChange={handleInputChange}
                autoComplete='off'
              />
            </div>
            <div>
              <p className={css.settingsStats}>Your photo</p>
              <div>
                <div className={css.settingsDownloadPhoto}>
                  <img
                    className={css.photo}
                    src={user.avatar}
                    alt="avatar"
                    width="36"
                    height="36"
                  />
                  <div onClick={handlePick}>
                    <img src={inboxIMG} alt="box" width="16" height="16" />{' '}
                    Download new photo
                  </div>
                  <input
                    className="hidden-element"
                    type="file"
                    onChange={hadleFileChange}
                    accept="image/*"
                    ref={filePicker}
                  />
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
                autoComplete='off'
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
                autoComplete='off'
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
                autoComplete='off'
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
                checked={String(formData.activity) === '1.2'}
                onChange={handleInputChange}
              />
              <p className={css.pForAcrivity}>1.2 - if you do not have physical activity and sedentary work</p>
            </div>
            <div className={css.radioSettings}>
              <input
                type="radio"
                name="activity"
                value={1.375}
                checked={String(formData.activity) === '1.375'}
                onChange={handleInputChange}
              />
       <p className={css.pForAcrivity}>1,375 - if you do short runs or light gymnastics 1-3 times a week</p>
            </div>
            <div className={css.radioSettings}>
              <input
                type="radio"
                name="activity"
                value={1.55}
                checked={String(formData.activity) === '1.55'}
                onChange={handleInputChange}
              />
              <p className={css.pForAcrivity}>1.55 - if you play sports with average loads 3-5 times a week</p>
            </div>
            <div className={css.radioSettings}>
              <input
                type="radio"
                name="activity"
                value={1.725}
                checked={String(formData.activity) === '1.725'}
                onChange={handleInputChange}
              />
             <p className={css.pForAcrivity}> 1,725 - if you train fully 6-7 times a week</p>
            </div>
            <div className={css.radioSettings}>
              <input
                type="radio"
                name="activity"
                value={1.9}
                checked={String(formData.activity) === '1.9'}
                onChange={handleInputChange}
              />
              <p className={css.pForAcrivity}>
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </p>
            </div>
          </div>
          <div className={css.buttons}>
            <button className={css.settingsSaveBTN} onClick={handleSave}>
              <p className={css.settingsButtonSAVEText}>Save</p>
            </button>
            <button className={css.settingsCancelBTN} onClick={handleCancel}>
              <p className={css.settingsButtonCANCELEDText}>Cancel</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
