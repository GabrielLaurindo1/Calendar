import React, { useState, useEffect } from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import { getDaysInMonth, startOfMonth } from "date-fns";

import Reminders from "./Components/Reminders";
import AddReminder from "./Components/Reminders/AddReminder";
import { Wrapper, Container } from "./styles";
import { Title, BoxTitle } from "./Components/Reminders/styles";
import { dateParts, stringMonth } from "./Helpers";
import EditReminder from "./Components/Reminders/EditReminder";

function App() {
  const [date, setDate] = useState("");
  const dateParts = date.split("-");
  const selectedMonth = dateParts[1];
  const selectedYear = dateParts[0];
  const hour = "00:00:00";
  const [month, setMonth] = useState([]);

  // DESCOBRIR POR QUE TA VINDO O MÊS POSTERIOR
  const initialDayWeek =
    startOfMonth(new Date(selectedYear, selectedMonth - 1, 1)).getDay() + 1;

  useEffect(() => {
    setDate("2020-10-10");
  }, []);

  useEffect(() => {
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

    setMonth(month);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <>
      <AddReminder />
      <EditReminder />
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      <Wrapper>
        <Reminders />
        <Container>
          <BoxTitle>
            <Title>{stringMonth(selectedMonth)}</Title>
          </BoxTitle>
          <Calendar
            date={date}
            month={month}
            initialDayWeek={initialDayWeek}
            selectedMonth={selectedMonth}
          />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
