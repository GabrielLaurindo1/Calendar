import React, { useState, useEffect } from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import { getDaysInMonth, startOfMonth } from "date-fns";
import { getMonth } from "date-fns";

import Reminders from "./Components/Reminders";
import Modal from "./Components/Reminders/Modal";
import ModalDelete from "./Components/Reminders/DeleteReminder";
import { Wrapper, Container, Box } from "./styles";
import { Title, BoxTitle } from "./Components/Reminders/styles";
import { stringMonth } from "./Helpers";
import { InputTime } from "./Components/Reminders/Modal/styles.js";

function App() {
  const [date, setDate] = useState("");
  const dateParts = date.split("-");
  const selectedMonth = dateParts[1];
  const selectedYear = dateParts[0];
  const hour = "00:00:00";
  const [month, setMonth] = useState([]);
  const today = `${new Date().getFullYear()}-${
    getMonth(new Date()) + 1
  }-${new Date().getDate()}`;

  const initialDayWeek =
    startOfMonth(new Date(selectedYear, selectedMonth - 1, 1)).getDay() + 1;

  useEffect(() => {
    setDate(today);
    console.log(today, date);
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
      <Modal />
      <ModalDelete />
      <Wrapper>
        <Box>
          <InputTime
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <Reminders />
        </Box>

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
