import axios from 'axios';

import {
  SEND_EVENT,
} from 'src/actions/server';

const sendEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EVENT: {
      const state = store.getState();
      // console.log('middleware', state.demo.event[0].title);
      axios({
        method: 'post',
        url: 'http://localhost:3000/add-event/',
        data: {
          event: state.demo.event,
          hour: state.demo.hour,
          userInfo: [
            {
              name: 'Tommy Shelby',
              email: 'peaky.blinders@fook.uk',
            },
          ],
        },
      })
      // succès
        .then((response) => {
          window.location.href = '/';
          // console.log(response);
        })
      // échec
        .catch((error) => {
          console.log('Une erreur s\'est produite', error);
        });
      break;
    }

    default:
      break;
  }
  // Passes à ton voisin
  next(action);
};

export default sendEventMiddleware;
