import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from './addEventModal';
// import Modal from 'react-modal';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import moment from 'moment';

const Calender = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

  // const calendarRef = React.useRef < HTMLDivElement > null;
  const calendarRef = useRef();

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      // calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
    calendarApi.next();
  };

  async function handleEventAdd(data) {
    await axios.post('/create-event', data.event);
  }
  async function handleDatesSet(data) {
    const response = await axios.get(
      '/find-event?start=' +
        moment(data.start).toISOString() +
        '&end=' +
        moment(data.end).toISOString(),
      setEvents(response.data)
    );
  }
  return (
    <div>
      <section style={{ display: 'flex', width: '70vw', height: '70vh' }}>
        <button onClick={() => setModalOpen(true)}>Add Event</button>
        <FullCalendar
          ref={calendarRef}
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventAdd={(event) => handleEventAdd(event)}
          dateSet={(date) => handleDatesSet(date)}
        />
        <div style={{ position: 'relative', zIndex: 0 }}>
          <AddEventModal
            isOpen={modalOpen}
            isClose={() => setModalOpen(false)}
            onEventAdded={(event) => onEventAdded(event)}
          ></AddEventModal>
        </div>
      </section>
      <div>
        <button onClick={props.returnToMainView}>Back</button>
      </div>
    </div>
  );

  //   <div>calender</div>;
};

export default Calender;
