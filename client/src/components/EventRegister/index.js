import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';
import { DateInput } from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';
import { Form } from 'semantic-ui-react';

const EventRegister = ({
  saveEvent, saveHour, sendEvent,
  nonWorkingDays, events,
  day, hour,
}) => {
  // console.log(events);

  const handleSelectDay = (evt, { value }) => {
    // console.log(value);
    if (value) {
      saveEvent(value);
      document.querySelectorAll('.button')
        .forEach(
          (button) => {
            button.disabled = false;
          },
        );
      const found = events.filter((event) => event.content === value);
      if (found) {
        found.forEach((event) => {
          if (event.hour) {
            document.querySelector(`button[name="${event.hour}"]`).disabled = true;
          }
        });
      }
    }
  };

  let countPress = 0;
  const handleSelectHour = (evt) => {
    evt.preventDefault();
    countPress += 1;
    const hourSelected = document.activeElement.getAttribute('name');
    if (!(countPress % 2 === 0)) {
      document.querySelector(`button[name="${hourSelected}"]`).style.backgroundColor = 'green';
      saveHour(hourSelected);
    }
    else {
      document.querySelector(`button[name="${hourSelected}"]`).style.backgroundColor = 'grey';
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt);
    if (hour && day) {
      sendEvent();
    }
    else {
      alert('Veuillez selectionner une date et une heure');
    }
  };

  return (
    <div>
      <Form autoComplete="off">
        <DateInput
          closable
          name="date"
          placeholder="Date"
          value={day}
          iconPosition="left"
          onChange={handleSelectDay}
          disable={nonWorkingDays}
        />
      </Form>
      <form onSubmit={handleSelectHour}>
        <button type="submit" name="09:00" className="button">9:00</button>
        <button type="submit" name="10:00" className="button">10:00</button>
        <button type="submit" name="11:00" className="button">11:00</button>
        <button type="submit" name="13:00" className="button">13:00</button>
        <button type="submit" name="14:00" className="button">14:00</button>
        <button type="submit" name="15:00" className="button">15:00</button>
        <button type="submit" name="16:00" className="button">16:00</button>
        <button type="submit" name="17:00" className="button">17:00</button>
      </form>
      <form onSubmit={handleSubmit}>
        <button type="submit">Je valide ma réservation</button>
      </form>
    </div>
  );
};

EventRegister.propTypes = {
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  nonWorkingDays: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  saveEvent: PropTypes.func.isRequired,
  sendEvent: PropTypes.func.isRequired,
  saveHour: PropTypes.func.isRequired,
};

export default EventRegister;
