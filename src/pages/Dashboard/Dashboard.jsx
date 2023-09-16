// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
// } from 'chart.js';

// import css from './dashboard.module.css';

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const labels = [
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   '11',
//   '12',
//   '13',
//   '14',
//   '15',
//   '16',
//   '17',
//   '18',
//   '19',
//   '20',
//   '21',
//   '22',
//   '23',
//   '24',
//   '25',
//   '26',
//   '27',
//   '28',
//   '29',
//   '30',
// ];

// const randomScaling = function () {
//   return (
//     (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 500 + 1250)
//   );
// };
// const randomWeight = function () {
//   return Math.round(Math.random() * 5) + 65;
// };

// const data = [
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
//   randomScaling(),
// ];
// const dataWeight = [
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
//   randomWeight(),
// ];

// const datasets = [
//   {
//     label: 'Water',
//     data: data,
//     fill: false,
//     showLine: true,
//     // strokeColor: 'rgba(255, 240, 196, 1)',
//     borderColor: '#E3FFA8',
//     borderWidth: 1,
//     tension: 0.4,
//     pointRadius: 0,
//   },
// ];
// const dataOne = {
//   labels,
//   datasets,
// };
// const dataTwo = {
//   labels,
//   datasets,
// };
// const dataThree = {
//   labels,
//   datasets,
// };
// // #292928;

// export const options = {
//   responsive: true,
//   scales: {
//     y: {
//       min: 0,
//       max: 3500,
//     },
//   },
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//     },
//   },
// };

// const Dashboard = () => {
//   return (
//     <div className={css.container}>
//       <div className={css.caloriesChart}>
//         <h3>Calories</h3>
//         <p>Average value: 1700 kcal</p>
//         <div className={css.chart}>
//           <Line options={options} data={dataOne} />
//         </div>
//       </div>

//       <div className={css.waterChart}>
//         <h3>Water</h3>
//         <p>Average value: 1700 ml</p>
//         <div className={css.chart}>
//           <Line options={options} data={dataTwo} />
//         </div>
//       </div>
//       <div className={css.weightChart}>
//         <h3>Weight</h3>
//         <p>Average value: 70 kg</p>
//         <Line options={options} data={dataThree} />
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import CaloriesChart from 'components/Charts/CaloriesChart/CaloriesChart';
import WaterChart from 'components/Charts/WaterChart/WaterChart';
import WeightChart from 'components/Charts/WeightChart/WeightChart';

import css from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.chartContainer}>
        <CaloriesChart />
        <WaterChart />
      </div>
      <WeightChart />
    </div>
  );
};

export default Dashboard;
