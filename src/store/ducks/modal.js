const initialState = {
  open: true,
};

const modalTypes = {
  HANDLE_MODAL: "@HANDLE/MODAL",
};

export const toggleModal = () => ({ type: modalTypes.HANDLE_MODAL });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case modalTypes.HANDLE_MODAL:
      return { ...state, open: !state.open };
    default:
      return state;
  }
}
