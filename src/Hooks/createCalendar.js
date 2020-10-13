import React, { useState, useEffect } from "react";
import { getDaysInMonth, startOfMonth } from "date-fns";

export default function useCalendar(date) {
  const dateParts = date.split("-");
  const selectedMonth = dateParts[1];
  const selectedYear = dateParts[0];
  const hour = "00:00:00";
  const initialDayWeek =
    startOfMonth(new Date(selectedYear, selectedMonth - 1, 1)).getDay() + 1;

  let month = [];

  let totalDaysInMonth = getDaysInMonth(
    new Date(selectedYear, selectedMonth - 1, 1)
  );
  let totalDaysInLastMonth = getDaysInMonth(
    new Date(selectedYear, selectedMonth - 2, 1)
  );

  //PEGANDO DIAS DO ULTIMO MÊS PARA COMPLETAR O GRID
  for (let i = 1; i < initialDayWeek; i++) {
    month.unshift(
      new Date(
        `${selectedYear}-${selectedMonth - 1}-${
          totalDaysInLastMonth - (i - 1)
        },${hour}`
      )
    );
  }
  //DEFININDO O ARRAY QUE CONTEM TODOS OS DIAS A SEREM RENDERIZADOS NO CALENDARIO
  for (let day = 1; day <= totalDaysInMonth; day++) {
    month.push(new Date(`${selectedYear}-${selectedMonth}-${day},${hour}`));
  }

  return month;
}
