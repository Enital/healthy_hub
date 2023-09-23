import RecommendedFoodList from 'components/RecommendedFoodList/RecommendedFoodList';
import css from './recFoodOnMain.module.css';
import { useEffect, useState } from 'react';
import getRecomendations from '../../redux/helpers/getRecomendations';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const RecFoodOnMain = () => {
  const [recomendations, setRecomendations] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    getRecomendations(token, 4)
      .then(data => {
        setRecomendations(data);
      })
      .catch(err => console.error('error:' + err));
  }, [token]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Recommended food</h1>
      <div className={css.wrapper}>
        <RecommendedFoodList products={recomendations} />
      </div>
      <NavLink className={css.link} to="/recommended-food">
        See more &#8594;
      </NavLink>
    </div>
  );
};

export default RecFoodOnMain;
