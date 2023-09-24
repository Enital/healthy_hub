import PropTypes from 'prop-types';
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

  return <div className={css.modal}>{children}</div>;
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
