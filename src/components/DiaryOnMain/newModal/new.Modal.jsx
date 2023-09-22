import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import css from './RecordMealModal.module.css';
import Icons from '../../../images/icons/symbol-defs.svg';
import Breakfast from '../../../images/illustration/breakfast-image.svg';
import Lunch from '../../../images/illustration/lunch-image.svg';
import Dinner from '../../../images/illustration/dinner-image.svg';
import Snack from '../../../images/illustration/snack-image.svg';
import { useSelector } from 'react-redux';
import ButtonLoader from 'components/Loader/ButtonLoader';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import { useDispatch } from 'react-redux';
import { updateFoodOperations } from 'redux/user/userOperations';
import { Notify } from 'notiflix';
const imageObject = { Breakfast, Lunch, Dinner, Snack };

export const customStyles = {
  overlay: {
    background: 'rgba(5, 5, 5, 0.8)',
    overflow: 'scroll',
  },
};

const RecordMealModal = ({
  recordMealModalOpen,
  setRecordMealModalOpen,
  selectedMeal,
}) => {
  const isLoading = useSelector(state => state.user.isLoading);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [numberOfItems, setNumberOfItems] = useState(1);

  const [productNameArr, setProductNameArr] = useState(['']);
  const [carbonohidratesArr, setCarbonohidratesArr] = useState(['']);
  const [proteinArr, setProteinArr] = useState(['']);
  const [fatArr, setFatArr] = useState(['']);

  const dispatch = useDispatch();

  const handleDeleteRow = index => {
    if (numberOfItems > 1) {
      const newNumberOfItems = numberOfItems - 1;
      setNumberOfItems(newNumberOfItems);
      setProductNameArr(prev => prev.filter((_, i) => i !== index));
      setCarbonohidratesArr(prev => prev.filter((_, i) => i !== index));
      setProteinArr(prev => prev.filter((_, i) => i !== index));
      setFatArr(prev => prev.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    if (
      !productNameArr.includes('') &&
      !carbonohidratesArr.includes('') &&
      !proteinArr.includes('') &&
      !fatArr.includes('')
    ) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
      return;
    }

    const arrLength = productNameArr.length;

    for (let i = 0; i < arrLength; i++) {
      const carbonohydratesElemBoolean =
        parseFloat(carbonohidratesArr[i]) === 0;

      const fatElemBoolean = parseFloat(fatArr[i]) === 0;

      const proteinElemBoolean = parseFloat(proteinArr[i]) === 0;

      const nameElemBoolean = productNameArr[i].trim() === '';

      if (nameElemBoolean) {
        i = arrLength + 1;
        setSubmitButtonDisabled(true);
      } else {
        if (
          carbonohydratesElemBoolean &&
          fatElemBoolean &&
          proteinElemBoolean
        ) {
          i = arrLength + 1;
          setSubmitButtonDisabled(true);
        } else setSubmitButtonDisabled(false);
      }
    }
  }, [carbonohidratesArr, fatArr, productNameArr, proteinArr]);

  const onAddMoreButtonClick = () => {
    const newValue = numberOfItems + 1;
    setNumberOfItems(newValue);
    setProductNameArr(prev => [...prev, '']);
    setCarbonohidratesArr(prev => [...prev, '']);
    setProteinArr(prev => [...prev, '']);
    setFatArr(prev => [...prev, '']);
  };

  const onCloseButtonClick = () => {
    document.body.style.overflow = 'auto';
    setNumberOfItems(1);
    setRecordMealModalOpen(false);
    setProductNameArr(['']);
    setCarbonohidratesArr(['']);
    setProteinArr(['']);
    setFatArr(['']);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    document.body.style.overflow = 'auto';

    const sendedObj = {};
    sendedObj[selectedMeal.toLowerCase()] = productNameArr.map((el, i) => ({
      foodName: el.trim(),
      carbonohidrates: `${carbonohidratesArr[i]}`,
      fat: `${fatArr[i]}`,
      protein: `${proteinArr[i]}`,
    }));

    dispatch(updateFoodOperations(sendedObj))
      .unwrap()
      .then(() => onCloseButtonClick())
      .catch(e => {
        Notify.error(e.message, {
          theme: 'dark',
          autoClose: 2000,
          hideProgressBar: true,
        });
      });
  };

  const onNameChange = (evt, index) => {
    const string = evt.target.value.replace(/[0-9]/g, '');
    setProductNameArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };

  const onCarbonohidratesChange = (evt, index) => {
    let string = evt.target.value.replace(/[^\d]/g, '');
    if (parseFloat(string) < 0) {
      string = '0';
    }
    setCarbonohidratesArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };

  const onProteinChange = (evt, index) => {
    let string = evt.target.value.replace(/[^\d]/g, '');
    if (parseFloat(string) < 0) {
      string = '0';
    }

    setProteinArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };

  const onFatChange = (evt, index) => {
    let string = evt.target.value.replace(/[^\d]/g, '');
    if (parseFloat(string) < 0) {
      string = '0';
    }

    setFatArr(prev => {
      const resultArr = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) {
          resultArr[i] = string;
        } else {
          resultArr[i] = prev[i];
        }
      }

      return resultArr;
    });
  };
  return (
    <Modal
      className={`${css.recordMealModal} `}
      isOpen={recordMealModalOpen}
      onRequestClose={onCloseButtonClick}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3 className={css.recordMealModalTitle}>Record your meal</h3>
      <div className={css.recordMealModalMealImageContainer}>
        <img
          width="32px"
          height="32px"
          src={imageObject[selectedMeal]}
          alt="meal"
        />
        <p className={css.recordMealModalMeal}>{selectedMeal}</p>
      </div>
      <form>
        <ul className={css.recordMealModalInputsList}>
          {Array.from({ length: numberOfItems }, (_, i) => (
            <li key={i} className={css.recordMealModalInputsListItem}>
              <input
                placeholder="The name of the product or dish"
                type="text"
                maxLength="30"
                className={css.recordMealModalInput}
                value={productNameArr[i]}
                onChange={evt => onNameChange(evt, i)}
              />
              <input
                placeholder="Carbonoh."
                type="text"
                maxLength="3"
                className={css.recordMealModalInput}
                value={carbonohidratesArr[i]}
                onChange={evt => onCarbonohidratesChange(evt, i)}
              />
              <input
                placeholder="Protein"
                type="text"
                maxLength="3"
                className={css.recordMealModalInput}
                value={proteinArr[i]}
                onChange={evt => onProteinChange(evt, i)}
              />
              <input
                placeholder="Fat"
                type="text"
                maxLength="3"
                className={css.recordMealModalInput}
                value={fatArr[i]}
                onChange={evt => onFatChange(evt, i)}
              />

              {i > 0 && (
                <RiDeleteBin2Fill
                  style={{ top: 20, height: 40, cursor: 'pointer' }}
                  onClick={() => handleDeleteRow(i)}
                />
              )}
            </li>
          ))}
        </ul>
        <button
          className={css.recordMealModalAddMoreBtn}
          type="button"
          onClick={onAddMoreButtonClick}
        >
          <svg width="16px" height="16px" className={css.svgPlus}>
            <use xlinkHref={`${Icons}#add`} />
          </svg>
          Add more
        </button>
        <div className={css.recordMealModalBtnContainer}>
          {isLoading ? (
            <ButtonLoader />
          ) : (
            <button
              className={`${css.recordMealModalConfirmBtn} `}
              onClick={handleSubmit}
              type="submit"
              disabled={submitButtonDisabled}
            >
              Confirm
            </button>
          )}

          <button
            className={`${css.recordMealModalCancelBtn} `}
            type="button"
            onClick={onCloseButtonClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default RecordMealModal;
