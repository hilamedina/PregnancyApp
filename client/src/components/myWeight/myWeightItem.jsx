import React from 'react';
import '../myWeight/myWeight.css';

function MyWeightItem({ userWeight, index }) {
  return (
    <div className="container">
      <div className="holdWeight">
        <div className="weight">
          <div>{userWeight.weight} Kg</div>
          <div>{userWeight.date}</div>
        </div>
        <div>↧</div>
      </div>
    </div>
  );
}
export default MyWeightItem;
