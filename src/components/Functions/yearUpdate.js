export default function yearUpdate() {
  const MONTH = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let yearMonth = [];
  const today = new Date();
  const todayMonth = today.getMonth();

  for (let i = 0; i < 12; i += 1) {
    if (todayMonth + i > 10) {
      yearMonth[i] = MONTH[todayMonth + i - 11];
    } else {
      yearMonth[i] = MONTH[todayMonth + i + 1];
    }
  }

  return yearMonth;
}
