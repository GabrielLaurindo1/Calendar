import React, { useEffect, useState } from "react";
import {
  Card,
  Wrapper,
  AddButton,
  DayNumber,
  Header,
  Footer,
  Reminder,
} from "./styles";
import { isValidDate } from "../../Helpers";
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
  const activeDate = `${year}/${selectedMonth}/${day}`;
  const { reminders } = useSelector((state) => state.reminders);

  const handleNewReminder = () => {
    dispatch(toggleModal());
    dispatch(
      selectDayToReminder({
        date: activeDate,
      })
    );
  };

  return (
    <Wrapper>
      <Card weekDay={weekDay}>
        <Header>
          <DayNumber validDay={isValidDate(selectedMonth, date)}>
            {day}
          </DayNumber>

          {isValidDate(selectedMonth, date) && (
            <>
              <AddButton weekDay={weekDay} onClick={() => handleNewReminder()}>
                +
              </AddButton>
            </>
          )}
        </Header>
        <Footer>
          {reminders.length > 1 ? (
            <>
              {reminders.map((notf) => {
                if (notf.dateString === activeDate) {
                  return <Reminder color={notf.color} />;
                }
              })}
            </>
          ) : (
            ""
          )}
        </Footer>
      </Card>
    </Wrapper>
  );
}
