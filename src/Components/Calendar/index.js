import React from "react";
import { WeekDay, Wrapper, DateGrid, WeekGrid } from "./styles";
import Day from "../Day";
export default function Calendar({ date, month, selectedMonth }) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Wrapper>
      <WeekGrid>
        {weekDays.map((day, i) => (
          <WeekDay key={i} className="weekDay">
            {day}
          </WeekDay>
        ))}
      </WeekGrid>
      <DateGrid>
        {month.map((day, i) => {
          return (
            <Day
              key={i}
              selectedMonth={selectedMonth}
              date={day}
              selectedDate={date}
            />
          );
        })}
      </DateGrid>
    </Wrapper>
  );
}
