import React from "react";
import { useSelector } from "react-redux";

export default function Reminders() {
  const { reminders } = useSelector((state) => state.reminders);
  return (
    <>
      {reminders.map((reminder) => (
        <>
          <div>{reminder.dateString}</div>
          <div>{reminder.time}</div>
          <div>{reminder.message}</div>
        </>
      ))}
      ola
    </>
  );
}
