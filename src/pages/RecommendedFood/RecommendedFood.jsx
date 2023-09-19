import RecommendedFoodList from 'components/RecommendedFoodList/RecommendedFoodList';
import ketogenicDietIMG from './../../images/img/illustration-ketogenic-diet.svg';
import css from './RecommendedFood.module.css';
import recomendations from './goit-healthy-hub-db.recomendations';

const RecommendedFood = () => {
  return (
    <div className="container">
      <h1 className={css.title}>Recommented food</h1>
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
