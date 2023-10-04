export default function monthData(dayArray, itemArray) {
  let days = [];
  let data = [];

  const length = dayArray.length;

  for (let i = length - 31; i < length; i += 1) {
    days.push(dayArray[i]);
    data.push(itemArray[i]);
  }

  return { days, data };
}
