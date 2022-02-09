import React from 'react';
import { useState } from 'react';
import '../myWeight/myWeight.css';
function MyWeightForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          // type="text"
          inputmode="numeric"
          placeholder="Enter your weight"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <br />
        <input
          type="text"
          inputmode="numeric"
          placeholder="Enter your week"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        /> */}
      </form>
    </div>
  );
}
export default MyWeightForm;
