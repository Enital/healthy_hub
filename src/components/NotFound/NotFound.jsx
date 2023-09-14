import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FcHighPriority } from 'react-icons/fc';

import css from './notFound.module.css';

const NotFound = () => {
  const [count, setCount] = useState('3');

  const navigate = useNavigate();

  const errorFunc = () => navigate('/');

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    }
  }, [count]);

  if (count === 0) errorFunc();

  return (
    <div className={css.error}>
      <h1>Sorry! But this page does not exist!</h1>
      {/* <FcHighPriority className={css.icon} /> */}
    </div>
  );
};

export default NotFound;
