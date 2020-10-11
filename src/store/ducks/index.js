import { combineReducers } from "redux";
import toggleModal from "./modal";
import selectDayToReminder from "./modal";
import reminders from "./modal";

export const Reducers = combineReducers({
  toggleModal,
  selectedDay: selectDayToReminder,
  reminders,
});
