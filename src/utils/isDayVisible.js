import isBeforeDay from './isBeforeDay';
import isAfterDay from './isAfterDay';

export default function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  let firstDayOfFirstMonth = month.clone().startOf('jMonth');
  if (enableOutsideDays) firstDayOfFirstMonth = firstDayOfFirstMonth.startOf('jWeek');
  if (isBeforeDay(day, firstDayOfFirstMonth)) return false;

  let lastDayOfLastMonth = month.clone().add(numberOfMonths - 1, 'months').endOf('jMonth');
  if (enableOutsideDays) lastDayOfLastMonth = lastDayOfLastMonth.endOf('jWeek');
  return !isAfterDay(day, lastDayOfLastMonth);
}
