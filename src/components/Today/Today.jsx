import { Link } from 'react-router-dom';
import DailyGoal from 'components/DailyGoal/DailyGoal';
import Water from 'components/Water/Water';
import Food from 'components/Food/Food';

const Today = () => {
  return (
    <div className="today">
      <h2>Today on Main Page</h2>
      <div>
        <h2>Today</h2>

        <Link to="">On the way to the goal</Link>
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
