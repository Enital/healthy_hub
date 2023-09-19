import RecommendedFoodList from 'components/RecommendedFoodList/RecommendedFoodList';
import ketogenicDietIMG from './../../images/img/illustration-ketogenic-diet.svg';
import css from './RecommendedFood.module.css';
import { useEffect, useState } from 'react';
import getRecomendations from '../../redux/products/operations';

import { useSelector } from 'react-redux';

const RecommendedFood = () => {
  const [recomendations, setRecomendations] = useState([]);
  const token = useSelector(state => state.auth.token);


  useEffect(() => {
    getRecomendations(token, 10)
      .then(data => {
        setRecomendations(data);
      })
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <div className="container">
      <h1 className={css.title}>Recommended food</h1>
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={ketogenicDietIMG}
          alt="illustration-ketogenic-diet"
        />
        <RecommendedFoodList products={recomendations} />
      </div>
    </div>
  );
};

export default RecommendedFood;
