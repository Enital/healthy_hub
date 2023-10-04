// import { getDate } from 'date-fns/esm';
// import { array } from 'yup';
export default function monthData(dayArray, itemArray) {
  // console.log(array);
  // console.log(dayArray[4]);
  // const array = dayArray;
  let monthData = [];
  let yearData = [];
  const array = dayArray;
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    // console.log(array[i]);
    if (array[i] !== '1') {
      monthData.push(array[i]);
    } else {
      // monthData.push(array[i]);
      console.log(monthData);
      yearData.push(monthData);
      monthData = [];
      monthData.push(array[i]);
      console.log(yearData);
    }
    if (i === length - 1) yearData.push(monthData);
  }

  // console.log(yearData);
  // console.log(dayArray);
  return yearData;
}
