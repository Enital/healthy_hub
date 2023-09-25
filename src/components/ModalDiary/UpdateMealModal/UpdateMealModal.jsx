import React from 'react';
import css from './UpdateMealModal.module.css';
import Modal from 'react-modal';
// import Breakfast from '../../../images/illustration/breakfast-image.svg';
// import Lunch from '../../../images/illustration/lunch-image.svg';
// import Dinner from '../../../images/illustration/dinner-image.svg';
// import Snack from '../../../images/illustration/snack-image.svg';

// import { UpdateFood } from 'redux/usersGoal/operations';

// import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUserFoodOperation } from 'redux/user/userOperations';
// import { makeSelectMeal } from 'redux/user/userSelectors';

export const customStyles = {
  overlay: {
    background: 'rgba(5, 5, 5, 0.8)',
    overflow: 'scroll',
  },
};
// const imageObject = { Breakfast, Lunch, Dinner, Snack };

const UpdateMealModal = ({
  updateMealModalOpen,
  setUpdateMealModalOpen,
  selectedMeal,
  foodName,
  record,
}) => {
  // const dispatch = useDispatch();

  // const id = '6511967d4261b85ce32bb938';
  // const placeholderData = {
  //   name: 'Pasta carbonara',
  //   calories: 500,
  //   carbohydrates: 100.6,
  //   protein: 2.9,
  //   fat: 0.4,
  // };
  // const onUpdateMealModal = async () => {
  //   try {
  //     await dispatch(UpdateFood({ placeholderData, id }));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const [formData, setFormData] = useState({
  //   name: record.name,
  //   carbohydrates: record.carbohydrates,
  //   protein: record.protein,
  //   fat: record.fat,
  //   calories: record.calories,
  // });
  // const id = record._id;

  // console.log(formData);

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSave = e => {
  //   e.preventDefault();
  //   dispatch(UpdateFood({ formData, id }));
  // };
  // const [formData, setFormData] = useState({
  //   name: item.name,
  //   carbohydrates: breakfastDish.name.carbohydrates,
  //   height: user.height,
  //   weight: user.weight,
  //   gender: user.gender,
  //   activity: Number(user.activity),
  // });

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSave = e => {
  //   e.preventDefault();
  //   dispatch(updateUser(formData));
  // };

  return (
    <Modal
      className={`${css.recordMealModal} `}
      isOpen={updateMealModalOpen}
      style={customStyles}
      contentLabel="Example Modal"
      onRequestClose={() => {
        setUpdateMealModalOpen(false);
        document.body.style.overflow = 'auto';
      }}
    >
      <h3 className={css.recordMealModalTitle}>Edit your meal</h3>
      {/* <div className={css.recordMealModalMealImageContainer}>
        <img
          width="32px"
          height="32px"
          src={imageObject[selectedMeal]}
          alt="meal"
        />
        <p className={css.recordMealModalMeal}>{selectedMeal}</p>
      </div> */}
      <form noValidate>
        <div className={css.updateFoodForm}>
          {/* <h4 className={css.textBtn}>{foodName}</h4> */}
          <div className={css.inputWrapper}>
            <input
              style={{
                border: '1px solid rgba(227, 255, 168, 1)',
                borderRadius: '12px',
                width: '223px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(182, 182, 182, 1)',
                fontFamily: 'Poppins',

                paddingLeft: '10px',
                gap: '10px',
                background: 'black',
                marginRight: '10px',
              }}
              type="text"
              name="name"
              className={css.recordMealModalInput}
              value={foodName}
              required={true}
            />
            <input
              placeholder="Carbonoh."
              type="number"
              name="carbonohidrates"
              className={css.recordMealModalInput}
              value={0}
              required={true}
            />
            <input
              placeholder="Protein"
              type="number"
              name="protein"
              className={css.recordMealModalInput}
              value={0}
              required={true}
            />
            <input
              placeholder="Fat"
              name="fat"
              type="number"
              className={css.recordMealModalInput}
              value={0}
              required={true}
            />
          </div>
        </div>
        <div className={css.recordMealModalBtnContainer}>
          <button
            // onClick={handleSave}
            className={`${css.recordMealModalConfirmBtn}`}
          >
            Confirm
          </button>
          <button
            className={`${css.recordMealModalCancelBtn} `}
            type="button"
            onClick={() => {
              setUpdateMealModalOpen(false);
              document.body.style.overflow = 'auto';
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateMealModal;
