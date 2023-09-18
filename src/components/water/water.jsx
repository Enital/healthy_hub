import React from 'react';
import { selectGoals } from 'redux/usersGoal/selectors';
import { useSelector } from 'react-redux';
import AddWaterModal from 'components/addWaterModal/addWaterModal';
import { addWater } from 'redux/usersGoal/operations';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Water() {
  const [number, setNumber] = useState();

  const [openModal, setOpenModal] = useState(false);
  const { items } = useSelector(selectGoals);

  const dispatch = useDispatch();

  useEffect(() => {
    if (number === undefined) {
      return;
    }
    dispatch(addWater(number));
  }, [dispatch, number]);

  const changeNumber = params => {
    setNumber(params);
  };

  const openModalHendler = () => {
    setOpenModal(true);
  };

  const closeModalHendler = () => {
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
        <div>fff</div>
        <div>
          <h3>Water consumption</h3>
          <div>
            <p>{waterGoal}ml</p>
            <p>left: {waterGoal - waterUsed}ml</p>
          </div>
          {openModal && (
            <AddWaterModal
              closeModal={closeModalHendler}
              changeNumber={changeNumber}
            />
          )}
          <button onClick={openModalHendler}>Add water intake</button>
        </div>
      </div>
    </div>
  );
}
