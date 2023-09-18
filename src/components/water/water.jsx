import React, { useState } from 'react';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';
import AddWaterModal from 'components/addWaterModal/addWaterModal';

export default function Water() {
  const [openModal, setOpenModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const { items } = useSelector(selectGoals);

  const openModalHendler = () => {
    setOpenModal(true);
    setCloseModal(false);
  };

  const closeModalHendler = () => {
    setCloseModal(true);
    setOpenModal(false);
  };

  if (Object.keys(items).length === 0) {
    return;
  }
  const waterGoal = items.total.water.goal;
  const waterUsed = items.total.water.used;

  return (
    <div>
      <h2>Water</h2>
      <div>
        <div>graphic</div>
        <div>
          <h3>Water consumption</h3>
          <div>
            <p>{waterGoal}ml</p>
            <p>left: {waterGoal - waterUsed}ml</p>
          </div>
          {openModal && <AddWaterModal closeModal={closeModalHendler} />}
          <button onClick={openModalHendler}>Add water intake</button>
        </div>
      </div>
    </div>
  );
}
