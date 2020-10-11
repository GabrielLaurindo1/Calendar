import React from "react";
import { Card, Wrapper, AddButton, DayNumber, Header } from "./styles";
import { isTheSelectedMonth } from "../../Helpers";
import { useSelector } from "react-redux";
import { toggleModal, selectDayToReminder } from "../../store/ducks/modal";
import { useDispatch } from "react-redux";

export default function Day({ date, selectedMonth, ...props }) {
  const dateParts = date.toString().split(" ");
  const weekDay = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const year = dateParts[3];
  const dispatch = useDispatch();

  const handleNewReminder = () => {
    dispatch(toggleModal());
    dispatch(
      selectDayToReminder({
        dateString: `${day}/${selectedMonth}/${year}`,
        dateObject: date,
      })
    );
  };

  return (
    <Wrapper>
      <Card weekDay={weekDay}>
        <Header>
          <DayNumber seletedMonth={isTheSelectedMonth(selectedMonth, month)}>
            {day}
          </DayNumber>

          {isTheSelectedMonth(selectedMonth, month) && (
            <>
              <AddButton weekDay={weekDay} onClick={() => handleNewReminder()}>
                +
              </AddButton>
            </>
          )}
        </Header>
      </Card>
    </Wrapper>
  );
}
