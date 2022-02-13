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
    // calendarApi.next();
  };

  async function handleEventAdd(data) {
    await axios.post(
      'http://localhost:5000/api/calandar/create-event',
      data.event
    );
  }
  async function handleDatesSet(data) {
    const { data: events } = await axios.get(
      `http://localhost:5000/api/calandar/get-event?start=${moment(
        data.start
      ).toISOString()}&end=${moment(data.end).toISOString()}`
    );
    console.log(events);
    setEvents(events);
  }
  async function getEvents(data) {
    const { data: events } = await axios.get(
      `http://localhost:5000/api/calandar/events`
    );
    console.log(events);
    setEvents(events);
  }
  return (
    <div>
      <section
        style={{
          padding: '10px',
          height: '70vh',
          width: '70vw',
          margin: 'auto',
        }}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            marginRight: '15px',
          }}
          onClick={props.returnToMainView}
        >
          Back
        </button>
        <button
          style={{ backgroundColor: 'transparent', border: 'none' }}
          onClick={() => setModalOpen(true)}
        >
          Add Event
        </button>
        <FullCalendar
          ref={calendarRef}
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventAdd={async (event) => await handleEventAdd(event)}
          datesSet={async () => await getEvents()}
        />
        <div style={{ position: 'relative', zIndex: 0 }}>
          <AddEventModal
            isOpen={modalOpen}
            isClose={() => setModalOpen(false)}
            onEventAdded={(event) => onEventAdded(event)}
          ></AddEventModal>
        </div>
      </section>
      {/* <div>
        <button onClick={props.returnToMainView}>Back</button>
      </div> */}
    </div>
  );

  //   <div>calender</div>;
};

export default Calender;
