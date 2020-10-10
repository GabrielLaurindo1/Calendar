import React from "react";
import { Card, Wrapper, AddButton, DayNumber, Header } from "./styles";
import { parsedNumber } from "../../Helpers";
import { useSelector } from "react-redux";
import { toggleModal } from "../../store/ducks/modal";
import { useDispatch } from "react-redux";

export default function Day({ date, selectedMonth, ...props }) {
  const dateParts = date.toString().split(" ");
  const weekDay = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const dispatch = useDispatch();
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

  return (
    <Wrapper>
      <Card weekDay={weekDay}>
        <Header>
          <DayNumber
            seletedMonth={
              month === months[parsedNumber(selectedMonth)] ? true : false
            }
          >
            {day}
          </DayNumber>
          <AddButton weekDay={weekDay} onClick={() => dispatch(toggleModal())}>
            +
          </AddButton>
        </Header>
      </Card>
    </Wrapper>
  );
}
