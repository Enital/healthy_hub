import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import profileCircleSvg from '../../images/icons/profile-circle.svg';

import css from './header.module.css';

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  }

  return (
    <header className={css.header}>
      <Link to='/WelcomePage' className={css.link}>
        <h1 className={css.headline}>HealthyHub</h1>
      </Link>
      <div className={css.navigation}>
        <Link to="/signin" onClick={() => handleClick('signin')}
          className={activeLink === 'signin' ? css.activeAuthLink : css.authLink} > Sign in </Link>
        <span className={css.divider}> / </span>
        <Link to="/signup"  onClick={() => handleClick('signup')}
          className={activeLink === 'signup' ? css.activeAuthLink : css.authLink}>
          Sign up
        </Link>
        <img src={profileCircleSvg} alt="User" className={css.userProfile}/>
      </div>
    </header>
  );
}

export default Header;
