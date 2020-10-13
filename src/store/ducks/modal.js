const initialState = {
  open: false,
  typeModal: "",
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

const modalTypes = {
  HANDLE_MODAL: "@HANDLE/MODAL",
  SELECT_DAY_REMINDER: "@SELECT/DAY_TO_REMINDER",
  SELECT_REMINDER: "@SELECT/REMINDER",
  ADD_REMINDER: "@ADD/REMINDER",
  EDIT_REMINDER: "@EDIT/REMINDER",
  TOGGLE_EDIT_REMINDER_MODAL: "@TOGGLE/EDIT_REMINDER_MODAL",
  DELETE_REMINDER: "@DELETE/REMINDER",
};

export const deleteReminder = (index) => ({
  type: modalTypes.DELETE_REMINDER,
  index,
});

export const editReminder = (reminder) => ({
  type: modalTypes.EDIT_REMINDER,
  reminder,
});

export const toggleModal = (typeModal) => ({
  type: modalTypes.HANDLE_MODAL,
  typeModal,
});

export const selectReminder = (payload) => ({
  type: modalTypes.SELECT_REMINDER,
  payload,
});

export const toggleEditReminderModal = () => ({
  type: modalTypes.TOGGLE_EDIT_REMINDER_MODAL,
});

export const selectDayToReminder = (date) => ({
  type: modalTypes.SELECT_DAY_REMINDER,
  date,
});
export const addReminder = (payload) => ({
  type: modalTypes.ADD_REMINDER,
  payload,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case modalTypes.SELECT_DAY_REMINDER:
      return {
        ...state,
        selectedDay: action.date,
      };
    case modalTypes.HANDLE_MODAL:
      return {
        ...state,
        open: !state.open,
        typeModal: action.typeModal,
      };
    case modalTypes.REMINDER_DAY:
      return {
        ...state,
        selectedDay: action.date,
      };
    case modalTypes.ADD_REMINDER:
      return {
        ...state,
        reminders: [
          ...state.reminders,
          {
            dateString: state.selectedDay.date,
            color: action.payload.color,
            dateObject: new Date(
              `${state.selectedDay.date},${action.payload.time}`
            ),
            time: action.payload.time,
            message: action.payload.message,
            city: action.payload.city,
            weather: action.payload.weather[0],
          },
        ],
      };
    case modalTypes.TOGGLE_EDIT_REMINDER_MODAL:
      return { ...state, editReminderModal: !state.editReminderModal };
    case modalTypes.SELECT_REMINDER:
      return { ...state, selectedReminder: action.payload };
    case modalTypes.EDIT_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map((content, i) =>
          i === state.selectedReminder.index ? action.reminder : content
        ),
      };
    case modalTypes.DELETE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map((content, i) =>
          i === action.index ? [] : content
        ),
      };
    default:
      return state;
  }
}
