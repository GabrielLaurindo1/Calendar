import React, { useState, useEffect, useLayoutEffect } from "react";
import { WeekDay, Wrapper, DateGrid, WeekGrid } from "./styles";
import Day from "../Day";
import { startOfMonth, format } from "date-fns";
export default function Calendar({ date, month, initialDate }) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // console.log(month);
  // console.log(initialDate + 1);
  // console.log(date);
  // console.log(startOfMonth(new Date(date)).getDay());
  // console.log(startOfMonth(new Date(date)).getDay());
  // console.log(new Date(date));

  return (
    <Wrapper>
      <WeekGrid>
        {weekDays.map((day, i) => (
          <WeekDay key={i} className="weekDay">
            {day}
          </WeekDay>
        ))}
      </WeekGrid>
      <DateGrid initialDate={initialDate}>
        {month.map((day, i) => {
          return <Day key={i} indice={i} date={day}></Day>;
        })}
      </DateGrid>
    </Wrapper>
  );
}
