export const parsedNumber = (selectedMonth) => {
  let number = parseInt(selectedMonth, 10);
  number = Number(selectedMonth);
  number = +selectedMonth;
  number = selectedMonth - 0;
  return number;
};
