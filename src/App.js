import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import { getDaysInMonth, startOfMonth, isEqual } from "date-fns";
function App() {
  const [date, setDate] = React.useState("");
  const x = date.split("-");
  const selectedMonth = x[1];
  const selectedYear = x[0];
  const selecetdDay = x[2];
  const hour = "00:00:00";
  const [month, setMonth] = useState([]);
  const initialDate = startOfMonth(
    new Date(selectedYear, selectedMonth - 1, 1)
  ).getDay();

  useEffect(() => {
    let daysInMonth = getDaysInMonth(
      new Date(selectedYear, selectedMonth - 1, 1)
    );
    let month = [];
    for (let day = 1; day <= daysInMonth; day++) {
      month.push(new Date(`${selectedYear}-${selectedMonth}-${day},${hour}`));

      if (month.length >= daysInMonth) {
        setMonth(month);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <>
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      <Calendar date={date} month={month} initialDate={initialDate + 1} />
    </>
  );
}

export default App;
