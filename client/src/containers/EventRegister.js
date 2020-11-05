import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import EventRegister from 'src/components/EventRegister';

// Action Creators
import { saveEvent, saveHour, saveCount } from 'src/actions/local';
import { sendEvent } from 'src/actions/server';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
function mapStateToProps(state) {
  // console.log(state.demo.events);
  return {
    day: state.events.day,
    hour: state.events.hour,
    count: state.events.count,
    nonWorkingDays: state.events.nonWorkingDays,
    events: state.events.clientEvents,
  };
}

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  saveEvent: (value) => {
    dispatch(saveEvent(value));
  },
  saveHour: (value) => {
    dispatch(saveHour(value));
  },
  sendEvent: () => {
    dispatch(sendEvent());
  },
  saveCount: (value) => {
    dispatch(saveCount(value));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const EventRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(EventRegister);

export default EventRegisterContainer;
