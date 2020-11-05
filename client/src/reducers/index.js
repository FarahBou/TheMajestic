import { combineReducers } from 'redux';

import eventsReducer from './events';

const rootReducer = combineReducers({
  events: eventsReducer,
  // ... autres reducers
});

export default rootReducer;
