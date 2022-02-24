import React from 'react';
import { useState } from 'react';
import '../myWeight/myWeight.css';

function MyWeightForm({ myWeight }) {
  // console.log(addMyWeight);
  console.log(myWeight);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value);
    myWeight(value);
    setValue('');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          inputmode="numeric"
          placeholder="Enter your weight:"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
export default MyWeightForm;
