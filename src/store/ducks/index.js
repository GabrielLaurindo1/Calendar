import { combineReducers } from "redux";
import toggleModal from "./modal";
import selectDayToReminder from "./modal";
import reminders from "./modal";
import toggleEditReminderModal from "./modal";
import selectReminder from "./modal";
import editReminder from "./modal";
import deleteReminder from "./modal";

export const Reducers = combineReducers({
  toggleModal,
  selectedDay: selectDayToReminder,
  reminders,
  toggleEditReminderModal,
  selectReminder,
  deleteReminder,
});
