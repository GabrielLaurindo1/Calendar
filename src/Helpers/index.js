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

const longMonths = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//REMOVE O 0 DA ESQUERDA DE UM NUMERO
export const parsedNumber = (selectedMonth) => {
  let number = parseInt(selectedMonth, 10);
  number = Number(selectedMonth);
  number = +selectedMonth;
  number = selectedMonth - 0;
  return number;
};

//VERIFICA SE OS MESES SELECIONADOS SÃO IGUAIS
export const isTheSelectedMonth = (selectedMonth, actualMonth) => {
  if (actualMonth === months[parsedNumber(selectedMonth)]) {
    return true;
  }
  return false;
};

//RECEBE UM OBJETO DATE E RETORNA UM OBJETO COM A DATA PARSEADA
export const dateParts = (dateObject) => {
  let parts = dateObject.toString().split(" ");
  let obj = {
    weekDay: parts[0],
    month: parts[1],
    day: parts[2],
    year: parts[3],
  };

  return obj;
};

//RECEBE O NUMERO DE UM MÊS E RETORNA SEU NOME
export const stringMonth = (month, short) => {
  return short ? months[parsedNumber(month)] : longMonths[parsedNumber(month)];
};
