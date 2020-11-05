export const GET_EVENTS = 'GET_EVENTS';
export const SEND_EVENT = 'SEND_EVENT';

export const getEvents = () => ({
  type: GET_EVENTS,
});

export const sendEvent = () => ({
  type: SEND_EVENT,
});
