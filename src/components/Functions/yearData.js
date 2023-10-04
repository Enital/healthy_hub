import zeroUpdate from 'components/Functions/zeroUpdate';

export default function monthData(dayArray, itemArray) {
  let monthData = [];
  let monthItem = [];
  let yearData = [];
  let yearItem = [];
  let isFirst = true;
  let averageItem = [];

  for (let i = 0; i < 365; i += 1) {
    if (dayArray[i] !== '1') {
      monthData.push(dayArray[i]);
      monthItem.push(itemArray[i]);
    } else {
      yearData.push(monthData);
      if (isFirst) {
        monthItem = [];
        isFirst = false;
      } else {
        yearItem.push(monthItem);
        monthData = [];
        monthItem = [];
        monthData.push(dayArray[i]);
        monthItem.push(itemArray[i]);
      }
    }
    if (i === 364) yearItem.push(monthItem);
  }

  for (let i = 0; i < 12; i += 1) {
    averageItem[i] = zeroUpdate(yearItem[i]);
  }

  return averageItem;
}
