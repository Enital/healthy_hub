export default function createGraphData(days, datesList, valuesList) {
  // const beginDate = createPeriod(days).begin;

  const allDatesByPeriod = [];
  for (let i = 0; i < days; i += 1) {
    const currentDate = addDays(beginDate, i);
    allDatesByPeriod.push(format(currentDate, 'yyyy-MM-dd'));
  }

  const allDaysByPeriod = [];
  for (let i = 0; i < days; i += 1) {
    const currentDay = addDays(beginDate, i);
    allDaysByPeriod.push(format(currentDay, 'd'));
  }

  const allValuesByPeriod = [];
  let previousValue = 0;
  for (let i = 0; i < days; i += 1) {
    const currentDate = allDatesByPeriod[i];
    const index = datesList.indexOf(currentDate);
    if (index === -1) {
      allValuesByPeriod.push(previousValue);
    } else {
      allValuesByPeriod.push(valuesList[index]);
      previousValue = valuesList[index];
    }
  }

  return {
    days: allDaysByPeriod,
    values: allValuesByPeriod,
  };
}
