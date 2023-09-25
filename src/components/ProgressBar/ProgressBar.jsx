import React, { useEffect, useRef, useState } from 'react';
import css from './ProgressBar.module.css';

const ProgressBar = ({ page, setPage }) => {
  const [activePages, setActivePages] = useState([]);

  const circlesRef = useRef([]);
  const progressBarRef = useRef(null);

  useEffect(() => {
    circlesRef.current = document.querySelectorAll(`.${css.circle}`);
    progressBarRef.current = document.querySelector(`.${css.progressBar}`);
  }, []);

  useEffect(() => {
    if (!activePages.includes(page)) {
      setActivePages(prevActivePages => [...prevActivePages, page]);
    }
    const circles = circlesRef.current;
    const progressBar = progressBarRef.current;

    circles.forEach((circle, index) => {
      if (index < page) {
        circle.classList.add(css.vised);
      } else if (!page) {
        circle.classList.add(css.active);
      } else {
        circle.classList.remove(css.active);
      }
    });

    progressBar.style.width = `${((page - 1) / (circles.length - 1)) * 100}%`;
  }, [page, activePages]);

  return (
      <div className={css.body}>
        <div className={css.conteiner}>
          <div className={css.steps}>
            {[1, 2, 3, 4, 5].map(step => (
              <button
                key={step}
                className={`${css.circle} ${
                  step < page || activePages.includes(step)
                    ? css.vised
                    : step === page
                    ? css.active
                    : ''
                }`}
                onClick={() => {
                  if (step <= page || activePages.includes(step)) {
                    setPage(step);
                  }
                }}
              >
                {step}
              </button>
            ))}
            <div className={css.progressBar}>
              <span className={css.indecator}></span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProgressBar;
