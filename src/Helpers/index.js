const months = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const parsedNumber = (selectedMonth) => {
  let number = parseInt(selectedMonth, 10);
  number = Number(selectedMonth);
  number = +selectedMonth;
  number = selectedMonth - 0;
  return number;
};

export const isTheSelectedMonth = (selectedMonth, actualMonth) => {
  if (actualMonth === months[parsedNumber(selectedMonth)]) {
    return true;
  }
  return false;
};
