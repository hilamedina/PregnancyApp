import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../datepicker/datepicker.css';

export default function DatePicker(props) {
  const [date, setDate] = useState(new Date());

  return (
    <div className="date-Picker-style">
      {/* <h1 className="text-center">React Calendar</h1> */}
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        {/* <span className="bold">Selected Date:</span> {date.toDateString()} */}
      </p>
      <button onClick={props.returnToMainView}>Back</button>
    </div>
  );
}
