import React from 'react';

import css from './buildWeightChart.module.css';
const randomScaling = function () {
  return (
    (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 10 + 60)
  );
};

const data = [
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
];

function BuildWeightChart() {
  return (
    <>
      {/* {images.map(image => {
        return (
          <li className={css.item} key={image.id}>
            <div onClick={() => setSelectedImage(image)}>
              <ImageGalleryItem oneImage={image}></ImageGalleryItem>
            </div>
          </li>
      })} */}
      {/* {data.map((item, index) => { */}
      <div className={css.weightTable}>
        {data.map((item, index) => (
          <div className={css.tableBlock} key={index}>
            <tr className={css.tableUpRow}>
              <td>{item}</td>
            </tr>
            <tr className={css.tableDownRow}>
              <td>{index + 1}</td>
            </tr>
          </div>
        ))}
      </div>
    </>
  );
}

export default BuildWeightChart;
