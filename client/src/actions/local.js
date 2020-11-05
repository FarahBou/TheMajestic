export const SAVE_EVENT = 'SAVE_EVENT';
export const SAVE_EVENTS = 'SAVE_EVENTS';
export const SAVE_HOUR = 'SAVE_HOUR';

export const saveEvent = (value) =>
  // console.log('action', value);
  ({
    type: SAVE_EVENT,
    value,
  });

export const saveHour = (value) =>
// console.log('action', value);
  ({
    type: SAVE_HOUR,
    value,
  });

export const saveEvents = (value) =>
// console.log('action', value);
  ({
    type: SAVE_EVENTS,
    value,
  });
