import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import axios from 'axios';

import profileCircleSvg from '../../images/icons/profile-circle.svg';
import menuSvg from '../../images/icons/menu.svg';
import arrowRightSvg from '../../images/icons/arrow-right.svg';

import { logOut } from '../../redux/auth/operations';
// import { useAuth } from '../../redux/auth/useAuth';

import arrowDownSvg from '../../images/icons/arrow-down.svg';
import closeCircleSvg from '../../images/icons/close-circle.svg';
import edit2Svg from '../../images/icons/edit-2.svg';
import setting2Svg from '../../images/icons/setting-2.svg';
import logOutSvg from '../../images/icons/logout.svg';

import loseFatMenEmoji from '../../images/emoji/Lose fat image men.png';
import maintakeMenEmoji from '../../images/emoji/Maintake image men.png';
import gainMuscleEmoji from '../../images/emoji/Gain muscle.png';
import waightEmoji from '../../images/emoji/Waight image.png';

import css from './header.module.css';

function Header() {
  const dispatch = useDispatch();


  const [inputWeight, setInputWeight] = useState('');
  const [weight, setWeight] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');


  const [activeLink, setActiveLink] = useState(null);
  // const { user } = useAuth();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const date = new Date();
  const formatDate = format(date, 'dd.MM.yyyy');

  const [isModalGoalOpen, setIsModalGoalOpen] = useState(false);
  const [isModalWeightOpen, setIsModalWeightOpen] = useState(false);
  const [isModalUserOpen, setIsModalUserOpen] = useState(false);
  const [isModalMobileOpen, setIsModalMobileOpen] = useState(false);

  const handleClick = link => {
    setActiveLink(link);
  };
  

  // useEffect(() => {
  //   if (user && user.goal) {
  //     setSelectedGoal(user.goal);
  //     console.log(user.goal);
  //   }
  // }, [user]);

  const token = useSelector(state => state.auth.token);
  axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';

  async function getUser(token) {
    try {
      const res = await axios.get('/auth/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser(token)
      .then(data => {
        setWeight(data.weight);
        setAvatar(data.avatar);
        setGoal(data.goal);
        setName(data.name);
      })
      .catch(err => console.error('error:' + err));
  }, [token]);

  const handleGoalSelect = goalEmoji => {
    setSelectedGoal(goalEmoji);
  };

  const handleConfirmGoal = () => {
    if (!selectedGoal) {
      console.error('Ціль не обрана');
      return;
    }
    axios
      .patch('/user/goal', { goal: selectedGoal })
      .then(response => {
        closeModalGoal();
      })
      .catch(error => {
        console.error('Помилка при оновленні цілі', error);
      });
  };

  const handleChange = event => {
    setInputWeight(event.target.value);
  };

  const handleConfirm = () => {
    axios
      .put('/user/weight', { weight: inputWeight })
      .then(response => {
        setInputWeight('');
      })
      .catch(error => {
        console.error('Помилка при оновленні ваги:', error);
      });
  };


  const openModalGoal = () => {
    setIsModalGoalOpen(true);
    setIsModalWeightOpen(false); 
    setIsModalUserOpen(false);
    closeModalMobile();
  };

  const closeModalGoal = () => {
    setIsModalGoalOpen(false);
  };

  const openModalWeight = () => {
    setIsModalWeightOpen(true);
    setIsModalGoalOpen(false); 
    setIsModalUserOpen(false);
    closeModalMobile();
  };

  const closeModalWeight = () => {
    setIsModalWeightOpen(false);
  };

  const toggleModal = () => {
    setIsModalUserOpen(!isModalUserOpen);
    setIsModalGoalOpen(false); 
    setIsModalWeightOpen(false);
    closeModalMobile();
    
  };

  const closeModalUser = () => {
    setIsModalUserOpen(false);
  };

  const openModalMobile = () => {
    setIsModalMobileOpen(true);
    setIsModalUserOpen(false);
  };

  const closeModalMobile = () => {
    setIsModalMobileOpen(false);
  };

  // if (user && user.goal) {
  //   console.log(user.goal);
  // }

  return (
      <header className={css.header}>
        <Link to="/WelcomePage" className={css.link}>
          <h1 className={css.headline}>HealthyHub</h1>
        </Link>
        <div className={css.navigation}>
            <img src={menuSvg} alt='Menu svg' className={css.menuSvg} onClick={openModalMobile}/>

               { isModalMobileOpen && (
                
                  <div>

                    <div className={css.modalMobileContent}>
                        <img
                          src={closeCircleSvg}
                          alt="close modal svg"
                          onClick={closeModalMobile}
                          className={css.closeMobileSvg}
                        />
                            <img
                              src={waightEmoji}
                              alt="Waight Emoji"
                              className={css.waightEmojiMobile}
                              onClick={openModalWeight}
                           />
                          <div className={css.mobileWeightGoalContainer}>
                            <div className={css.weightSectionMobile} onClick={openModalWeight}>
                              <h3 className={css.headlineWeightMobile}>Weight</h3>
                              <div className={css.weightElementMobile}>
                                <p className={css.textWeightKgMobile}>{weight} kg</p>
                                <img src={edit2Svg} alt="edit weight" />
                              </div>
                            </div>
                            <div onClick={openModalGoal}>
                              <h3 className={css.headlineGoalMobile}>Goal</h3>
                              <img
                                src={arrowRightSvg}
                                alt="expend the list svg"
                                className={css.openarrowRightGoalSvgMobile}
                              />
                            </div>
                            {token && goal && (
                              <div>
                                {goal === 'Lose fat' && (
                                  <img
                                    src={loseFatMenEmoji}
                                    alt="Lose fat emoji"
                                    className={css.goalEmojiMobile}
                                    onClick={openModalGoal}
                                  />
                                )}
                                {goal === 'Maintain' && (
                                  <img
                                    src={maintakeMenEmoji}
                                    alt="Maintain emoji"
                                    className={css.goalEmojiMobile}
                                    onClick={openModalGoal}
                                  />
                                )}
                                {goal === 'Gain muscle' && (
                                  <img
                                    src={gainMuscleEmoji}
                                    alt="Gain Muscle emoji"
                                    className={css.goalEmojiMobile}
                                    onClick={openModalGoal}
                                  />
                                )}
                                <p className={css.goalChosenNameMobile} onClick={openModalGoal}>
                                  {goal}
                                </p>
                              </div>
                            )}
                            </div>
                    </div>
                    
                  </div>
               )}

          {isLoggedIn ? (
            <>
              <div className={css.authenticatedNav}>
                <div onClick={openModalGoal}>
                  <h3 className={css.headlineGoal}>Goal</h3>
                  <img
                    src={arrowDownSvg}
                    alt="expend the list svg"
                    className={css.openArrowDownGoalSvg}
                    onClick={openModalGoal}
                  />
                </div>
                {token && goal && (
                  <div>
                    {goal === 'Lose fat' && (
                      <img
                        src={loseFatMenEmoji}
                        alt="Lose fat emoji"
                        className={css.goalEmoji}
                        onClick={openModalGoal}
                      />
                    )}
                    {goal === 'Maintain' && (
                      <img
                        src={maintakeMenEmoji}
                        alt="Maintain emoji"
                        className={css.goalEmoji}
                        onClick={openModalGoal}
                      />
                    )}
                    {goal === 'Gain muscle' && (
                      <img
                        src={gainMuscleEmoji}
                        alt="Gain Muscle emoji"
                        className={css.goalEmoji}
                        onClick={openModalGoal}

                      />
                    )}
                    <p className={css.goalChosenName} 
                        onClick={openModalGoal}
                        >{goal}</p>
                  </div>
                )}
                


                {isModalGoalOpen && (
                  <div>
                    <div className={css.modalGoalContent}>
                      <img
                        src={closeCircleSvg}
                        alt="close modal svg"
                        onClick={closeModalGoal}
                        className={css.closeSvg}
                      />
                      <h3 className={css.headlineTarget}>Target selection</h3>
                      <p className={css.textUnderHeadlineTarget}>
                        The service will adjust your calorie intake to your goal
                      </p>
                      <div className={css.sectionChoiseGoal}>
                        <div
                          className={css.choiseTargetGoal}
                          onClick={() => handleGoalSelect('Lose fat')}
                        >
                          <img
                            src={loseFatMenEmoji}
                            alt="lose Fat Men Emoji"
                            className={css.emojiTargetGoal}
                          />
                          <p className={css.textEmojiGoal}>Lose fat</p>
                        </div>
                        <div
                          className={css.choiseTargetGoal}
                          onClick={() => handleGoalSelect('Maintain')}
                        >
                          <img
                            src={maintakeMenEmoji}
                            alt="Maintake Men Emoji"
                            className={css.emojiTargetGoal}
                          />
                          <p className={css.textEmojiGoal}>Maintain</p>
                        </div>
                        <div
                          className={css.choiseTargetGoal}
                          onClick={() => handleGoalSelect('Gain muscle')}
                        >
                          <img
                            src={gainMuscleEmoji}
                            alt="Gain Muscle Emoji"
                            className={css.emojiTargetGoal}
                          />
                          <p className={css.textEmojiGoal}>Gain Muscle</p>
                        </div>
                        <div>
                          <button
                            onClick={handleConfirmGoal}
                            className={css.modalGoalButton}
                          >
                            Confirm
                          </button>
                          <p className={css.cancel} onClick={closeModalGoal}>Cancel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}



                <img
                  src={waightEmoji}
                  alt="Waight Emoji"
                  className={css.waightEmoji}
                  onClick={openModalWeight}
                />
                <div className={css.weightSection} onClick={openModalWeight}>
                  <h3 className={css.headlineWeight}>Weight</h3>
                  
                  <div className={css.weightElement}>
                    <p className={css.textWeightKg}>{weight} kg</p>
                  <img
                    src={edit2Svg}
                    alt="expend the list svg"
                  />
                  </div>
                  
                </div>



                {isModalWeightOpen && (
                  <div>
                    <div className={css.modalWeightContent}>
                      <img
                        src={closeCircleSvg}
                        alt="close modal svg"
                        onClick={closeModalWeight}
                        className={css.closeSvg}
                      />
                      <h3 className={css.headlineEnter}>
                        Enter your current weight
                      </h3>
                      <div className={css.sectionContentWeight}>
                        <p className={css.textUnderHeadlineEnter}>
                          You can record your weight once a day
                        </p>
                        <div className={css.data}>
                          <p className={css.dataToday}>Today</p>
                          <p className={css.textToday}>{formatDate}</p>
                        </div>
                        <div>
                          <input
                            type="text"
                            id="weight"
                            name="weight"
                            value={inputWeight}
                            onChange={handleChange}
                            placeholder="Enter your weight"
                            pattern="\d*"
                            className={css.inputWeight}
                          />
                          <button
                            onClick={handleConfirm}
                            className={css.buttonWeightConfirm}
                          >
                            Confirm
                          </button>
                          <p className={css.cancelWeight} onClick={closeModalWeight}>Cancel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}



                <div className={css.infoUserContent} onClick={toggleModal}>
                  <span>{name}</span>
                  <img
                    src={avatar}
                    alt="User"
                    className={css.userProfileRegistration}
                  />
                  <img
                    src={arrowDownSvg}
                    alt="expend the list svg"
                    onClick={toggleModal}
                  />
                </div>



                {isModalUserOpen && (
                  <div>
                    <div className={css.modalUserContent}>
                      <div className={css.settingElement}>
                        <img
                          src={setting2Svg}
                          alt="Setting Svg"
                          className={css.setting2Svg}
                        />
                        <Link to="/settings" className={css.link}>
                          <p className={css.textLinkSetting} 
                          onClick={() => {
                            closeModalUser(); 
                          }}
                    >Setting</p>
                        </Link>
                      </div>
                      <div className={css.logOutElement}>
                        <img
                          src={logOutSvg}
                          alt="Setting Svg"
                          className={css.logOutSvg}
                        />
                        <p
                          className={css.textLinkLogOut}
                          onClick={() => {
                            closeModalUser(); 
                            dispatch(logOut()); 
                          }}
                        >
                          Log out
                        </p>
                      </div>
                    </div>
                  </div>
                )}



              </div>
            </>

            
          ) : (


            <>
              <Link
                to="/signin"
                onClick={() => handleClick('signin')}
                className={
                  activeLink === 'signin' ? css.activeAuthLink : css.authLink
                }
              >
                Sign in
              </Link>
              <span className={css.divider}> / </span>
              <Link
                to="/signup"
                onClick={() => handleClick('signup')}
                className={
                  activeLink === 'signup' ? css.activeAuthLink : css.authLink
                }
              >
                Sign up
              </Link>
              <img
                src={profileCircleSvg}
                alt="User"
                className={css.userProfile}
              />
            </>
          )}
        </div>
      </header>
    
  );
}

export default Header;
