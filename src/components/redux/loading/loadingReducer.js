const initialState = {
  status: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        status: true,
      };
    case 'STOP_LOADING':
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
