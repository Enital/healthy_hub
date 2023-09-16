import { Link } from 'react-router-dom/dist';
import Food from 'components/Food/Food';
import Water from 'components/Water/Water';
import DailyGoal from 'components/DailyGoal/DailyGoal';
const Today = () => {
  return (
    <div className="today">
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
