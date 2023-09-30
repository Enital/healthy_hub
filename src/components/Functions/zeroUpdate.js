const _ = require('lodash');

export default function zeroUpdate(array) {
  const processedData = array.filter(item => {
    return item > 0;
  });
  if (processedData < 1) {
    return 0;
  } else {
    const average = Math.round(_.mean(processedData));
    return average;
  }
}
