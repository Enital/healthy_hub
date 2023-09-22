import { useEffect } from 'react';

import css from './dashboardModal.module.css';
const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleOnClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleOnClose);

    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
  }, [onClose]);
  console.log(children);
  return <div className={css.modal}>{children}</div>;
};

export default Modal;
