import axios from 'axios';

import {
  GET_EVENTS,
} from 'src/actions/server';

import {
  saveEvents,
} from 'src/actions/local';

const getEventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_EVENTS:
      axios({
        method: 'get',
        url: 'http://localhost:3000/get-events',
      })
      // succès
        .then((response) => {
          // console.log((response.data));
          store.dispatch(saveEvents(response.data));
        })
      // échec
        .catch((error) => {
          console.log('Une erreur s\'est produite', error);
        });
      break;

    default:
      break;
  }
  // Passes à ton voisin
  next(action);
};

export default getEventsMiddleware;
