import React from 'react';
import { useState, useEffect } from 'react';
import { getMyWeightData, addMyWeight } from '../../Api/Api';
import MyWeightForm from './myWeightForm';
import myWeightItem from './myWeightItem';
import '../myWeight/myWeight.css';

const AppmyWeight = (props) => {
  const myWeight = (weight, week) => {
    addMyWeight(setmyWeightData, weight, week);
  };

  const [myWeightData, setmyWeightData] = useState([]);
  useEffect(() => {
    getMyWeightData(myWeightData);
  }, []);
  return (
    <>
      <div className="weight-list">
        {myWeightData.map((userWeight, index) => (
          <myWeightItem
            key={index}
            index={index}
            userWeight={userWeight}
            completeTodo={myWeight}
            // removeTodo={deleteTodoItem}
          />
        ))}
      </div>
      <div>
        <MyWeightForm addMyWeight={myWeight} />
      </div>
      <div>
        <button onClick={props.returnToMainView}>Back</button>
      </div>
    </>
  );
};

export default AppmyWeight;
