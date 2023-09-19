import Today from 'components/Today/Today';
import DiaryOnMain from 'components/DiaryOnMain/DiaryOnMain';
import RecFoodOnMain from 'components/RecFoodOnMain/RecFoodOnMain';
import css from './Main.module.css';

const Main = () => {
  return (
    <div className="container">
       <Today />
      <div className={css.lowContainer}>
        <DiaryOnMain />
        <RecFoodOnMain />
      </div>
    </div>
  );
};

export default Main;
