import React from 'react';
import '../myWeight/myWeight.css';

function MyWeightItem({ userWeight, index }) {
  // console.log(userWeight.date);
  return (
    <div className="holdWeight">
      <div className="weight">
        <div>{userWeight.weight}</div>
        <div>{userWeight.date}</div>
      </div>
      <div style={{ marginRight: '100px', fontSize: '50px' }}>→</div>
    </div>
  );
}
export default MyWeightItem;
