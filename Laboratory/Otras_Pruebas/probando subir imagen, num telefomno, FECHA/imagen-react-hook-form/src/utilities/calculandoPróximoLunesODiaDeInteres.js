export const claculanding = (nextDayAccordToSelection) => {
  var day = new Date();
  var Nextday = day.getDay() === 0 ? 7 : day.getDay();
  var SumDay = 7 - Nextday;
  day.setDate(day.getDate() + SumDay + nextDayAccordToSelection);
  return day.getTime();
};
