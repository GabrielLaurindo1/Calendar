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
  const [notify, setNotify] = useState([]);
  const stringDate = `${year}/${selectedMonth}/${day}`;

  const { reminders } = useSelector((state) => state.reminders);
  // console.log(reminders);
  const handleNewReminder = () => {
    dispatch(toggleModal());
    dispatch(
      selectDayToReminder({
        date: stringDate,
      })
    );
  };

  useEffect(() => {
    let x = [];
    reminders.map((reminder) => {
      if (reminder.dateString === stringDate) {
        // setNotify([...notify, reminder]);
      }
      return setNotify([...notify, reminder]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reminders]);

  useEffect(() => {
    console.log(notify);
    console.log(stringDate);
    if (notify.length > 1) {
      console.log(notify[1].dateString);
    }
  }, [notify, stringDate]);

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
        <Footer>
          {notify.length > 1 ? (
            <>
              {notify.map((notf) => {
                if (notf.dateString == stringDate) {
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
