import React from "react";
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
import {
  toggleModal,
  selectDayToReminder,
  toggleModalDelete,
} from "../../store/ducks/calendar";
import { useDispatch } from "react-redux";

export default function Day({ date, selectedMonth }) {
  const dispatch = useDispatch();

  const dateParts = date.toString().split(" ");
  const weekDay = dateParts[0];
  const day = dateParts[2];
  const year = dateParts[3];

  const activeDate = `${year}/${selectedMonth}/${day}`;
  const { reminders } = useSelector((state) => state.reminders);

  const handleNewReminder = () => {
    dispatch(toggleModal("create"));
    dispatch(
      selectDayToReminder({
        date: activeDate,
      })
    );
  };

  const handleDeleteReminder = () => {
    dispatch(
      selectDayToReminder({
        date: activeDate,
      })
    );
    dispatch(toggleModalDelete());
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
              <div style={{ display: "flex" }}>
                <AddButton
                  style={{ marginRight: "5px" }}
                  weekDay={weekDay}
                  onClick={() => handleDeleteReminder()}
                >
                  x
                </AddButton>
                <AddButton
                  weekDay={weekDay}
                  onClick={() => handleNewReminder()}
                >
                  +
                </AddButton>
              </div>
            </>
          )}
        </Header>
        <Footer>
          {reminders.length > 1 && (
            <>
              {reminders.map((notf) => {
                if (notf.dateString === activeDate) {
                  return <Reminder color={notf.color} />;
                }
              })}
            </>
          )}
        </Footer>
      </Card>
    </Wrapper>
  );
}
