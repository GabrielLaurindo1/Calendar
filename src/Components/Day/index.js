import React, { useEffect, useState } from "react";
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
  const [notify, setNotify] = useState(false);
  const { reminders } = useSelector((state) => state.reminders);
  // console.log(reminders);
  const handleNewReminder = () => {
    dispatch(toggleModal());
    dispatch(
      selectDayToReminder({
        date: `${year}/${selectedMonth}/${day}`,
      })
    );
  };

  useEffect(() => {
    console.log(reminders);
    reminders.map((reminder) => {
      if (reminder.dateString === `${year}/${selectedMonth}/${day}`) {
        setNotify(true);
      }
    });
  }, [day, reminders, selectedMonth, year]);

  return (
    <Wrapper>
      <Card weekDay={weekDay}>
        {notify && <>Notificação!</>}
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
