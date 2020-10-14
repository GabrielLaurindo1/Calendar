const initialState = {
  open: false,
  typeModal: "",
  openModalDelete: false,
  editReminderModal: false,
  selectedDay: {
    date: "",
  },
  selectedReminder: {},
  reminders: [
    {
      dateString: "",
      dateObject: "",
      time: "",
      message: "",
      color: "black",
      city: "",
      weather: "",
    },
  ],
};

const calendarTypes = {
  HANDLE_MODAL: "@HANDLE/MODAL",
  SELECT_DAY_REMINDER: "@SELECT/DAY_TO_REMINDER",
  SELECT_REMINDER: "@SELECT/REMINDER",
  ADD_REMINDER: "@ADD/REMINDER",
  EDIT_REMINDER: "@EDIT/REMINDER",
  TOGGLE_EDIT_REMINDER_MODAL: "@TOGGLE/EDIT_REMINDER_MODAL",
  DELETE_REMINDER: "@DELETE/REMINDER",
  DELETE_REMINDERS_DAY: "@DELETE/ALL_REMINDERS",
  TOGGLE_DELETE_MODAL: "@TOGGLE/DELETE_MODAL",
};

export const deleteReminder = (index) => ({
  type: calendarTypes.DELETE_REMINDER,
  index,
});

export const editReminder = (reminder) => ({
  type: calendarTypes.EDIT_REMINDER,
  reminder,
});

export const toggleModal = (typeModal) => ({
  type: calendarTypes.HANDLE_MODAL,
  typeModal,
});

export const selectReminder = (payload) => ({
  type: calendarTypes.SELECT_REMINDER,
  payload,
});

export const toggleModalDelete = () => ({
  type: calendarTypes.TOGGLE_DELETE_MODAL,
});

export const selectDayToReminder = (date) => ({
  type: calendarTypes.SELECT_DAY_REMINDER,
  date,
});
export const addReminder = (payload) => ({
  type: calendarTypes.ADD_REMINDER,
  payload,
});

export const deleteAllReminders = (date) => ({
  type: calendarTypes.DELETE_REMINDERS_DAY,
  date,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case calendarTypes.SELECT_DAY_REMINDER:
      return {
        ...state,
        selectedDay: action.date,
      };
    case calendarTypes.HANDLE_MODAL:
      return {
        ...state,
        open: !state.open,
        typeModal: action.typeModal,
      };
    case calendarTypes.REMINDER_DAY:
      return {
        ...state,
        selectedDay: action.date,
      };
    case calendarTypes.ADD_REMINDER:
      return {
        ...state,
        reminders: [
          ...state.reminders,
          {
            dateString: action.payload.dateString,
            color: action.payload.color,
            dateObject: action.payload.dateObject,
            time: action.payload.time,
            message: action.payload.message,
            city: action.payload.city,
            weather: action.payload.weather[0],
          },
        ],
      };
    case calendarTypes.TOGGLE_DELETE_MODAL:
      return { ...state, openModalDelete: !state.openModalDelete };
    case calendarTypes.SELECT_REMINDER:
      return { ...state, selectedReminder: action.payload };
    case calendarTypes.EDIT_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map((content, i) =>
          i === state.selectedReminder.index ? action.reminder : content
        ),
      };
    case calendarTypes.DELETE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map((content, i) =>
          i === action.index ? [] : content
        ),
      };
    case calendarTypes.DELETE_REMINDERS_DAY:
      return {
        ...state,
        reminders: state.reminders.map((content) =>
          state.selectedDay.date === content.dateString ? [] : content
        ),
      };
    default:
      return state;
  }
}
