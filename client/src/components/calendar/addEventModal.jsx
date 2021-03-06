import React from 'react';
import modal from 'react-modal';
import Datetime from 'react-datetime';
import { useState } from 'react';
import Modal from 'react-modal';
import 'react-datetime/css/react-datetime.css';

const AddEventModal = ({ isOpen, isClose, onEventAdded }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    isClose();
  };
  return (
    <div>
      <Modal isOpen={isOpen} onRequestedClose={isClose} ariaHideApp={false}>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label>Start Date</label>
            <Datetime value={start} onChange={(date) => setStart(date)} />
          </div>
          <div>
            <label>End Date</label>
            <Datetime value={end} onChange={(date) => setEnd(date)} />
          </div>
          <button>Add Event</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddEventModal;
