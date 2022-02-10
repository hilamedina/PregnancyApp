import React from 'react';
import '../myWeight/myWeight.css';

function MyWeightItem({ userWeight, index }) {
  console.log(userWeight.date);
  return (
    <div className="weight">
      {/* {userWeight.weight} */}
      <div>{userWeight.date}</div>
    </div>
  );
}
export default MyWeightItem;
