// Action Types
import {
  SAVE_EVENTS,
  SAVE_EVENT,
  SAVE_HOUR,
  SAVE_COUNT,
} from 'src/actions/local';

// Initial State
const initialState = {
  nonWorkingDays: [],
  clientEvents: [],
  day: '',
  hour: '',
  count: 0,
};

// Reducer
const eventsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS:
      // console.log('reducer', action.value);
      return {
        ...state,
        nonWorkingDays: action.value.events[0],
        clientEvents: action.value.events[1],
      };

    case SAVE_EVENT:
      // console.log('reducer', action.value);
      return {
        ...state,
        day: action.value,
      };

    case SAVE_HOUR:
      // console.log('reducer', action.value);
      return {
        ...state,
        hour: action.value,
      };

    case SAVE_COUNT:
      // console.log('reducer', action.value);
      return {
        ...state,
        count: action.value,
      };

    default:
      return state;
  }
};

export default eventsReducer;
