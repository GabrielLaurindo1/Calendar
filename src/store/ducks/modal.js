const initialState = {
  open: false,
  editReminderModal: false,
  selectedDay: {
    date: "",
  },
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
  REMINDER_DAY: "@REMINDER/DAY",
  ADD_REMINDER: "@ADD/REMINDER",
  TOGGLE_EDIT_REMINDER_MODAL: "@TOGGLE/EDIT_REMINDER_MODAL",
};

export const toggleModal = () => ({ type: modalTypes.HANDLE_MODAL });

export const toggleEditReminderModal = () => ({
  type: modalTypes.TOGGLE_EDIT_REMINDER_MODAL,
});

export const selectDayToReminder = (date) => ({
  type: modalTypes.REMINDER_DAY,
  date,
});
export const addReminder = (payload) => ({
  type: modalTypes.ADD_REMINDER,
  payload,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case modalTypes.HANDLE_MODAL:
      return { ...state, open: !state.open };
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
    default:
      return state;
  }
}
