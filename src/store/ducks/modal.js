const initialState = {
  open: false,
  selectedDay: {
    dateString: "",
    dateObject: new Date(),
    message: "",
    time: "",
  },
  reminders: [
    {
      dateString: "",
      dateObject: "",
    },
  ],
};

const modalTypes = {
  HANDLE_MODAL: "@HANDLE/MODAL",
  REMINDER_DAY: "@REMINDER/DAY",
  ADD_REMINDER: "@ADD/REMINDER",
};

export const toggleModal = () => ({ type: modalTypes.HANDLE_MODAL });
export const selectDayToReminder = (payload) => ({
  type: modalTypes.REMINDER_DAY,
  payload,
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
        selectedDay: {
          dateString: action.payload.dateString,
          dateObject: action.payload.dateObject,
        },
      };
    case modalTypes.ADD_REMINDER:
      console.log(action);
      return {
        ...state,
        reminders: [
          ...state.reminders,
          {
            dateString: state.selectedDay.dateString,
            dateObject: state.selectedDay.dateObject,
            time: action.payload.time,
            message: action.payload.message,
          },
        ],
      };
    default:
      return state;
  }
}
