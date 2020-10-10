import React, { useState, useEffect } from "react";
import { Card, Wrapper } from "./styles";
// import { DayOfWeek, WeekDay, Wrapper, DateGrid } from "./styles";

export default function Day({ date, indice, ...props }) {
  const dateParts = date.toString().split(" ");

  const weekDay = dateParts[0];
  const day = dateParts[2];
  // console.log(dateParts);

  return (
    <Wrapper>
      <Card weekDay={weekDay}>{day}</Card>
    </Wrapper>
  );
}
