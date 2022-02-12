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
        <div style={{ marginTop: '3px', fontSize: '30px', fontWeight: 'bold' }}>
          ↧
        </div>
      </div>
    </div>
  );
}
export default MyWeightItem;
