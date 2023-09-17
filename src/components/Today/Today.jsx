import { Link } from 'react-router-dom';
import DailyGoal from 'components/dailyGoal/dailyGoal';
import Water from 'components/water/water';
import Food from 'components/food/food';
import arrow from '../../images/icons/arrow-right.svg';

const Today = () => {
  return (
    <div className="today">
      <div>
        <h2>Today</h2>

        <Link to="">On the way to the goal</Link>
        <img src={arrow} alt="arrow" />
      </div>
      <div>
        <DailyGoal />
        <Water />
        <Food />
      </div>
    </div>
  );
};

export default Today;
