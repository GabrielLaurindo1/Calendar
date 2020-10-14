import { combineReducers } from "redux";
import toggleModal from "./calendar";
import selectDayToReminder from "./calendar";
import reminders from "./calendar";
import selectReminder from "./calendar";
import deleteAllReminders from "./calendar";
import deleteReminder from "./calendar";
import toggleModalDelete from "./calendar";

export const Reducers = combineReducers({
  toggleModal,
  selectedDay: selectDayToReminder,
  reminders,
  selectReminder,
  deleteReminder,
  deleteAllReminders,
  toggleModalDelete,
});
